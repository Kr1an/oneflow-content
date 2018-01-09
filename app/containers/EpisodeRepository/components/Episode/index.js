/**
*
* Episode
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';
import Image from './Image';
import Title from './Title';
import Wrapper from './Wrapper';

function Episode({ data }) {
  return (
    <Wrapper key={data.id}>
      <Image style={{ backgroundImage: `url(${data.image.medium}` }} >
      </Image>
      <Title>
        {
          data.name
        }
      </Title>
    </Wrapper>
  );
}

Episode.propTypes = {
  data: PropTypes.object,
};

export default Episode;
