import React from 'react';

import StyledTextWrapper from 'components/result-banner/styles/text-wrapper';

describe('StyledTextWrapper', () => {
  const theme = {
    colors: {
      slate: '#323c41',
    },
  };

  it('should render StyledTextWrapper with correct font color', () => {
    const wrapper = shallow(<StyledTextWrapper theme={theme} />);

    expect(wrapper).toHaveStyleRule('color', theme.colors.slate);
  });
});
