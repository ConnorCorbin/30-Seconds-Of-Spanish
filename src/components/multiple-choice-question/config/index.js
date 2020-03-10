import React from 'react';

import MultipleChoiceQuestion from 'components/multiple-choice-question/multiple-choice-question';

export default {
  'multipleChoiceQuestion-1': <MultipleChoiceQuestion questionTitle="Mark the correct meaning" questionText="One, Two, Three!" possibleAnswers={[{ text: '¡Uno, dos, tres!', isCorrectAnswer: true }, { text: '¡Un, queso, 3!', isCorrectAnswer: false }, { text: '¡1, sal y 3!', isCorrectAnswer: false }]} buttonText="Check Result" correctResultTitle="Correct Result!" correctResultText="Well Done." incorrectResultTitle="Correct Result:" incorrectResultText="" />,
  // eslint-disable-next-line object-curly-newline
  'multipleChoiceQuestion-2': <MultipleChoiceQuestion questionTitle="Mark the correct meaning" questionText="A dog." possibleAnswers={[{ text: 'El Perro', imageUrl: 'https://image.flaticon.com/icons/svg/1530/1530856.svg', imageAltTag: '', isCorrectAnswer: true }, { text: 'El gato', imageUrl: 'https://image.flaticon.com/icons/svg/1998/1998592.svg', imageAltTag: '', isCorrectAnswer: false }, { text: 'El conejo', imageUrl: 'https://image.flaticon.com/icons/svg/1469/1469055.svg', imageAltTag: '', isCorrectAnswer: false }]} correctAnswer="¡Uno, dos, tres!" buttonText="Check Result" correctResultTitle="Correct Result!" correctResultText="Well Done." incorrectResultTitle="Correct Result:" incorrectResultText="" />,
};
