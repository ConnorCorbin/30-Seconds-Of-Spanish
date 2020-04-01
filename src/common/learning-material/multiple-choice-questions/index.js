import React from 'react';

import questionConfigs from 'common/learning-material/multiple-choice-questions/config';

import MultipleChoiceQuestion from 'components/multiple-choice-question/multiple-choice-question';

export default () => {
  const { defaultProps, questions } = questionConfigs;

  return questions.map(({ questionText, possibleAnswers }) => (
    <MultipleChoiceQuestion
      {...defaultProps}
      questionText={questionText}
      possibleAnswers={possibleAnswers}
    />
  ));
};
