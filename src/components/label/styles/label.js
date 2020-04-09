import styled, { css } from 'styled-components';

import StyledWrapper from 'components/image/styles/wrapper';
import StyledImage from 'components/image/styles/image';

const getTextColor = ({ theme }) => theme.colors.text;

const getPointerEvents = ({ isAnswerSubmitted }) => (
  isAnswerSubmitted
    ? 'none'
    : 'auto'
);

const getBackgroundColor = ({ theme, isLabelActive }) => (
  isLabelActive
    ? theme.colors.activeLabelBackground
    : theme.colors.labelBackground
);

const getBorderColor = ({ theme, isLabelActive }) => (
  isLabelActive
    ? theme.colors.activeLabelBorder
    : theme.colors.labelBorder
);

const getHoverStyles = ({ theme, isLabelActive }) => !isLabelActive && `
  :hover {
    background: ${theme.colors.labelHover};
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
  ${StyledWrapper} {
    height: 100%;
    width: auto;

    ${StyledImage} {
      height: inherit;
      width: inherit;
    }
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
