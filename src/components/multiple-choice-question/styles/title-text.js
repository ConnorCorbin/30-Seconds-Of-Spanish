import styled from 'styled-components';

const getTextColor = ({ theme }) => theme.colors.slate;

export default styled.h1`
  color: ${getTextColor};
  font-size: 32px;
  line-height: 40px;
  margin: 0 0 24px 0;
  text-align: left;
`;
