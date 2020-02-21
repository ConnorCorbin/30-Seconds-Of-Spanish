import React from 'react';

import StyledTextWrapper from 'components/message-box/styles/text-wrapper';

let wrapper;
const theme = {
  colors: {
    correctAnswerText: '#58a700',
    incorrectAnswerText: '#ea2b2b',
  },
};

it('should render StyledTextWrapper with the correct text color when isAnswerCorrect is true', () => {
  wrapper = shallow(<StyledTextWrapper theme={theme} isAnswerCorrect />);

  expect(wrapper).toHaveStyleRule('color', theme.colors.correctAnswerText);
});

it('should render StyledTextWrapper with the correct text color when isAnswerCorrect is false', () => {
  wrapper = shallow(<StyledTextWrapper theme={theme} isAnswerCorrect={false} />);

  expect(wrapper).toHaveStyleRule('color', theme.colors.incorrectAnswerText);
});
