import React from 'react';

import StyledTitleText from 'components/multiple-choice-question/styles/title-text';

describe('StyledTitleText', () => {
  const theme = {
    colors: {
      slate: '#323c41',
    },
  };

  it('should render StyledTitleText with correct text color', () => {
    const wrapper = shallow(<StyledTitleText theme={theme} />);

    expect(wrapper).toHaveStyleRule('color', theme.colors.slate);
  });
});
