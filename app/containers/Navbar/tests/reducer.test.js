
import { fromJS } from 'immutable';
import navbarReducer from '../reducer';

describe('navbarReducer', () => {
  it('returns the initial state', () => {
    expect(navbarReducer(undefined, {})).toEqual(fromJS({}));
  });
});
