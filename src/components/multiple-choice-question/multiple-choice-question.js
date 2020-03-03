import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import theme from 'common/constants/theme/theme';

import ResultBanner from 'components/result-banner/result-banner';
import QuestionHeader from 'components/question-header/challenge-header';

import StyledWrapper from 'components/multiple-choice-question/styles/wrapper';
import StyledLabel from 'components/multiple-choice-question/styles/label';
import StyledContentWrapper from 'components/multiple-choice-question/styles/content-wrapper';
import StyledFooter from 'components/multiple-choice-question/styles/footer';

const isCorrectAnswerOptions = {
  correct: 'correct',
  incorrect: 'incorrect',
  undecided: 'undecided',
};

const { correct, incorrect, undecided } = isCorrectAnswerOptions;

class MultipleChoiceQuestion extends Component {
  state = {
    activeLabelIndex: -1,
    isLabelActive: false,
    isCorrectAnswer: undecided,
    isAnswerSubmitted: false,
  };

  getUniqueID = string => string.replace(/[^\w\s]|_/g, '').replace(/\s+/g, '-');

  getQuestionHeader = () => {
    const { questionTitle, questionText } = this.props;

    if (!questionTitle && !questionText) return null;
    return (
      <QuestionHeader
        questionTitle={questionTitle}
        questionText={questionText}
      />
    );
  };

  onClickLabelHandler = (index) => () => {
    const { activeLabelIndex } = this.state;

    if (activeLabelIndex === index) return null;

    this.setState({
      activeLabelIndex: index,
      isLabelActive: true,
    });
  };

  getPossibleAnswers = (possibleAnswers) => {
    const answers = possibleAnswers.map((answer, index) => (
      <StyledLabel
        key={this.getUniqueID(answer) + index}
        onClick={this.onClickLabelHandler(index)}
        isActive={this.state.activeLabelIndex === index}
        isAnswerSubmitted={this.state.isAnswerSubmitted}
      >
        {answer}
      </StyledLabel>
    ));

    return (
      <StyledContentWrapper>
        {answers}
      </StyledContentWrapper>
    );
  };

  onClickButtonHandler = () => () => {
    const {
      props: { possibleAnswers, correctAnswer },
      state: { activeLabelIndex },
    } = this;

    const chosenAnswer = possibleAnswers[activeLabelIndex];

    if (chosenAnswer === correctAnswer) return this.setState({
      isCorrectAnswer: correct,
      isAnswerSubmitted: true,
    });

    return this.setState({ isCorrectAnswer: incorrect, isAnswerSubmitted: true });
  };

  getCorrectResultBanner = () => {
    const {
      props: {
        buttonText, correctResultTitle, correctResultText,
        incorrectResultTitle, incorrectResultText, correctAnswer,
      },
      state: { isLabelActive, isCorrectAnswer },
    } = this;

    const undecidedBannerProps = {
      buttonText,
      isActive: isLabelActive,
      bannerType: 'undecided',
      onClickFunction: this.onClickButtonHandler(),
    };

    const correctBannerProps = {
      correctResultTitle,
      correctResultText,
      isAnswerCorrect: true,
      bannerType: 'correct',
    };

    const incorrectBannerProps = {
      incorrectResultTitle,
      incorrectResultText: incorrectResultText || correctAnswer,
      isAnswerCorrect: false,
      bannerType: 'incorrect',
    };

    const bannerMap = {
      correct: correctBannerProps,
      incorrect: incorrectBannerProps,
      undecided: undecidedBannerProps,
    };

    return (
      <StyledFooter>
        <ResultBanner {...bannerMap[isCorrectAnswer]} />
      </StyledFooter>
    );
  };


  render() {
    const { possibleAnswers } = this.props;

    if (!possibleAnswers.length) return null;

    return (
      <ThemeProvider theme={theme}>
        <StyledWrapper>
          {this.getQuestionHeader()}
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
