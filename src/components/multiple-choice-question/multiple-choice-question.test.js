import React from 'react';

import ResultBanner from 'components/result-banner/result-banner';
import MultipleChoiceQuestion from 'components/multiple-choice-question/multiple-choice-question';
import StyledTitleText from 'components/multiple-choice-question/styles/title-text';
import StyledQuestionText from 'components/multiple-choice-question/styles/question-text';
import StyledLabel from 'components/multiple-choice-question/styles/label';
import StyledButton from 'components/result-banner/styles/button';

describe('MultipleChoiceQuestion', () => {
  let wrapper;
  const getWrapper = ({
    titleText = 'Mark the correct meaning',
    questionText = 'One, Two, Three!',
    possibleAnswers = [
      '¡Uno, dos, tres!',
      '¡Un, queso, 3',
      '¡1, sal y 3!',
    ],
    correctAnswer = '¡Uno, dos, tres!',
    buttonText = 'Check Result',
    correctResultTitle = 'Correct Result!',
    correctResultText = 'Well Done.',
    incorrectResultTitle = 'Correct Result:',
    incorrectResultText,
  } = {}) => shallow(
    <MultipleChoiceQuestion
      titleText={titleText}
      questionText={questionText}
      possibleAnswers={possibleAnswers}
      correctAnswer={correctAnswer}
      buttonText={buttonText}
      correctResultTitle={correctResultTitle}
      correctResultText={correctResultText}
      incorrectResultTitle={incorrectResultTitle}
      incorrectResultText={incorrectResultText}
    />,
  );

  it('should render MultipleChoiceQuestion component', () => {
    wrapper = getWrapper();

    expect(wrapper.isEmptyRender()).toEqual(false);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not render MultipleChoiceQuestion component when no possibleAnswers is passed in', () => {
    wrapper = shallow(<MultipleChoiceQuestion />);

    expect(wrapper.isEmptyRender()).toEqual(true);
    expect(wrapper).toMatchSnapshot();
  });

  describe('StyledTitleText', () => {
    it('should render correct titleText', () => {
      wrapper = getWrapper();

      expect(wrapper.find(StyledTitleText).children().text()).toEqual('Mark the correct meaning');
    });

    it('should not render MultipleChoiceQuestion component when no titleText is passed in', () => {
      wrapper = getWrapper({ titleText: '' });

      expect(wrapper.find(StyledTitleText).exists()).toEqual(false);
    });
  });

  describe('StyledQuestionText', () => {
    it('should render correct questionText', () => {
      wrapper = getWrapper();

      expect(wrapper.find(StyledQuestionText).children().text()).toEqual('One, Two, Three!');
    });

    it('should not render StyledTitleText when no questionText is passed in', () => {
      wrapper = getWrapper({ questionText: '' });

      expect(wrapper.find(StyledQuestionText).exists()).toEqual(false);
    });
  });

  describe('Initial StyledLabel render', () => {
    let expectedValues;
    let values;

    it('should render correct key values on StyledLabel', () => {
      expectedValues = ['Uno-dos-tres0', 'Un-queso-31', '1-sal-y-32'];
      wrapper = getWrapper();

      values = wrapper.find(StyledLabel).map(label => label.key());
      expect(values).toEqual(expectedValues);
    });

    it('should render correct isActive values on StyledLabel', () => {
      expectedValues = [false, false, false];
      wrapper = getWrapper();

      values = wrapper.find(StyledLabel).map(label => label.props().isActive);
      expect(values).toEqual(expectedValues);
    });

    it('should render correct isAnswerSubmitted values on StyledLabel', () => {
      expectedValues = [false, false, false];
      wrapper = getWrapper();

      values = wrapper.find(StyledLabel).map(label => label.props().isAnswerSubmitted);
      expect(values).toEqual(expectedValues);
    });

    it('should render correct text values on StyledLabel', () => {
      expectedValues = ['¡Uno, dos, tres!', '¡Un, queso, 3', '¡1, sal y 3!'];
      wrapper = getWrapper();

      values = wrapper.find(StyledLabel).map(label => label.children().text());
      expect(values).toEqual(expectedValues);
    });
  });

  describe('onClickLabelHandler', () => {
    it('should render MultipleChoiceQuestion with correct initial state', () => {
      wrapper = getWrapper();

      expect(wrapper.state('activeLabelIndex')).toEqual(-1);
      expect(wrapper.state('isLabelActive')).toEqual(false);
      expect(wrapper.state('isCorrectAnswer')).toEqual('undecided');
      expect(wrapper.state('isAnswerSubmitted')).toEqual(false);
    });

    it('should update activeLabelIndex and isLabelActive when label is clicked', () => {
      wrapper = getWrapper();

      expect(wrapper.state('activeLabelIndex')).toEqual(-1);
      expect(wrapper.state('isLabelActive')).toEqual(false);
      wrapper.find(StyledLabel).at(0).simulate('click');
      expect(wrapper.state('activeLabelIndex')).toEqual(0);
      expect(wrapper.state('isLabelActive')).toEqual(true);
    });

    it('should not update activeLabelIndex and isLabelActive when active label is clicked', () => {
      wrapper = getWrapper();

      expect(wrapper.state('activeLabelIndex')).toEqual(-1);
      expect(wrapper.state('isLabelActive')).toEqual(false);

      wrapper.find(StyledLabel).at(0).simulate('click');

      expect(wrapper.state('activeLabelIndex')).toEqual(0);
      expect(wrapper.state('isLabelActive')).toEqual(true);

      wrapper.find(StyledLabel).at(0).simulate('click');

      expect(wrapper.state('activeLabelIndex')).toEqual(0);
      expect(wrapper.state('isLabelActive')).toEqual(true);
    });
  });

  describe('getCorrectResultBanner', () => {
    it('should render undecided ResultBanner on initial render', () => {
      wrapper = getWrapper();

      expect(wrapper.find(ResultBanner).props().bannerType).toEqual('undecided');
    });

    it('should render correct ResultBanner when correct answer is clicked', () => {
      wrapper = getWrapper();

      expect(wrapper.find(ResultBanner).props().bannerType).toEqual('undecided');
      wrapper.find(StyledLabel).at(0).simulate('click');
      wrapper.find(ResultBanner).dive().find(StyledButton).simulate('click');
      expect(wrapper.find(ResultBanner).props().bannerType).toEqual('correct');
    });

    it('should render incorrect ResultBanner when correct answer is clicked', () => {
      wrapper = getWrapper();

      expect(wrapper.find(ResultBanner).props().bannerType).toEqual('undecided');
      wrapper.find(StyledLabel).at(1).simulate('click');
      wrapper.find(ResultBanner).dive().find(StyledButton).simulate('click');
      expect(wrapper.find(ResultBanner).props().bannerType).toEqual('incorrect');
    });
  });
});
