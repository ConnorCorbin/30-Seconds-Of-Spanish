import { css } from 'styled-components';

export const getEmFromPx = pxValue => pxValue / 16;

export const SCREEN_SIZES = {
  SMALL: 'SMALL',
  MEDIUM: 'MEDIUM',
  LARGE: 'LARGE',
};

export const MEDIA_DEFAULTS = {
  MEDIUM: getEmFromPx(480),
  LARGE: getEmFromPx(720),
};

const media = config => Object.keys(config)
  .reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (min-width: ${config[label]}em) {
        ${css(...args)}
      }
    `;

    return acc;
  }, {});

export default media(MEDIA_DEFAULTS);
