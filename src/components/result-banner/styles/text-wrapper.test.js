import React from 'react';

import theme from 'common/theme';

import StyledTextWrapper from 'components/result-banner/styles/text-wrapper';

it('should render StyledTextWrapper with correct text color', () => {
  const wrapper = shallow(<StyledTextWrapper theme={theme} />);

  expect(wrapper).toHaveStyleRule('color', theme.colors.text);
});
