import styled, { css } from 'styled-components';

import StyledImageWrapper from 'components/image/styles/wrapper';

const baseStyles = css`
  align-items: center;
  display: flex;
  height: 70px;
  justify-content: center;
  margin: 10px 10px 20px 10px;
`;

export default styled.div`
  ${baseStyles}
  ${StyledImageWrapper} {
    width: 200px;
  }
`;
