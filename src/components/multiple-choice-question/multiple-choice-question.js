import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import theme from 'common/theme';
import convertStringToId from 'common/services/covert-string-to-id';
import getChallengeHeader from 'common/services/get-challenge-header';
import getResultBanner from 'common/services/get-result-banner';
import ANSWER_STATUS from 'common/constants/answer-status';

import StyledWrapper from 'components/multiple-choice-question/styles/wrapper';
import TextLabel from 'components/text-label/text-label';

const { correct, incorrect, undecided } = ANSWER_STATUS;

class MultipleChoiceQuestion extends Component {
  state = {
    activeLabelIndex: 9999,
    answerStatus: undecided,
    isLabelActive: false,
    isAnswerSubmitted: false,
  };

  onClickLabelHandler = (index) => () => {
    const { activeLabelIndex, isAnswerSubmitted } = this.state;
    const isActiveLabelIndex = activeLabelIndex === index;

    if (isAnswerSubmitted || isActiveLabelIndex) return null;

    return this.setState({
      activeLabelIndex: index,
      isLabelActive: true,
    });
  };

  onClickButtonHandler = () => () => {
    const { possibleAnswers, correctAnswer } = this.props;
    const { activeLabelIndex } = this.state;

    const answerSelectedByUser = possibleAnswers[activeLabelIndex];
    const isAnswerCorrect = answerSelectedByUser === correctAnswer;

    if (isAnswerCorrect) return this.setState({
      isAnswerSubmitted: true,
      answerStatus: correct,
    });

    return this.setState({
      isAnswerSubmitted: true,
      answerStatus: incorrect,
    });
  };

  onKeyPressHandler = (index) => (event) => {
    const { charCode } = event;
    const { activeLabelIndex, isAnswerSubmitted } = this.state;

    if (isAnswerSubmitted) return null;

    const isEnterKeyPressed = charCode === 13;
    const isSameLabelSelected = index === activeLabelIndex;

    if (isEnterKeyPressed && isSameLabelSelected) return this.onClickButtonHandler()();

    if (isEnterKeyPressed && !isSameLabelSelected) return this.onClickLabelHandler(index)();

    return null;
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
      isLabelActive,
      answerStatus,
    } = this.state;

    const undecidedResultBannerProps = {
      buttonText,
      isActive: isLabelActive,
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

  getPossibleAnswers = (possibleAnswers) => {
    const { activeLabelIndex, isAnswerSubmitted } = this.state;

    const textLabels = possibleAnswers.map((answerText, index) => {
      const textLabelKey = convertStringToId(answerText) + index;
      const isLabelActive = activeLabelIndex === index;

      return (
        <TextLabel
          key={textLabelKey}
          labelText={answerText}
          isLabelActive={isLabelActive}
          isAnswerSubmitted={isAnswerSubmitted}
          onClickFunction={this.onClickLabelHandler(index)}
          onKeyPressFunction={this.onKeyPressHandler(index)}
        />
      );
    });

    return textLabels;
  };

  render() {
    const { questionTitle, questionText, possibleAnswers = [] } = this.props;

    if (!possibleAnswers.length) return null;

    return (
      <ThemeProvider theme={theme}>
        <StyledWrapper>
          {getChallengeHeader(questionTitle, questionText)}
          {this.getPossibleAnswers(possibleAnswers)}
        </StyledWrapper>
        {this.getCorrectResultBanner()}
      </ThemeProvider>
    );
  }
}

MultipleChoiceQuestion.propTypes = {
  // MultipleChoiceQuestion
  possibleAnswers: PropTypes.arrayOf(PropTypes.shape),
  correctAnswer: PropTypes.string,
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

export default MultipleChoiceQuestion;
