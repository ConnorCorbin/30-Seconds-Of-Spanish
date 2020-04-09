import React from 'react';

import ResultBanner from 'components/result-banner/result-banner';
import Icon from 'components/icon/icon';
import StyledTitle from 'components/result-banner/styles/title';
import StyledTitleText from 'components/result-banner/styles/title-text';
import StyledButton from 'components/result-banner/styles/button';

describe('ResultBanner component', () => {
  let wrapper;
  const getWrapper = ({
    correctTitle = 'You are correct!',
    correctText = 'Well done keep going!',
    incorrectTitle = 'Correct Solution:',
    incorrectText = 'En el tren.',
    answerStatus,
    onClickFunction,
    buttonText,
    isActive,
  } = {}) => shallow(
    <ResultBanner
      correctTitle={correctTitle}
      correctText={correctText}
      incorrectTitle={incorrectTitle}
      incorrectText={incorrectText}
      answerStatus={answerStatus}
      onClickFunction={onClickFunction}
      buttonText={buttonText}
      isActive={isActive}
    />,
  );

  ['undecided', 'correct', 'incorrect'].forEach((answerStatus) => {
    it(`Should render ${answerStatus} banner type`, () => {
      wrapper = getWrapper({ answerStatus });

      expect(wrapper.isEmptyRender()).toEqual(false);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Button', () => {
    it('should render ResultBanner with correct default button text', () => {
      wrapper = getWrapper();

      expect(wrapper.find(StyledButton).children().text()).toEqual('Check Result');
    });

    it('should render ResultBanner with correct passed in button text', () => {
      const buttonText = 'Check if you are correct!';
      wrapper = getWrapper({ buttonText });

      expect(wrapper.find(StyledButton).children().text()).toEqual(buttonText);
    });
  });

  describe('Text content', () => {
    it('should not render StyledTitle if not passed in', () => {
      wrapper = getWrapper({ correctTitle: '' });

      expect(wrapper.find(StyledTitle).exists()).toEqual(false);
    });

    it('should not render StyledTitleText if not passed in', () => {
      wrapper = getWrapper({ correctText: '' });

      expect(wrapper.find(StyledTitleText).exists()).toEqual(false);
    });
  });

  describe('Undecided ResultBanner', () => {
    beforeEach(() => {
      wrapper = getWrapper({ answerStatus: 'undecided' });
    });

    it('should render undecided ResultBanner with button', () => {
      expect(wrapper.find(StyledButton).exists()).toEqual(true);
    });

    it('should render undecided ResultBanner with correct text', () => {
      expect(wrapper.find(StyledButton).children().text()).toEqual('Check Result');
    });
  });

  describe('Correct ResultBanner', () => {
    beforeEach(() => {
      wrapper = getWrapper({ answerStatus: 'correct' });
    });

    it('should render correct ResultBanner with correct', () => {
      expect(wrapper.find(StyledTitle).children().text()).toEqual('You are correct!');
      expect(wrapper.find(StyledTitleText).children().text()).toEqual('Well done keep going!');
    });

    it('should render correct ResultBanner with Tick icon', () => {
      expect(wrapper.find(Icon).props().name).toEqual('tick');
    });
  });

  describe('Incorrect ResultBanner', () => {
    beforeEach(() => {
      wrapper = getWrapper({ answerStatus: 'incorrect' });
    });

    it('should render incorrect ResultBanner with correct', () => {
      expect(wrapper.find(StyledTitle).children().text()).toEqual('Correct Solution:');
      expect(wrapper.find(StyledTitleText).children().text()).toEqual('En el tren.');
    });

    it('should render incorrect ResultBanner with Cross icon', () => {
      expect(wrapper.find(Icon).props().name).toEqual('cross');
    });
  });

  describe('Invalid answerStatus input', () => {
    ['Something', '', undefined].forEach((answerStatus) => {
      it(`should render undecided ResultBanner with ${answerStatus} answerStatus input`, () => {
        wrapper = getWrapper({ answerStatus });

        expect(wrapper.find(StyledButton).exists()).toEqual(true);
        expect(wrapper.find(StyledButton).children().text()).toEqual('Check Result');
      });
    });

    it('should render correct ResultBanner when capital correct answerStatus is passed', () => {
      wrapper = getWrapper({ answerStatus: 'CoRRect' });

      expect(wrapper.find(StyledTitle).children().text()).toEqual('You are correct!');
      expect(wrapper.find(StyledTitleText).children().text()).toEqual('Well done keep going!');
      expect(wrapper.find(Icon).props().name).toEqual('tick');
    });

    it('should render incorrect ResultBanner when capital incorrect answerStatus is passed', () => {
      wrapper = getWrapper({ answerStatus: 'INCoRRect' });

      expect(wrapper.find(StyledTitle).children().text()).toEqual('Correct Solution:');
      expect(wrapper.find(StyledTitleText).children().text()).toEqual('En el tren.');
      expect(wrapper.find(Icon).props().name).toEqual('cross');
    });
  });
});
