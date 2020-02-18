import styled from 'styled-components';

const getTextColor = ({ textColor }) => textColor || 'initial';

export default styled.span`
  height: 100%;
  display: flex;
  color: ${getTextColor};
  width: 100%;
`;
