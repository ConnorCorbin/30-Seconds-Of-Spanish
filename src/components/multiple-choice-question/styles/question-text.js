import styled from 'styled-components';

const getTextColor = ({ theme }) => theme.colors.slate;

export default styled.span`
  color: ${getTextColor};
  font-size: 20px;
  line-height: 14px;
`;
