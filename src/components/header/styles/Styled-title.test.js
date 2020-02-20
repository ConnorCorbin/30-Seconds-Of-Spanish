import React from 'react';

import StyledTitle from 'components/header/styles/Styled-title';

let wrapper;

it('should render StyledTitle with the passed in color', () => {
  const textColor = 'red';
  wrapper = shallow(<StyledTitle textColor={textColor} />);

  expect(wrapper).toHaveStyleRule('color', textColor);
});

it('should render StyledTitle with default the default color', () => {
  wrapper = shallow(<StyledTitle />);

  expect(wrapper).toHaveStyleRule('color', 'initial');
});
