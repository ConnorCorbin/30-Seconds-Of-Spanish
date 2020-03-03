import React from 'react';

import MultipleChoiceQuestion from 'components/multiple-choice-question/multiple-choice-question';

export default [
  <MultipleChoiceQuestion questionTitle="Mark the correct meaning" questionText="One, Two, Three!" possibleAnswers={['¡Uno, dos, tres!', '¡Un, queso, 3', '¡1, sal y 3!']} correctAnswer="¡Uno, dos, tres!" buttonText="Check Result" correctResultTitle="Correct Result!" correctResultText="Well Done." incorrectResultTitle="Correct Result:" incorrectResultText="" />,
];
