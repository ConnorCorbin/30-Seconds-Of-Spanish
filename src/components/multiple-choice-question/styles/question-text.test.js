import React from 'react';

import StyledQuestionText from 'components/multiple-choice-question/styles/question-text';

describe('StyledQuestionText', () => {
  const theme = {
    colors: {
      slate: '#323c41',
    },
  };

  it('should render StyledQuestionText with correct text color', () => {
    const wrapper = shallow(<StyledQuestionText theme={theme} />);

    expect(wrapper).toHaveStyleRule('color', theme.colors.slate);
  });
});
