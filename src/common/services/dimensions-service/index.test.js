import media, { MEDIA_DEFAULTS } from 'common/services/dimensions-service';

describe('From px to em calculations', () => {
  it('should return default value for MEDIUM (480px -> 720px)', () => {
    expect(MEDIA_DEFAULTS.MEDIUM).toEqual(30);
  });

  it('should return default value for LARGE (720px -> 1020px)', () => {
    expect(MEDIA_DEFAULTS.LARGE).toEqual(45);
  });
});

describe('Media queries generator', () => {
  let mediaProps;

  it('should generate media query for MEDIUM', () => {
    mediaProps = media.MEDIUM`
      color: blue;
    `;

    expect(mediaProps[0].includes('@media (min-width:')).toEqual(true);
    expect(mediaProps[1].includes('30')).toEqual(true);
    expect(mediaProps[2].includes('em')).toEqual(true);
    expect(mediaProps[3].includes('color: blue')).toEqual(true);
  });

  it('should generate media query for LARGE', () => {
    mediaProps = media.LARGE`
      color: green;
    `;

    expect(mediaProps[0].includes('@media (min-width:')).toEqual(true);
    expect(mediaProps[1].includes('45')).toEqual(true);
    expect(mediaProps[2].includes('em')).toEqual(true);
    expect(mediaProps[3].includes('color: green')).toEqual(true);
  });
});
