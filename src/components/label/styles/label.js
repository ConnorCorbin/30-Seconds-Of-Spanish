import styled, { css } from 'styled-components';

import StyledImage from 'components/image/styles/image';
import StyledWrapper from 'components/image/styles/wrapper';

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

const getHeight = ({ isImageLabel }) => (
  isImageLabel
    ? '56px'
    : '36px'
);

const getAdditionalImageLabelStyles = ({ isImageLabel }) => isImageLabel && `
  ${StyledImage}, ${StyledWrapper} {
    height: 100%;
    width: auto;
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
  height: ${getHeight};
  justify-content: center;
  margin: 10px 0;
  max-width: 100%;
  padding: 12px 16px;
  pointer-events: ${getPointerEvents};
`;

export default styled.div`
  ${baseStyles}
  ${getHoverStyles}
  ${getFocusStyles}
  ${getAdditionalImageLabelStyles}
`;
