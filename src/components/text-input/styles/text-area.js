import styled, { css } from 'styled-components';

import media from 'common/services/dimensions-service';

const getTextColor = ({ theme }) => theme.colors.slate;

const getBackgroundColor = ({ theme }) => theme.colors.white;

const getBorderColor = ({ theme }) => theme.colors.darkGray;

const baseStyles = css`
  background: ${getBackgroundColor};
  border: 2px solid ${getBorderColor};
  border-radius: 16px;
  box-sizing: border-box;
  color: ${getTextColor};
  font-size: 18px;
  height: 90px;
  line-height: 24px;
  padding: 10px;
  resize: none;
  width: 100%;
`;

export default styled.textarea`
  ${baseStyles}
  ${media.LARGE`
    height: 160px;
  `}
`;
