import React from 'react';

import StyledIconWrapper from 'components/result-banner/styles/icon-wrapper';

describe('StyledIconWrapper', () => {
  const theme = {
    colors: {
      white: '#ffffff',
    },
  };

  it('should render StyledIconWrapper with correct background color', () => {
    const wrapper = shallow(<StyledIconWrapper theme={theme} />);

    expect(wrapper).toHaveStyleRule('background', theme.colors.white);
  });
});
