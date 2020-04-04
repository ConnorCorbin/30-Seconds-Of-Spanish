import React from 'react';

import { MEDIA_DEFAULTS } from 'common/services/dimensions-service';

import StyledWrapper from 'components/multiple-choice-question/styles/wrapper';

let wrapper;

it('should render StyledWrapper with correct mobile width', () => {
  wrapper = shallow(<StyledWrapper />);

  expect(wrapper).toHaveStyleRule('width', 'calc(100% - 20px)');
});

it('should render StyledWrapper with correct width for LARGE breakpoint', () => {
  wrapper = shallow(<StyledWrapper />);

  expect(wrapper).toHaveStyleRule('width', '700px', {
    media: `(min-width:${MEDIA_DEFAULTS.LARGE}em)`,
  });
});
