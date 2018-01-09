/**
 *
 * EpisodeRepository
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
const queryString = require('query-string');

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {
  makeSelectLocation
} from 'containers/App/selectors';
import makeSelectEpisodeRepository from './selectors';
import reducer from './reducer';
import Episode from './components/Episode';
import Wrapper from './Wrapper';
import saga from './saga';

import {
  loadEpisodes,
} from './actions';

class EpisodeRepository extends React.Component {
  componentDidMount() {
    const {
      location,
    } = this.props;
    const obje = queryString.parse(location.search);
    this.props.onComponentDidMount(obje.season || null);
  }
  generateEpisode = (item) => <Episode key={item.id} data={item} />
  renderContent() {
    const {
      episodeRepository: {
        data: {
          episodes,
          title,
        },
      },
    } = this.props;
    return (
      <Wrapper>
        {
          episodes
            .filter(x => x.name.toLowerCase().startsWith((title || '').toLowerCase()))
            .map(x => this.generateEpisode(x))
        }
      </Wrapper>
    );
  }
  renderLoading() {
    return <div></div>;
  }
  render() {
    const {
      location,
      episodeRepository: {
        loading,
        error,
        data: {
          episodes,
        },
      },
    } = this.props;
    return this[`render${!loading || episodes ? 'Content' : 'Loading'}`]();
  }
}
EpisodeRepository.propTypes = {
  onComponentDidMount: PropTypes.func.isRequired,
  location: PropTypes.object,
  episodeRepository: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  episodeRepository: makeSelectEpisodeRepository(),
  location: makeSelectLocation(),
});

const mapDispatchToProps = {
  onComponentDidMount: loadEpisodes,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'episodeRepository', reducer });
const withSaga = injectSaga({ key: 'episodeRepository', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(EpisodeRepository);
