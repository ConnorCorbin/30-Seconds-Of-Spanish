import styled, { css } from 'styled-components';

const getBackgroundColor = ({ theme, bannerType }) => theme.colors[`${bannerType}BannerBackground`];

const getAdditionalStyles = ({ bannerType }) => bannerType === 'undecided' && `
  justify-content: center;
  align-items: center;
`;

const getCorrectCursor = ({ bannerType }) => bannerType !== 'undecided' && 'cursor: default;';

const baseStyles = css`
  background-color: ${getBackgroundColor};
  display: flex;
  font-family: inherit;
  margin-top: 30px;
  min-height: 140px;
  user-select: none;
  width: 100%;
`;

export default styled.div`
  ${baseStyles}
  ${getAdditionalStyles}
  ${getCorrectCursor}
`;
