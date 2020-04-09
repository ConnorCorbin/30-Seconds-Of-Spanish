import styled from 'styled-components';

const getIconBackgroundColor = ({ theme }) => theme.colors.iconBackground;

export default styled.div`
  align-items: center;
  background: ${getIconBackgroundColor};
  border-radius: 50%;
  display: flex;
  height: 80px;
  justify-content: center;
  margin: auto 16px auto 16px;
  width: 80px;
  
  svg {
    height: 36px;
    width: 36px;
  }
`;
