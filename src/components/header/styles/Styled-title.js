import styled from 'styled-components';

const getTextColor = ({ textColor }) => textColor || 'initial';

export default styled.span`
  color: ${getTextColor};
  display: flex;
  font-size: 16px;
  height: 100%;
  width: 100%;
`;
