import styled, { css } from 'styled-components';

import StyledImageWrapper from 'components/image/styles/wrapper';

const baseStyles = css`
  align-items: center;
  display: flex;
  font-family: inherit;
  height: 100px;
  justify-content: center;
  padding: 15px;
`;

export default styled.div`
  ${baseStyles}
  ${StyledImageWrapper} {
    width: 230px;
  }
`;
