import styled from 'styled-components';

export default styled.input`
  width: 300px;
  box-shadow: inset 0 -0px 0 gray;
  height: 40px;
  margin: 10px;
  transition: 0.4s;
  outline: none;
  font-size: 30px;
  text-align: center;
  font-family: monospace;

  &:focus {
    text-align: left;
    font-weight: bold;
    box-shadow: inset 0 -3px 0 black;
  }
`;
