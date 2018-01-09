import { createSelector } from 'reselect';

/**
 * Direct selector to the episodeRepository state domain
 */
const selectEpisodeRepositoryDomain = (state) => state.get('episodeRepository');

/**
 * Other specific selectors
 */


/**
 * Default selector used by EpisodeRepository
 */

const makeSelectEpisodeRepository = () => createSelector(
  selectEpisodeRepositoryDomain,
  (substate) => substate.toJS()
);

const makeSelectTitle = () => createSelector(
  selectEpisodeRepositoryDomain,
  (substate) => substate.getIn(['data', 'title']),
);

const makeSelectSeason = () => createSelector(
  selectEpisodeRepositoryDomain,
  (substate) => substate.getIn(['data', 'season']),
);

export default makeSelectEpisodeRepository;
export {
  selectEpisodeRepositoryDomain,
  makeSelectTitle,
  makeSelectSeason,
};
