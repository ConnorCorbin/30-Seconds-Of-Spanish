import React from 'react';

import questionConfigs from 'common/learning-material/translate-text-questions/config';

import TranslateTextQuestion from 'components/translate-text-question/translate-text-question';

export default () => {
  const {
    defaultProps,
    spanishProps,
    englishProps,
    questions,
  } = questionConfigs;

  return questions.map(({ questionText, correctAnswer, isEnglishQuestion }) => {
    const languageSpecificProps = isEnglishQuestion
      ? spanishProps
      : englishProps;

    return (
      <TranslateTextQuestion
        {...defaultProps}
        {...languageSpecificProps}
        questionText={questionText}
        correctAnswer={correctAnswer}
      />
    );
  });
};
