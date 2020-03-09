import styled, { css } from 'styled-components';

import media from 'common/services/dimensions-service';

const getTextColor = ({ theme }) => theme.colors.slate;

const getPointerEvents = ({ isAnswerSubmitted }) => (
  isAnswerSubmitted
    ? 'none'
    : 'auto'
);

const getBackgroundColor = ({ theme, isLabelActive }) => (
  isLabelActive
    ? theme.colors.lightBlue
    : theme.colors.white
);

const getBorderColor = ({ theme, isLabelActive }) => (
  isLabelActive
    ? theme.colors.darkBlue
    : theme.colors.darkGray
);

const getHoverStyles = ({ theme, isLabelActive }) => !isLabelActive && `
  :hover {
    background: ${theme.colors.lightGray};
    cursor: pointer;
  }
`;

const getFocusStyles = ({ isAnswerSubmitted }) => isAnswerSubmitted && `
  :focus {
    outline: none;
  }
`;

const baseStyles = css`
  align-items: center;
  background: ${getBackgroundColor};
  border: 2px solid ${getBorderColor};
  border-radius: 16px;
  color: ${getTextColor};
  display: flex;
  font-size: 16px;
  height: 36px;
  justify-content: center;
  margin: 10px 0;
  max-width: 100%;
  padding: 12px 16px;
  pointer-events: ${getPointerEvents};
`;

export default styled.span`
  ${baseStyles}
  ${getHoverStyles}
  ${getFocusStyles}
  ${media.LARGE`
    height: 40px;
  `}
`;
