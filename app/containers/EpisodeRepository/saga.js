import { takeLatest, call, put, select } from 'redux-saga/effects';
import request from 'utils/request';
import {
  LOAD_EPISODES,
  SET_SEASON,
} from './constants';
import {
  loadEpisodes,
  loadEpisodesError,
  loadEpisodesSuccess,
} from './actions';

export function* loadEpisodesSaga(action) {
  try {
    const season = action.payload;
    const url = `/api/episods${season ? `?season=${season}` : ''}`;
    const response = yield call(request, url);
    yield put(loadEpisodesSuccess(response));
  } catch (e) {
    yield put(loadEpisodesSuccess([]));
  }
}

export function* seasonSearchSaga(action) {
  yield put(loadEpisodes(action.payload));
}

export default function* episodeRepositoryRootSaga() {
  yield takeLatest(LOAD_EPISODES, loadEpisodesSaga);
  yield takeLatest(SET_SEASON, seasonSearchSaga);
}
