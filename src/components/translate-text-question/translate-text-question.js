import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import theme from 'common/theme';
import getChallengeHeader from 'common/services/get-challenge-header';
import getResultBanner from 'common/services/get-result-banner';
import ANSWER_STATUS from 'common/constants/answer-status';

import TextArea from 'components/text-area/text-area';
import StyledWrapper from 'components/translate-text-question/styles/wrapper';

const { correct, incorrect, undecided } = ANSWER_STATUS;

class TranslateTextQuestion extends Component {
  state = {
    userInput: '',
    answerStatus: undecided,
    isTextAreaActive: false,
    isAnswerSubmitted: false,
    isTextAreaDisabled: false,
  };

  onKeyPressHandler = () => (event) => {
    const { charCode } = event;
    const { isTextAreaActive } = this.state;

    const isEnterKeyPressed = charCode === 13;

    if (isEnterKeyPressed && !isTextAreaActive) {
      event.preventDefault();
    }

    if (isEnterKeyPressed && isTextAreaActive) {
      event.preventDefault();
      this.onClickButtonHandler()();
    }

    return null;
  };

  onChangeHandler = () => (event) => {
    const isUserInputEmpty = !!event.target.value;

    return this.setState({
      userInput: event.target.value,
      isTextAreaActive: isUserInputEmpty,
    });
  };

  onClickButtonHandler = () => () => {
    const { correctAnswer } = this.props;
    const { userInput, isAnswerSubmitted } = this.state;

    if (userInput === correctAnswer) return this.setState({
      isAnswerSubmitted: !isAnswerSubmitted,
      answerStatus: correct,
      isTextAreaDisabled: true,
    });

    return this.setState({
      isAnswerSubmitted: !isAnswerSubmitted,
      answerStatus: incorrect,
      isTextAreaDisabled: true,
    });
  };

  getCorrectResultBanner = () => {
    const {
      buttonText,
      correctResultTitle,
      correctResultText,
      incorrectResultTitle,
      incorrectResultText,
      correctAnswer,
    } = this.props;
    const {
      isTextAreaActive,
      answerStatus,
    } = this.state;

    const undecidedResultBannerProps = {
      buttonText,
      isActive: isTextAreaActive,
      onClickFunction: this.onClickButtonHandler(),
    };

    const correctResultBannerProps = {
      correctResultTitle,
      correctResultText,
    };

    const incorrectResultBannerProps = {
      incorrectResultTitle,
      incorrectResultText: incorrectResultText || correctAnswer,
    };

    return getResultBanner(
      answerStatus,
      undecidedResultBannerProps,
      correctResultBannerProps,
      incorrectResultBannerProps,
    );
  };

  getTextArea = (typedInLanguage) => (
    <TextArea
      onChangeFunction={this.onChangeHandler()}
      onKeyPressFunction={this.onKeyPressHandler()}
      isTextAreaDisabled={this.state.isTextAreaDisabled}
      language={typedInLanguage}
    />
  );

  render() {
    const { questionTitle, questionText, typedInLanguage } = this.props;

    if (!questionTitle && !questionText) return null;

    return (
      <ThemeProvider theme={theme}>
        <StyledWrapper>
          {getChallengeHeader(questionTitle, questionText)}
          {this.getTextArea(typedInLanguage)}
        </StyledWrapper>
        {this.getCorrectResultBanner()}
      </ThemeProvider>
    );
  }
}

TranslateTextQuestion.propTypes = {
  // TranslateTextQuestion
  correctAnswer: PropTypes.string,
  typedInLanguage: PropTypes.string,
  // ChallengeHeader
  questionTitle: PropTypes.string,
  questionText: PropTypes.string,
  // ResultBanner
  buttonText: PropTypes.string,
  correctResultTitle: PropTypes.string,
  correctResultText: PropTypes.string,
  incorrectResultTitle: PropTypes.string,
  incorrectResultText: PropTypes.string,
};

export default TranslateTextQuestion;
