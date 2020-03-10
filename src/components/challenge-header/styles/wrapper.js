import styled, { css } from 'styled-components';

import media from 'common/services/dimensions-service';

const getTextColor = ({ theme }) => theme.colors.slate;

const baseStyles = css`
  color: ${getTextColor};
  font-family: inherit;
  margin: 0 auto auto auto;
  text-align: left;
  user-select: none;
  width: calc(100% - 20px);
`;

export default styled.div`
  ${baseStyles}
  ${media.LARGE`
    width: 700px;
  `}
`;
