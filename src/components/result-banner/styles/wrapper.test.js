import React from 'react';

import theme from 'common/theme';

import StyledWrapper from 'components/result-banner/styles/wrapper';

let wrapper;

['undecided', 'correct', 'incorrect'].forEach((answerStatus) => {
  it(`should render StyledWrapper with the correct background color for ${answerStatus} banner type`, () => {
    wrapper = shallow(<StyledWrapper theme={theme} answerStatus={answerStatus} />);

    expect(wrapper).toHaveStyleRule('background-color', theme.colors[`${answerStatus}BannerBackground`]);
  });
});

['correct', 'incorrect'].forEach((answerStatus) => {
  it(`should render StyledWrapper with the correct cursor for ${answerStatus} banner type`, () => {
    wrapper = shallow(<StyledWrapper theme={theme} answerStatus={answerStatus} />);

    expect(wrapper).toHaveStyleRule('cursor', 'default');
  });
});

it('should render StyledWrapper with no cursor for undecided banner type', () => {
  wrapper = shallow(<StyledWrapper theme={theme} answerStatus="undecided" />);

  expect(wrapper).not.toHaveStyleRule('cursor');
});

['correct', 'incorrect'].forEach((answerStatus) => {
  it(`should render StyledWrapper without additional styles for ${answerStatus} banner type`, () => {
    wrapper = shallow(<StyledWrapper theme={theme} answerStatus={answerStatus} />);

    expect(wrapper).not.toHaveStyleRule('justify-content');
    expect(wrapper).not.toHaveStyleRule('align-items');
  });
});

it('should render StyledWrapper with additional styles for undecided banner type', () => {
  wrapper = shallow(<StyledWrapper theme={theme} answerStatus="undecided" />);

  expect(wrapper).toHaveStyleRule('justify-content', 'center');
  expect(wrapper).toHaveStyleRule('align-items', 'center');
});
