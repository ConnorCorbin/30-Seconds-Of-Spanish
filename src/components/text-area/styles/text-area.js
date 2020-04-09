import styled, { css } from 'styled-components';

import media from 'common/services/dimensions-service';

const getTextColor = ({ theme }) => theme.colors.text;

const getTextAreaBackgroundColor = ({ theme }) => theme.colors.textAreaBackground;

const textAreaBorderColor = ({ theme }) => theme.colors.textAreaBorder;

const baseStyles = css`
  background: ${getTextAreaBackgroundColor};
  border: 2px solid ${textAreaBorderColor};
  border-radius: 16px;
  box-sizing: border-box;
  color: ${getTextColor};
  font-family: inherit;
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
