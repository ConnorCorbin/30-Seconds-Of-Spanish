import styled, { css } from 'styled-components';

const getTextColor = ({ theme }) => theme.colors.slate;

const getPointerEvents = ({ isAnswerSubmitted }) => isAnswerSubmitted && 'pointer-events: none;';

const getBackgroundColor = ({ theme, isActive }) => (
  isActive
    ? theme.colors.lightBlue
    : theme.colors.white
);

const getHoverStyles = ({ theme, isActive }) => {
  if (isActive) return null;

  return css`
    :hover {
      background: ${theme.colors.lightGray};
      cursor: pointer;
    }
  `;
};

const getBorderColor = ({ theme, isActive }) => (
  isActive
    ? theme.colors.darkBlue
    : theme.colors.darkGray
);

const baseStyles = css`
  align-items: center;
  background: ${getBackgroundColor};
  border: 2px solid ${getBorderColor};
  border-radius: 16px;
  color: ${getTextColor};
  display: flex;
  font-size: 16px;
  height: 54px;
  justify-content: center;
  margin: 10px 0;
  max-width: 100%;
  padding: 12px 16px;
`;

export default styled.span`
  ${baseStyles}
  ${getPointerEvents}
  ${getHoverStyles}
`;
