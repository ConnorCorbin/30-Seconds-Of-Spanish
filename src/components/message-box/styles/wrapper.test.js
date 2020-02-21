import React from 'react';

import StyledWrapper from 'components/message-box/styles/wrapper';

let wrapper;
const theme = {
  colors: {
    correctAnswerBackground: '#b8f28b',
    incorrectAnswerBackground: '#ffc1c1',
  },
};

it('should render StyledWrapper with correct background color when isAnswerCorrect is true', () => {
  wrapper = shallow(<StyledWrapper theme={theme} isAnswerCorrect />);

  expect(wrapper).toHaveStyleRule('background-color', theme.colors.correctAnswerBackground);
});

it('should render StyledWrapper with correct background color when isAnswerCorrect is false', () => {
  wrapper = shallow(<StyledWrapper theme={theme} isAnswerCorrect={false} />);

  expect(wrapper).toHaveStyleRule('background-color', theme.colors.incorrectAnswerBackground);
});
