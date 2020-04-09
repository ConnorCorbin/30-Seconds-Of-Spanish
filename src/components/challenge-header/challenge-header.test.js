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

  it('should render component', () => {
    wrapper = getWrapper();

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.isEmptyRender()).toEqual(false);
  });

  it('should not render component when no question title or text is passed in', () => {
    wrapper = getWrapper({ questionTitle: '', questionText: '' });

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.isEmptyRender()).toEqual(true);
  });

  describe('Question title', () => {
    it('should render correct question title', () => {
      wrapper = getWrapper();

      expect(wrapper.find(StyledQuestionTitle).children().text()).toEqual('Mark the correct meaning');
    });

    it('should not render question title when no question title is passed in', () => {
      wrapper = getWrapper({ questionTitle: '' });

      expect(wrapper.find(StyledQuestionTitle).exists()).toEqual(false);
    });
  });

  describe('Question text', () => {
    it('should render correct question text', () => {
      wrapper = getWrapper();

      expect(wrapper.find(StyledQuestionText).children().text()).toEqual('One, Two, Three!');
    });

    it('should not render question text when no question title is passed in', () => {
      wrapper = getWrapper({ questionText: '' });

      expect(wrapper.find(StyledQuestionText).exists()).toEqual(false);
    });
  });
});
