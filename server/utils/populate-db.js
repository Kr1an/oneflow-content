import fetch from 'request-promise';
import { Episode } from '../models';

export const populateEpisods = async () => {
  try {
    const res = await fetch('https://gist.githubusercontent.com/thekiwi/ab70294c8d7ab790d9b6d70df9d3d145/raw/14513c7b841b37b2406dda4d3b9143a25700a68e/silicon-valley.json');
    const obj = JSON.parse(res);
    const episodes = obj._embedded.episodes;
    console.log(episodes.length);
    episodes.forEach(async (x) => {
      console.log(x);
      const el = await Episode.findOne({ id: x.id });
      console.log(el);
      if (el) {
        return;
      }
      const toCreate = new Episode(x);
      await toCreate.save();
    });
  } catch (e) {
    console.log(e);
  }
};
