import styled from 'styled-components';

const getTextColor = ({ theme }) => theme.colors.slate;

export default styled.div`
  color: ${getTextColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
