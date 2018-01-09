/**
 *
 * Navbar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import {
  makeSelectTitle,
  makeSelectSeason,
} from 'containers/EpisodeRepository/selectors';

import {
  setSeason,
  setTitle,
} from 'containers/EpisodeRepository/actions';
import makeSelectNavbar from './selectors';
import reducer from './reducer';
import Wrapper from './Wrapper';
import Input from './Input';


function Navbar({
  title,
  season,
  onTitleInputChanged,
  onSeasonInputChanged,
}) {
  return (
    <Wrapper>
      <Input
        placeholder="season"
        value={season || ''}
        onChange={(e) => onSeasonInputChanged(e.target.value)}
      />
      <Input
        placeholder="title"
        value={title || ''}
        onChange={(e) => onTitleInputChanged(e.target.value)}
      />
    </Wrapper>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  season: PropTypes.string,
  onTitleInputChanged: PropTypes.func,
  onSeasonInputChanged: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  navbar: makeSelectNavbar(),
  title: makeSelectTitle(),
  season: makeSelectSeason(),
});

const mapDispatchToProps = {
  onTitleInputChanged: setTitle,
  onSeasonInputChanged: setSeason,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'navbar', reducer });

export default compose(
  withReducer,
  withConnect,
)(Navbar);
