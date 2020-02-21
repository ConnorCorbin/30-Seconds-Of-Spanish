import React from 'react';

import { ReactComponent as CrossIcon } from 'common/icons/cross.svg';
import { ReactComponent as TickIcon } from 'common/icons/tick.svg';

import MessageBox from 'components/message-box/message-box';
import StyledTitle from 'components/message-box/styles/title';
import StyledTitleText from 'components/message-box/styles/title-text';

describe('MessageBox component', () => {
  let wrapper;
  const getWrapper = ({
    correctTitle1 = 'You are correct!',
    correctText1 = 'Well done keep going!',
    incorrectTitle1 = 'Correct Solution:',
    incorrectText1 = 'En el tren.',
    incorrectTitle2 = 'Meaning:',
    incorrectText2 = 'In the train.',
    isAnswerCorrect,
  } = {}) => shallow(
    <MessageBox
      correctTitle1={correctTitle1}
      correctText1={correctText1}
      incorrectTitle1={incorrectTitle1}
      incorrectText1={incorrectText1}
      incorrectTitle2={incorrectTitle2}
      incorrectText2={incorrectText2}
      isAnswerCorrect={isAnswerCorrect}
    />,
  );

  describe('Correct answer message box', () => {
    it('should render MessageBox component', () => {
      wrapper = getWrapper({ isAnswerCorrect: true });

      expect(wrapper.isEmptyRender()).toEqual(false);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render MessageBox with correct title and text', () => {
      wrapper = getWrapper({ isAnswerCorrect: true });

      expect(wrapper.find(StyledTitle).children().first().text()).toEqual('You are correct!');
      expect(wrapper.find(StyledTitleText).children().first().text()).toEqual('Well done keep going!');
    });

    it('should render MessageBox without passed in correctTitle1 and correctText1', () => {
      wrapper = getWrapper({ isAnswerCorrect: true, correctTitle1: '', correctText1: '' });

      expect(wrapper.find(StyledTitle).exists()).toEqual(false);
      expect(wrapper.find(StyledTitleText).exists()).toEqual(false);
    });

    it('should render MessageBox with correct icon', () => {
      wrapper = getWrapper({ isAnswerCorrect: true }, 'shallow');

      expect(wrapper.find(TickIcon).exists()).toEqual(true);
    });
  });

  describe('Incorrect answer message box', () => {
    it('should render MessageBox component', () => {
      wrapper = getWrapper({ isAnswerCorrect: false });

      expect(wrapper.isEmptyRender()).toEqual(false);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render MessageBox with correct titles and texts', () => {
      wrapper = getWrapper({ isAnswerCorrect: false });

      expect(wrapper.find(StyledTitle).children().first().text()).toEqual('Correct Solution:');
      expect(wrapper.find(StyledTitleText).children().first().text()).toEqual('En el tren.');
      expect(wrapper.find(StyledTitle).children().last().text()).toEqual('Meaning:');
      expect(wrapper.find(StyledTitleText).children().last().text()).toEqual('In the train.');
    });

    it('should render MessageBox without passed in titles and texts', () => {
      wrapper = getWrapper({
        isAnswerCorrect: false,
        incorrectTitle1: '',
        incorrectText1: '',
        incorrectTitle2: '',
        incorrectText2: '',
      });

      expect(wrapper.find(StyledTitle).exists()).toEqual(false);
      expect(wrapper.find(StyledTitleText).exists()).toEqual(false);
    });

    it('should render MessageBox with correct icon', () => {
      wrapper = getWrapper({ isAnswerCorrect: false });

      expect(wrapper.find(CrossIcon).exists()).toEqual(true);
    });
  });
});
