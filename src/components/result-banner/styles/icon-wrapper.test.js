import React from 'react';

import theme from 'common/theme';

import StyledIconWrapper from 'components/result-banner/styles/icon-wrapper';

it('should render StyledIconWrapper with correct background color', () => {
  const wrapper = shallow(<StyledIconWrapper theme={theme} />);

  expect(wrapper).toHaveStyleRule('background', theme.colors.white);
});
