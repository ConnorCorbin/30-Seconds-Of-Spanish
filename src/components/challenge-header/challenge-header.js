import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import theme from 'common/theme';

import StyledWrapper from 'components/challenge-header/styles/wrapper';
import StyledQuestionTitle from 'components/challenge-header/styles/question-title';
import StyledQuestionText from 'components/challenge-header/styles/question-text';

const ChallengeHeader = ({
  questionTitle,
  questionText,
}) => {
  const getQuestionTitle = () => questionTitle && (
    <StyledQuestionTitle>
      {questionTitle}
    </StyledQuestionTitle>
  );

  const getQuestionText = () => questionText && (
    <StyledQuestionText>
      {questionText}
    </StyledQuestionText>
  );

  if (!questionTitle && !questionText) return null;

  return (
    <ThemeProvider theme={theme}>
      <StyledWrapper>
        {getQuestionTitle()}
        {getQuestionText()}
      </StyledWrapper>
    </ThemeProvider>
  );
};

ChallengeHeader.propTypes = {
  questionTitle: PropTypes.string,
  questionText: PropTypes.string,
};

export default ChallengeHeader;
