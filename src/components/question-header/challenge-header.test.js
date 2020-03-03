import React from 'react';

import ChallengeHeader from 'components/question-header/challenge-header';

import StyledQuestionTitle from 'components/question-header/styles/question-title';
import StyledQuestionText from 'components/question-header/styles/question-text';

describe('ChallengeHeader', () => {
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

    expect(wrapper.isEmptyRender()).toEqual(false);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not render ChallengeHeader component when no question title and text is passed in', () => {
    wrapper = shallow(<ChallengeHeader />);

    expect(wrapper.isEmptyRender()).toEqual(true);
    expect(wrapper).toMatchSnapshot();
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
