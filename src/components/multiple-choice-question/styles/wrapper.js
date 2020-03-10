import styled, { css } from 'styled-components';

import media from 'common/services/dimensions-service';

const baseStyles = css`
  font-family: inherit;
  margin: 0 auto auto auto;
  user-select: none;
  width: calc(100% - 20px);
`;

export default styled.div`
  ${baseStyles}
  ${media.LARGE`
    width: 700px;
  `}
`;
