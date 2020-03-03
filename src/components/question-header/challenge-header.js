import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import theme from 'common/constants/theme/theme';

import StyledWrapper from 'components/question-header/styles/wrapper';
import StyledQuestionTitle from 'components/question-header/styles/question-title';
import StyledQuestionText from 'components/question-header/styles/question-text';

const QuestionHeader = ({
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

QuestionHeader.propTypes = {
  questionTitle: PropTypes.string,
  questionText: PropTypes.string,
};

export default QuestionHeader;
