import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import theme from 'common/theme';
import ANSWER_STATUS from 'common/constants/answer-status';

import Icon from 'components/icon/icon';
import StyledWrapper from 'components/result-banner/styles/wrapper';
import StyledButton from 'components/result-banner/styles/button';
import StyledTitle from 'components/result-banner/styles/title';
import StyledTitleText from 'components/result-banner/styles/title-text';
import StyledIconWrapper from 'components/result-banner/styles/icon-wrapper';
import StyledTextWrapper from 'components/result-banner/styles/text-wrapper';

const { undecided, correct } = ANSWER_STATUS;

const ResultBanner = ({
  correctTitle,
  correctText,
  incorrectTitle,
  incorrectText,
  answerStatus = undecided,
  buttonText = 'Check Result',
  isActive,
  onClickFunction,
}) => {
  const validateAnswerStatus = () => {
    const lowerCaseAnswerStatus = answerStatus.toLowerCase();
    const validatedAnswerStatus = ANSWER_STATUS[lowerCaseAnswerStatus] || undecided;

    return validatedAnswerStatus;
  };

  const getIcon = (statusOfAnswer) => {
    const isUndecidedAnswerStatus = statusOfAnswer === undecided;
    if (isUndecidedAnswerStatus) return null;

    const isCorrectAnswerStatus = statusOfAnswer === correct;
    const iconName = isCorrectAnswerStatus
      ? 'tick'
      : 'cross';

    return (
      <StyledIconWrapper>
        <Icon name={iconName} />
      </StyledIconWrapper>
    );
  };

  const getText = (title, text) => (
    <Fragment>
      {text && <StyledTitle>{title}</StyledTitle>}
      {text && <StyledTitleText>{text}</StyledTitleText>}
    </Fragment>
  );

  const getCorrectResultBanner = (statusOfAnswer) => {
    const isUndecidedAnswerStatus = statusOfAnswer === undecided;
    if (isUndecidedAnswerStatus) return (
      <StyledButton onClick={onClickFunction} isActive={isActive}>
        {buttonText}
      </StyledButton>
    );

    const isCorrectAnswerStatus = statusOfAnswer === correct;
    const textContent = isCorrectAnswerStatus
      ? getText(correctTitle, correctText)
      : getText(incorrectTitle, incorrectText);

    return (
      <StyledTextWrapper>
        {textContent}
      </StyledTextWrapper>
    );
  };

  const statusOfAnswer = validateAnswerStatus();

  return (
    <ThemeProvider theme={theme}>
      <StyledWrapper answerStatus={statusOfAnswer}>
        {getIcon(statusOfAnswer)}
        {getCorrectResultBanner(statusOfAnswer)}
      </StyledWrapper>
    </ThemeProvider>
  );
};

ResultBanner.propTypes = {
  correctTitle: PropTypes.string,
  correctText: PropTypes.string,
  incorrectTitle: PropTypes.string,
  incorrectText: PropTypes.string,
  answerStatus: PropTypes.string,
  buttonText: PropTypes.string,
  isActive: PropTypes.bool,
  onClickFunction: PropTypes.func,
};

export default ResultBanner;
