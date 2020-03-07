import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import theme from 'common/theme';
import convertStringToId from 'common/services/covert-string-to-id';
import getChallengeHeader from 'common/services/get-challenge-header';
import getResultBanner from 'common/services/get-result-banner';
import ANSWER_STATUS from 'common/constants/answer-status';

import StyledWrapper from 'components/multiple-choice-question/styles/wrapper';
import StyledLabel from 'components/multiple-choice-question/styles/label';

const { correct, incorrect, undecided } = ANSWER_STATUS;

class MultipleChoiceQuestion extends Component {
  state = {
    activeLabelIndex: 9999,
    answerStatus: undecided,
    isLabelActive: false,
    isAnswerSubmitted: false,
  };

  onClickLabelHandler = (index) => () => {
    const { activeLabelIndex } = this.state;

    if (activeLabelIndex === index) return null;

    return this.setState({
      activeLabelIndex: index,
      isLabelActive: true,
    });
  };

  onClickButtonHandler = () => () => {
    const { possibleAnswers, correctAnswer } = this.props;
    const { activeLabelIndex } = this.state;

    const answerSelectedByUser = possibleAnswers[activeLabelIndex];

    if (answerSelectedByUser === correctAnswer) return this.setState({
      isAnswerSubmitted: true,
      answerStatus: correct,
    });

    return this.setState({
      isAnswerSubmitted: true,
      answerStatus: incorrect,
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

  getPossibleAnswers = possibleAnswers => possibleAnswers
    .map((answer, index) => (
      <StyledLabel
        key={convertStringToId(answer) + index}
        onClick={this.onClickLabelHandler(index)}
        isActive={this.state.activeLabelIndex === index}
        isAnswerSubmitted={this.state.isAnswerSubmitted}
      >
        {answer}
      </StyledLabel>
    ));

  render() {
    const { questionTitle, questionText, possibleAnswers } = this.props;

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

MultipleChoiceQuestion.defaultProps = {
  possibleAnswers: [],
};

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
