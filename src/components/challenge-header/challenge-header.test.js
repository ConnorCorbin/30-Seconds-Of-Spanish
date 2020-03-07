import React from 'react';

import ChallengeHeader from 'components/challenge-header/challenge-header';
import StyledQuestionTitle from 'components/challenge-header/styles/question-title';
import StyledQuestionText from 'components/challenge-header/styles/question-text';

describe('ChallengeHeader component', () => {
  let wrapper;
  const getWrapper = ({
    questionTitle = 'Mark the correct meaning',
    questionText = 'One, Two, Three!',
  } = {}) => shallow(
    <ChallengeHeader
      questionTitle={questionTitle}
      questionText={questionText}
    />,
  );

  it('should render ChallengeHeader component', () => {
    wrapper = getWrapper();

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.isEmptyRender()).toEqual(false);
  });

  it('should not render ChallengeHeader component', () => {
    wrapper = getWrapper({ questionTitle: '', questionText: '' });

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.isEmptyRender()).toEqual(true);
  });

  describe('StyledQuestionTitle', () => {
    it('should render StyledQuestionTitle with correct question title', () => {
      wrapper = getWrapper();

      expect(wrapper.find(StyledQuestionTitle).children().text()).toEqual('Mark the correct meaning');
    });

    it('should not render StyledQuestionTitle when no question text is passed in', () => {
      wrapper = getWrapper({ questionTitle: '' });

      expect(wrapper.find(StyledQuestionTitle).exists()).toEqual(false);
    });
  });

  describe('StyledQuestionText', () => {
    it('should render StyledQuestionText with correct question text', () => {
      wrapper = getWrapper();

      expect(wrapper.find(StyledQuestionText).children().text()).toEqual('One, Two, Three!');
    });

    it('should not render StyledQuestionText when no question text is passed in', () => {
      wrapper = getWrapper({ questionText: '' });

      expect(wrapper.find(StyledQuestionText).exists()).toEqual(false);
    });
  });
});
