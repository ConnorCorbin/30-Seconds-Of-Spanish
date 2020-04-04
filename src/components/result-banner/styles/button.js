import styled, { css } from 'styled-components';

import media from 'common/services/dimensions-service';

const getSlateColor = ({ theme }) => theme.colors.slate;
const getDarkGrayColor = ({ theme }) => theme.colors.darkGray;
const getLightGreenColor = ({ theme }) => theme.colors.lightGreen;
const getMediumGreenColor = ({ theme }) => theme.colors.mediumGreen;
const getDarkGreenColor = ({ theme }) => theme.colors.darkGreen;

const getActiveStyles = () => css`
  background: ${getLightGreenColor};
  border: 2px solid ${getDarkGreenColor};

  :hover {
    background: ${getMediumGreenColor};
    cursor: pointer;
  }
`;

const getDisabledStyles = () => css`
  background: ${getDarkGrayColor};
  border: 2px solid ${getSlateColor};
  pointer-events: none;
`;

const getAdditionalStyles = ({ isActive }) => (
  isActive
    ? getActiveStyles
    : getDisabledStyles
);

const baseStyles = css`
  border-radius: 16px;
  color: ${getSlateColor};
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
