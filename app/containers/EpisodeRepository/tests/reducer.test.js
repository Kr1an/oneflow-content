
import { fromJS } from 'immutable';
import episodeRepositoryReducer from '../reducer';

describe('episodeRepositoryReducer', () => {
  it('returns the initial state', () => {
    expect(episodeRepositoryReducer(undefined, {})).toEqual(fromJS({}));
  });
});
