/*
 *
 * EpisodeRepository actions
 *
 */

import {
  LOAD_EPISODES,
  LOAD_EPISODES_ERROR,
  LOAD_EPISODES_SUCCESS,
  SET_SEASON,
  SET_TITLE,
} from './constants';

export const loadEpisodes = (payload) => ({ type: LOAD_EPISODES, payload });
export const loadEpisodesError = (payload) => ({ type: LOAD_EPISODES_ERROR, payload });
export const loadEpisodesSuccess = (payload) => ({ type: LOAD_EPISODES_SUCCESS, payload });

export const setSeason = (payload) => ({ type: SET_SEASON, payload });
export const setTitle = (payload) => ({ type: SET_TITLE, payload });
