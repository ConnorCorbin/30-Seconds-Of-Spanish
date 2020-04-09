import React from 'react';

import theme from 'common/theme';

import StyledWrapper from 'components/challenge-header/styles/wrapper';

it('should render StyledWrapper with correct text color', () => {
  const wrapper = shallow(<StyledWrapper theme={theme} />);

  expect(wrapper).toHaveStyleRule('color', theme.colors.text);
});
