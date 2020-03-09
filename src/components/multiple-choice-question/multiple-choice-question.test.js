import React from 'react';

import MultipleChoiceQuestion from 'components/multiple-choice-question/multiple-choice-question';
import ChallengeHeader from 'components/challenge-header/challenge-header';
import TextLabel from 'components/text-label/text-label';
import ResultBanner from 'components/result-banner/result-banner';
import StyledTextLabel from 'components/text-label/styles/text-label';
import StyledButton from 'components/result-banner/styles/button';

describe('MultipleChoiceQuestion component', () => {
  let wrapper;
  const getWrapper = ({
    questionTitle = 'Mark the correct meaning',
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
      questionTitle={questionTitle}
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

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.isEmptyRender()).toEqual(false);
  });

  it('should not render MultipleChoiceQuestion component', () => {
    wrapper = shallow(<MultipleChoiceQuestion />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.isEmptyRender()).toEqual(true);
  });

  it('should render MultipleChoiceQuestion with correct initial state', () => {
    wrapper = getWrapper();

    expect(wrapper.state('activeLabelIndex')).toEqual(9999);
    expect(wrapper.state('isLabelActive')).toEqual(false);
    expect(wrapper.state('answerStatus')).toEqual('undecided');
    expect(wrapper.state('isAnswerSubmitted')).toEqual(false);
  });

  describe('ChallengeHeader component', () => {
    it('should render ChallengeHeader component when question title and text is passed', () => {
      wrapper = getWrapper();

      expect(wrapper.find(ChallengeHeader).exists()).toEqual(true);
    });

    it('should not render ChallengeHeader component when no question title and text is passed', () => {
      wrapper = getWrapper({ questionTitle: '', questionText: '' });

      expect(wrapper.find(ChallengeHeader).exists()).toEqual(false);
    });
  });

  describe('TextLabel component', () => {
    let expectedValues;
    let values;

    it('should render TextLabel with correct key value', () => {
      expectedValues = ['Uno-dos-tres0', 'Un-queso-31', '1-sal-y-32'];
      wrapper = getWrapper();

      values = wrapper.find(TextLabel).map(label => label.key());
      expect(values).toEqual(expectedValues);
    });

    it('should render TextLabel with correct isLabelActive prop value', () => {
      expectedValues = [false, false, false];
      wrapper = getWrapper();

      values = wrapper.find(TextLabel).map(label => label.props().isLabelActive);
      expect(values).toEqual(expectedValues);
    });

    it('should render TextLabel with correct isAnswerSubmitted prop value', () => {
      expectedValues = [false, false, false];
      wrapper = getWrapper();

      values = wrapper.find(TextLabel).map(label => label.props().isAnswerSubmitted);
      expect(values).toEqual(expectedValues);
    });

    it('should render TextLabel with correct label text', () => {
      expectedValues = ['¡Uno, dos, tres!', '¡Un, queso, 3', '¡1, sal y 3!'];
      wrapper = getWrapper();

      values = wrapper.find(TextLabel).map(label => label.dive().children().text());
      expect(values).toEqual(expectedValues);
    });
  });

  describe('ResultBanner component', () => {
    it('should render `undecided` ResultBanner on initial render', () => {
      wrapper = getWrapper();

      expect(wrapper.find(ResultBanner).props().bannerType).toEqual('undecided');
    });

    it('should render `correct` ResultBanner when correct answer is clicked', () => {
      wrapper = getWrapper();

      expect(wrapper.find(ResultBanner).props().bannerType).toEqual('undecided');
      wrapper.find(TextLabel).first().dive().find(StyledTextLabel)
        .simulate('click');
      wrapper.find(ResultBanner).dive().find(StyledButton).simulate('click');
      expect(wrapper.find(ResultBanner).props().bannerType).toEqual('correct');
    });

    it('should render `incorrect` ResultBanner when incorrect answer is clicked', () => {
      wrapper = getWrapper();

      expect(wrapper.find(ResultBanner).props().bannerType).toEqual('undecided');
      wrapper.find(TextLabel).last().dive().find(StyledTextLabel)
        .simulate('click');
      wrapper.find(ResultBanner).dive().find(StyledButton).simulate('click');
      expect(wrapper.find(ResultBanner).props().bannerType).toEqual('incorrect');
    });
  });

  describe('onClickLabelHandler', () => {
    it('should change activeLabelIndex state when TextLabel is clicked', () => {
      wrapper = getWrapper();

      expect(wrapper.state('activeLabelIndex')).toEqual(9999);
      wrapper.find(TextLabel).first().dive().find(StyledTextLabel)
        .simulate('click');
      expect(wrapper.state('activeLabelIndex')).toEqual(0);
    });

    it('should change isLabelActive state when TextLabel is clicked', () => {
      wrapper = getWrapper();

      expect(wrapper.state('isLabelActive')).toEqual(false);
      wrapper.find(TextLabel).first().dive().find(StyledTextLabel)
        .simulate('click');
      expect(wrapper.state('isLabelActive')).toEqual(true);
    });

    it('should not change activeLabelIndex or isLabelActive state when isAnswerSubmitted is true', () => {
      wrapper = getWrapper();

      expect(wrapper.state('activeLabelIndex')).toEqual(9999);
      expect(wrapper.state('isLabelActive')).toEqual(false);

      wrapper.find(TextLabel).last().dive().find(StyledTextLabel)
        .simulate('click');
      wrapper.find(ResultBanner).dive().find(StyledButton)
        .simulate('click');
      expect(wrapper.state('activeLabelIndex')).toEqual(2);
      expect(wrapper.state('isLabelActive')).toEqual(true);

      wrapper.find(TextLabel).first().dive().find(StyledTextLabel)
        .simulate('click');

      expect(wrapper.state('activeLabelIndex')).toEqual(2);
      expect(wrapper.state('isLabelActive')).toEqual(true);
    });

    it('should not change activeLabelIndex or isLabelActive state when isActiveLabelIndex is true', () => {
      wrapper = getWrapper();

      expect(wrapper.state('activeLabelIndex')).toEqual(9999);
      expect(wrapper.state('isLabelActive')).toEqual(false);

      wrapper.find(TextLabel).last().dive().find(StyledTextLabel)
        .simulate('click');
      expect(wrapper.state('activeLabelIndex')).toEqual(2);
      expect(wrapper.state('isLabelActive')).toEqual(true);

      wrapper.find(TextLabel).last().dive().find(StyledTextLabel)
        .simulate('click');

      expect(wrapper.state('activeLabelIndex')).toEqual(2);
      expect(wrapper.state('isLabelActive')).toEqual(true);
    });
  });

  describe('onClickButtonHandler', () => {
    it('should update state with correct values when correct answer is selected', () => {
      wrapper = getWrapper();

      expect(wrapper.state('isAnswerSubmitted')).toEqual(false);
      expect(wrapper.state('answerStatus')).toEqual('undecided');

      wrapper.find(TextLabel).first().dive().find(StyledTextLabel)
        .simulate('click');
      wrapper.find(ResultBanner).dive().find(StyledButton).simulate('click');

      expect(wrapper.state('isAnswerSubmitted')).toEqual(true);
      expect(wrapper.state('answerStatus')).toEqual('correct');
    });

    it('should update state with correct values when incorrect answer is selected', () => {
      wrapper = getWrapper();

      expect(wrapper.state('isAnswerSubmitted')).toEqual(false);
      expect(wrapper.state('answerStatus')).toEqual('undecided');

      wrapper.find(TextLabel).last().dive().find(StyledTextLabel)
        .simulate('click');
      wrapper.find(ResultBanner).dive().find(StyledButton).simulate('click');

      expect(wrapper.state('isAnswerSubmitted')).toEqual(true);
      expect(wrapper.state('answerStatus')).toEqual('incorrect');
    });
  });

  describe('onKeyPressHandler', () => {
    const mockEnterKeyPress = { charCode: 13 };

    it('should update state if enter key is pressed on non-active TextLabel', () => {
      wrapper = getWrapper();

      expect(wrapper.state('activeLabelIndex')).toEqual(9999);
      wrapper.find(TextLabel).last().dive().find(StyledTextLabel)
        .simulate('keypress', mockEnterKeyPress);
      expect(wrapper.state('activeLabelIndex')).toEqual(2);
    });

    it('should update state if enter key is pressed on active TextLabel for incorrect answer', () => {
      wrapper = getWrapper();

      expect(wrapper.state('activeLabelIndex')).toEqual(9999);
      wrapper.find(TextLabel).last().dive().find(StyledTextLabel)
        .simulate('keypress', mockEnterKeyPress);

      expect(wrapper.state('isAnswerSubmitted')).toEqual(false);
      expect(wrapper.state('answerStatus')).toEqual('undecided');
      expect(wrapper.state('activeLabelIndex')).toEqual(2);

      wrapper.find(TextLabel).last().dive().find(StyledTextLabel)
        .simulate('keypress', mockEnterKeyPress);

      expect(wrapper.state('isAnswerSubmitted')).toEqual(true);
      expect(wrapper.state('answerStatus')).toEqual('incorrect');
      expect(wrapper.state('activeLabelIndex')).toEqual(2);
    });

    it('should update state if enter key is pressed on active TextLabel for correct answer', () => {
      wrapper = getWrapper();

      expect(wrapper.state('activeLabelIndex')).toEqual(9999);
      wrapper.find(TextLabel).first().dive().find(StyledTextLabel)
        .simulate('keypress', mockEnterKeyPress);

      expect(wrapper.state('isAnswerSubmitted')).toEqual(false);
      expect(wrapper.state('answerStatus')).toEqual('undecided');
      expect(wrapper.state('activeLabelIndex')).toEqual(0);

      wrapper.find(TextLabel).first().dive().find(StyledTextLabel)
        .simulate('keypress', mockEnterKeyPress);

      expect(wrapper.state('isAnswerSubmitted')).toEqual(true);
      expect(wrapper.state('answerStatus')).toEqual('correct');
      expect(wrapper.state('activeLabelIndex')).toEqual(0);
    });

    it('should not update state if non-enter key is pressed', () => {
      wrapper = getWrapper();

      expect(wrapper.state('isLabelActive')).toEqual(false);
      expect(wrapper.state('answerStatus')).toEqual('undecided');
      expect(wrapper.state('isAnswerSubmitted')).toEqual(false);

      wrapper.find(TextLabel).first().dive().find(StyledTextLabel)
        .simulate('keypress', { charCode: 23 });

      expect(wrapper.state('isLabelActive')).toEqual(false);
      expect(wrapper.state('answerStatus')).toEqual('undecided');
      expect(wrapper.state('isAnswerSubmitted')).toEqual(false);
    });

    it('should not update state if isAnswerSubmitted is true', () => {
      wrapper = getWrapper();

      expect(wrapper.state('isLabelActive')).toEqual(false);
      expect(wrapper.state('answerStatus')).toEqual('undecided');
      expect(wrapper.state('isAnswerSubmitted')).toEqual(false);

      wrapper.find(TextLabel).first().dive().find(StyledTextLabel)
        .simulate('keypress', mockEnterKeyPress);
      wrapper.find(ResultBanner).dive().find(StyledButton)
        .simulate('click');

      expect(wrapper.state('isLabelActive')).toEqual(true);
      expect(wrapper.state('answerStatus')).toEqual('correct');
      expect(wrapper.state('isAnswerSubmitted')).toEqual(true);
      wrapper.find(TextLabel).last().dive().find(StyledTextLabel)
        .simulate('keypress', mockEnterKeyPress);

      expect(wrapper.state('isLabelActive')).toEqual(true);
      expect(wrapper.state('answerStatus')).toEqual('correct');
      expect(wrapper.state('isAnswerSubmitted')).toEqual(true);
    });
  });
});
