import styled, { css } from 'styled-components';

import media from 'common/services/dimensions-service';

const getSlateColor = ({ theme }) => theme.colors.slate;

const getActiveStyles = () => css`
  background: #b8f28b;
  border: 2px solid #78c800;

  :hover {
    background: #84dc00;
    cursor: pointer;
  }
`;

const getDisabledStyles = () => css`
  background: #e5e5e5;
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
