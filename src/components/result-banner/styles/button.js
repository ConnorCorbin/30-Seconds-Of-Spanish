import styled, { css } from 'styled-components';

import media from 'common/services/dimensions-service';


const getTextColor = ({ theme }) => theme.colors.text;

const getButtonBackgroundColor = ({ theme }) => theme.colors.buttonBackground;

const getButtonBorderColor = ({ theme }) => theme.colors.buttonBorder;

const getActiveButtonBackgroundColor = ({ theme }) => theme.colors.activeButtonBackground;

const getActiveButtonBorderColor = ({ theme }) => theme.colors.activeButtonBorder;

const getActiveButtonHoverColor = ({ theme }) => theme.colors.activeButtonHover;

const getActiveStyles = () => css`
  background: ${getActiveButtonBackgroundColor};
  border: 2px solid ${getActiveButtonBorderColor};

  :hover {
    background: ${getActiveButtonHoverColor};
    cursor: pointer;
  }
`;

const getDisabledStyles = () => css`
  background: ${getButtonBackgroundColor};
  border: 2px solid ${getButtonBorderColor};
  pointer-events: none;
`;

const getAdditionalStyles = ({ isActive }) => (
  isActive
    ? getActiveStyles
    : getDisabledStyles
);

const baseStyles = css`
  border-radius: 16px;
  color: ${getTextColor};
  font-size: 16px;
  height: 50px;
  width: 90%;
`;

export default styled.button`
  ${baseStyles}
  ${getAdditionalStyles}
  ${media.LARGE`
    max-width: 800px;
  `}
`;
