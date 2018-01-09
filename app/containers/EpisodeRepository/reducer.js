/*
 *
 * EpisodeRepository reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_EPISODES,
  LOAD_EPISODES_ERROR,
  LOAD_EPISODES_SUCCESS,
  SET_SEASON,
  SET_TITLE,
} from './constants';

const initialState = fromJS({
  loading: true,
  error: null,
  data: {
    title: null,
    episodes: null,
    season: null,
  },
});

export const searchCases = (state, action) => ({
  [SET_SEASON]: () => state.setIn(['data', 'season'], action.payload),
  [SET_TITLE]: () => state.setIn(['data', 'title'], action.payload),
});

export const episodesCases = (state, action) => ({
  [LOAD_EPISODES]: () => state
    .set('loading', true)
    .set('error', null),
  [LOAD_EPISODES_ERROR]: () => state
    .set('loading', null)
    .set('error', action.paylaod)
    .setIn(['data', 'episodes'], null),
  [LOAD_EPISODES_SUCCESS]: () => state
    .set('loading', null)
    .set('error', null)
    .setIn(['data', 'episodes'], action.payload),
});

export default (state = initialState, action) => {
  const cases = {
    ...episodesCases(state, action),
    ...searchCases(state, action),
    default: () => state,
  };
  return (cases[action.type] || cases.default)();
};
