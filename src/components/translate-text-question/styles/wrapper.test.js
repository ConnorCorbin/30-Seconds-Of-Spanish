import React from 'react';

import { MEDIA_DEFAULTS } from 'common/services/dimensions-service';

import StyledWrapper from 'components/translate-text-question/styles/wrapper';

describe('StyledWrapper', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<StyledWrapper />);
  });

  it('should render StyledWrapper with correct mobile width', () => {
    expect(wrapper).toHaveStyleRule('width', 'calc(100% - 20px)');
  });

  it('should render StyledWrapper with correct width for LARGE breakpoint', () => {
    expect(wrapper).toHaveStyleRule('width', '700px', {
      media: `(min-width:${MEDIA_DEFAULTS.LARGE}em)`,
    });
  });
});
