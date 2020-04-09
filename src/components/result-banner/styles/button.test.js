import React from 'react';

import theme from 'common/theme';
import { MEDIA_DEFAULTS } from 'common/services/dimensions-service';

import StyledButton from 'components/result-banner/styles/button';

let wrapper;
const modifier = ':hover';

it('Should render StyledButton with correct text color', () => {
  wrapper = shallow(<StyledButton theme={theme} />);

  expect(wrapper).toHaveStyleRule('color', theme.colors.text);
});

it('should render StyledButton with correct additional active styles', () => {
  wrapper = shallow(<StyledButton theme={theme} isActive />);

  expect(wrapper).toHaveStyleRule('background', theme.colors.activeButtonBackground);
  expect(wrapper).toHaveStyleRule(`border', '2px solid ${theme.colors.activeButtonBorder}`);
  expect(wrapper).toHaveStyleRule('background', theme.colors.activeButtonHover, {
    modifier,
  });
  expect(wrapper).toHaveStyleRule('cursor', 'pointer', {
    modifier,
  });
});

it('should render StyledButton with correct additional disabled styles', () => {
  wrapper = shallow(<StyledButton theme={theme} isActive={false} />);

  expect(wrapper).toHaveStyleRule('background', theme.colors.buttonBackground);
  expect(wrapper).toHaveStyleRule('border', `2px solid ${theme.colors.buttonBorder}`);
  expect(wrapper).toHaveStyleRule('pointer-events', 'none');
});

it('should render StyledButton with correct width at LARGE breakpoint', () => {
  wrapper = shallow(<StyledButton theme={theme} isActive />);

  expect(wrapper).toHaveStyleRule('max-width', '800px', {
    media: `(min-width:${MEDIA_DEFAULTS.LARGE}em)`,
  });
});
