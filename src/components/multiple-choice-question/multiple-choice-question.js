import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import theme from 'common/theme';
import convertStringToId from 'common/services/covert-string-to-id';
import getChallengeHeader from 'common/services/get-challenge-header';
import getResultBanner from 'common/services/get-result-banner';
import ANSWER_STATUS from 'common/constants/answer-status';

import StyledWrapper from 'components/multiple-choice-question/styles/wrapper';
import Label from 'components/label/label';

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
    const { possibleAnswers } = this.props;
    const { activeLabelIndex } = this.state;

    const answerSelectedByUser = possibleAnswers[activeLabelIndex];
    const { isCorrectAnswer } = answerSelectedByUser;

    if (isCorrectAnswer) return this.setState({
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
      possibleAnswers,
      buttonText,
      correctResultTitle,
      correctResultText,
      incorrectResultTitle,
      incorrectResultText,
    } = this.props;
    const {
      isLabelActive,
      answerStatus,
      activeLabelIndex,
    } = this.state;

    const answerSelectedByUser = possibleAnswers[activeLabelIndex];
    const { text } = answerSelectedByUser || {};

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
      incorrectResultText: incorrectResultText || text,
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

    const Labels = possibleAnswers.map(({
      text,
      imageUrl,
      imageAltTag,
    }, index) => {
      const LabelKey = convertStringToId(text) + index;
      const isLabelActive = activeLabelIndex === index;

      return (
        <Label
          key={LabelKey}
          labelText={text}
          imageUrl={imageUrl}
          imageAltTag={imageAltTag}
          isLabelActive={isLabelActive}
          isAnswerSubmitted={isAnswerSubmitted}
          onClickFunction={this.onClickLabelHandler(index)}
          onKeyPressFunction={this.onKeyPressHandler(index)}
        />
      );
    });

    return Labels;
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
  possibleAnswers: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    imageUrl: PropTypes.string,
    imageAltTag: PropTypes.string,
    isCorrectAnswer: PropTypes.bool,
  })),
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
