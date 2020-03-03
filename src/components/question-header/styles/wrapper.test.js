import React from 'react';

import StyledWrapper from 'components/question-header/styles/wrapper';

describe('StyledWrapper', () => {
  const theme = {
    colors: {
      slate: '#323c41',
    },
  };

  it('should render StyledWrapper with correct text color', () => {
    const wrapper = shallow(<StyledWrapper theme={theme} />);

    expect(wrapper).toHaveStyleRule('color', theme.colors.slate);
  });
});
