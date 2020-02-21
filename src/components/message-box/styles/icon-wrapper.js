import styled from 'styled-components';

const getBackgroundColor = ({ theme }) => theme.colors.white;

export default styled.div`
  align-items: center;
  background: ${getBackgroundColor};
  border-radius: 50%;
  display: flex;
  height: 80px;
  justify-content: center;
  margin-right: 16px;
  width: 80px;
  
  svg {
    height: 36px;
    width: 36px;
  }
`;
