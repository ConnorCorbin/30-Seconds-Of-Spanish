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

  removeAccents = (string) => string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  removepunctuation = (string) => string.replace(/[.,#!¡?¿$%&;:{}=\-_`~()]/g, '');

  stripString = (string) => this.removeAccents(this.removepunctuation(string));

  stringSimilarity = (string1, string2) => {
    const lowercaseString1 = string1.toLowerCase();
    const lowercaseString2 = string2.toLowerCase();

    if (lowercaseString1 === lowercaseString2) return 100;

    const bigramLength = 2;
    let matchingBigrams = 0;
    const string1Length = lowercaseString1.length;
    const string2Length = lowercaseString2.length;
    const indexAdjuster = 1;
    const bigramMap = new Map();
    const numberOfBigramsInString1 = string1Length - (bigramLength - indexAdjuster);
    const numberOfBigramsInString2 = string2Length - (bigramLength - indexAdjuster);
    const getBigram = (index, string) => string.substr(index, bigramLength);

    [...Array(numberOfBigramsInString1)].forEach((value, index) => {
      const bigramKey = getBigram(index, lowercaseString1);
      const isBigramInMap = bigramMap.has(bigramKey);
      const bigramValue = isBigramInMap
        ? bigramMap.get(bigramKey) + 1
        : 1;

      bigramMap.set(bigramKey, bigramValue);
    });

    [...Array(numberOfBigramsInString2)].forEach((value, index) => {
      const bigramKey = getBigram(index, lowercaseString1);
      const isBigramInMap = bigramMap.has(bigramKey);
      const bigramKeyValue = isBigramInMap
        ? bigramMap.get(bigramKey)
        : 0;
      const count = bigramKeyValue;

      if (count) {
        bigramMap.set(bigramKey, count - 1);
        matchingBigrams += 1;
      }
    });

    const FractionPercentage = (
      (matchingBigrams * bigramLength) / ((string1Length + string2Length
        - ((bigramLength - indexAdjuster) * bigramLength)))
    );

    return FractionPercentage;
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

    const strippedCorrectAnswer = this.stripString(correctAnswer);
    const strippedUserInput = this.stripString(userInput);
    const likenessPercentage = this.stringSimilarity(strippedCorrectAnswer, strippedUserInput);
    const minimumLikenessPercentage = 0.90;

    if (likenessPercentage >= minimumLikenessPercentage) return this.setState({
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
      correctTitle,
      correctText,
      incorrectTitle,
      incorrectText,
      correctAnswer,
    } = this.props;
    const {
      isTextAreaActive,
      answerStatus,
    } = this.state;

    const resultBannerProps = {
      answerStatus,
      buttonText,
      isActive: isTextAreaActive,
      onClickFunction: this.onClickButtonHandler(),
      correctTitle,
      correctText,
      incorrectTitle,
      incorrectText: incorrectText || correctAnswer,
    };

    return getResultBanner(resultBannerProps);
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
  correctTitle: PropTypes.string,
  correctText: PropTypes.string,
  incorrectTitle: PropTypes.string,
  incorrectText: PropTypes.string,
};

export default TranslateTextQuestion;
