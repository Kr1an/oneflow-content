import styled from 'styled-components';

export default styled.div`
  box-shadow: 0 0 0 3px black;
  margin: 15px;
  z-index: 10;
  position: relative;
  text-align: center;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
