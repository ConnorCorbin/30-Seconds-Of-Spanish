import React from 'react';

import TranslateTextQuestion from 'components/translate-text-question/translate-text-question';
import ChallengeHeader from 'components/challenge-header/challenge-header';
import ResultBanner from 'components/result-banner/result-banner';
import TextArea from 'components/text-area/text-area';
import StyledTextArea from 'components/text-area/styles/text-area';
import StyledButton from 'components/result-banner/styles/button';

describe('TranslateTextQuestion component', () => {
  let wrapper;
  let mockEvent;
  let spy;
  const getWrapper = ({
    questionTitle = 'Write this in Spanish',
    questionText = '¿Is Juan from Spain?',
    correctTitle = 'You are correct!',
    correctText,
    incorrectTitle = 'Correct Solution:',
    incorrectText = '¿Juan es de Espana?',
    correctAnswer = 'Juan es de Espana',
    buttonText = 'Check Result',
    typedInLanguage = 'english',
  } = {}) => shallow(
    <TranslateTextQuestion
      questionTitle={questionTitle}
      questionText={questionText}
      correctTitle={correctTitle}
      correctText={correctText}
      incorrectTitle={incorrectTitle}
      incorrectText={incorrectText}
      correctAnswer={correctAnswer}
      buttonText={buttonText}
      typedInLanguage={typedInLanguage}
    />,
  );

  it('should render component', () => {
    wrapper = getWrapper();

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.isEmptyRender()).toEqual(false);
  });

  it('should not render component', () => {
    wrapper = getWrapper({ questionTitle: '', questionText: '' });

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.isEmptyRender()).toEqual(true);
  });

  it('should render component with correct initial state values', () => {
    wrapper = getWrapper();

    expect(wrapper.state('userInput')).toEqual('');
    expect(wrapper.state('answerStatus')).toEqual('undecided');
    expect(wrapper.state('isTextAreaActive')).toEqual(false);
    expect(wrapper.state('isAnswerSubmitted')).toEqual(false);
    expect(wrapper.state('isTextAreaDisabled')).toEqual(false);
  });

  it('should return correct incorrectText for ResultBanner if incorrectText is undefined', () => {
    mockEvent = { target: { value: 'Juan es de' } };
    wrapper = getWrapper({ incorrectText: '' });

    wrapper.find(TextArea).dive().find(StyledTextArea).simulate('change', mockEvent);
    wrapper.find(ResultBanner).dive().find(StyledButton).simulate('click');
    expect(wrapper.find(ResultBanner).props().incorrectText).toEqual('Juan es de Espana');
  });

  describe('ChallengeHeader component', () => {
    it('should render component with correct props for ChallengeHeader component', () => {
      wrapper = getWrapper();

      expect(wrapper.contains(
        <ChallengeHeader
          questionTitle="Write this in Spanish"
          questionText="¿Is Juan from Spain?"
        />,
      )).toEqual(true);
    });

    it('should render ChallengeHeader component when question title and text is passed', () => {
      wrapper = getWrapper();

      expect(wrapper.find(ChallengeHeader).exists()).toEqual(true);
    });

    it('should not render ChallengeHeader component when no question title and text is passed', () => {
      wrapper = getWrapper({ questionTitle: '', questionText: '' });

      expect(wrapper.find(ChallengeHeader).exists()).toEqual(false);
    });
  });

  describe('onChangeHandler', () => {
    it('should update userInput state when typing in textarea', () => {
      mockEvent = { target: { value: 'Typed in text for areatext' } };
      wrapper = getWrapper();

      expect(wrapper.state('userInput')).toEqual('');
      wrapper.find(TextArea).dive().find(StyledTextArea).simulate('change', mockEvent);
      expect(wrapper.state('userInput')).toEqual(mockEvent.target.value);
    });

    it('should update isTextAreaActive state to true when typing in textarea', () => {
      mockEvent = { target: { value: 'Typed in text for areatext' } };
      wrapper = getWrapper();

      expect(wrapper.state('isTextAreaActive')).toEqual(false);
      wrapper.find(TextArea).dive().find(StyledTextArea).simulate('change', mockEvent);
      expect(wrapper.state('isTextAreaActive')).toEqual(true);
    });

    it('should update isTextAreaActive state to false when no text is in textarea', () => {
      mockEvent = { target: { value: 'Typed in text for areatext' } };
      wrapper = getWrapper();

      expect(wrapper.state('isTextAreaActive')).toEqual(false);
      wrapper.find(TextArea).dive().find(StyledTextArea).simulate('change', mockEvent);
      expect(wrapper.state('isTextAreaActive')).toEqual(true);

      mockEvent = { target: { value: '' } };
      wrapper.find(TextArea).dive().find(StyledTextArea).simulate('change', mockEvent);
      expect(wrapper.state('isTextAreaActive')).toEqual(false);
    });
  });

  describe('onKeyPressHandler', () => {
    const defaultMockKeys = {
      target: { value: 'Typed in text for areatext' },
      preventDefault: jest.fn(),
    };

    it('should call preventDefault function when enter key is pressed and isTextAreaActive is false', () => {
      mockEvent = {
        ...defaultMockKeys,
        charCode: 13,
      };
      wrapper = getWrapper();

      wrapper.find(TextArea).dive().find(StyledTextArea).simulate('keypress', mockEvent);
      expect(mockEvent.preventDefault).toHaveBeenCalled();
    });

    it('should call onClickButtonHandler function when enter key is pressed', () => {
      mockEvent = {
        ...defaultMockKeys,
        charCode: 13,
      };
      wrapper = getWrapper();

      spy = jest.spyOn(wrapper.instance(), 'onClickButtonHandler');

      wrapper.find(TextArea).dive().find(StyledTextArea).simulate('change', mockEvent);
      wrapper.find(TextArea).dive().find(StyledTextArea).simulate('keypress', mockEvent);
      expect(spy).toHaveBeenCalled();
    });

    it('should not call onClickButtonHandler function when non-enter key is pressed', () => {
      mockEvent = {
        ...defaultMockKeys,
        charCode: 29,
      };
      wrapper = getWrapper();

      spy = jest.spyOn(wrapper.instance(), 'onClickButtonHandler');

      wrapper.find(TextArea).dive().find(StyledTextArea).simulate('keypress', mockEvent);
      expect(spy).not.toHaveBeenCalled();
    });
  });

  describe('onClickButtonHandler', () => {
    it('should render correct ResultBanner when correct answer is entered', () => {
      mockEvent = { target: { value: 'Juan es de Espana' } };
      wrapper = getWrapper();

      expect(wrapper.find(ResultBanner).props().answerStatus).toEqual('undecided');
      wrapper.find(TextArea).dive().find(StyledTextArea).simulate('change', mockEvent);
      wrapper.find(ResultBanner).dive().find(StyledButton).simulate('click');
      expect(wrapper.find(ResultBanner).props().answerStatus).toEqual('correct');
    });

    it('should render correct ResultBanner when incorrect answer is entered', () => {
      mockEvent = { target: { value: 'Wrong answer' } };
      wrapper = getWrapper();

      expect(wrapper.find(ResultBanner).props().answerStatus).toEqual('undecided');
      wrapper.find(TextArea).dive().find(StyledTextArea).simulate('change', mockEvent);
      wrapper.find(ResultBanner).dive().find(StyledButton).simulate('click');
      expect(wrapper.find(ResultBanner).props().answerStatus).toEqual('incorrect');
    });

    it('should set correct state values for when answer is correct', () => {
      mockEvent = { target: { value: 'Juan es de Espana' } };
      wrapper = getWrapper();

      expect(wrapper.state('answerStatus')).toEqual('undecided');
      expect(wrapper.state('isAnswerSubmitted')).toEqual(false);
      expect(wrapper.state('isTextAreaDisabled')).toEqual(false);

      wrapper.find(TextArea).dive().find(StyledTextArea).simulate('change', mockEvent);
      wrapper.find(ResultBanner).dive().find(StyledButton).simulate('click');

      expect(wrapper.state('answerStatus')).toEqual('correct');
      expect(wrapper.state('isAnswerSubmitted')).toEqual(true);
      expect(wrapper.state('isTextAreaDisabled')).toEqual(true);
    });

    it('should set correct state values for when answer is incorrect', () => {
      mockEvent = { target: { value: 'Wrong answer' } };
      wrapper = getWrapper();

      expect(wrapper.state('answerStatus')).toEqual('undecided');
      expect(wrapper.state('isAnswerSubmitted')).toEqual(false);
      expect(wrapper.state('isTextAreaDisabled')).toEqual(false);

      wrapper.find(TextArea).dive().find(StyledTextArea).simulate('change', mockEvent);
      wrapper.find(ResultBanner).dive().find(StyledButton).simulate('click');

      expect(wrapper.state('answerStatus')).toEqual('incorrect');
      expect(wrapper.state('isAnswerSubmitted')).toEqual(true);
      expect(wrapper.state('isTextAreaDisabled')).toEqual(true);
    });
  });
});
