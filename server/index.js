/* eslint consistent-return:0 */
import 'babel-polyfill';
import { Episode } from './models';
import { populateEpisods } from './utils/populate-db';

const express = require('express');
const logger = require('./logger');

const mongoose = require('mongoose');

const envConfig = require('./config');

const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const dbConfig = (isDev ? envConfig.development : envConfig.production).database;
const resolve = require('path').resolve;
const app = express();


const router = express.Router();

mongoose.connect(`mongodb://${dbConfig.auth ? `${dbConfig.user}:${dbConfig.pwd}` : ''}${dbConfig.host}:${dbConfig.port}/${dbConfig.dbname}`, {
  useMongoClient: true,
});

Episode.remove({}, () => null);
populateEpisods();

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
router.route('/episods')
  .get((req, res) => {
    const filter = {};
    if (req.query.season) {
      filter.season = req.query.season;
    }
    Episode.find(filter, (err, episods) => {
      console.log(err);
      res.contentType = 'application/json';
      return res.json(episods);
    });
  });

app.use('/api', router);

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// Start your app.
app.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr);
      }

      logger.appStarted(port, prettyHost, url);
    });
  } else {
    logger.appStarted(port, prettyHost);
  }
});
