import React from 'react';

import TranslateTextQuestion from 'components/translate-text-question/translate-text-question';

const defaultProps = {
  incorrectResultTitle: 'Incorrect. Correct answer is:',
  correctResultTitle: 'You are correct!',
  buttonText: 'Check Answer',
};

const spanishQuestionProps = {
  typedInLanguage: 'spanish',
  questionTitle: 'Translate the following text into Spanish',
  ...defaultProps,
};

const englishQuestionProps = {
  typedInLanguage: 'english',
  questionTitle: 'Translate the following text into English',
  ...defaultProps,
};

export default [
  // Spanish to English translations.
  <TranslateTextQuestion {...englishQuestionProps} questionText="Gracias, hasta luego." incorrectResultText="Thanks, see you later." correctAnswer="Thanks, see you later." />,
  <TranslateTextQuestion {...englishQuestionProps} questionText="¿Cómo está usted?" incorrectResultText="How are you?" correctAnswer="How are you?" />,
  <TranslateTextQuestion {...englishQuestionProps} questionText="Buenas tardes, ¿Cómo está usted?" incorrectResultText="Good evening, How are you?" correctAnswer="Good evening, How are you?" />,
  <TranslateTextQuestion {...englishQuestionProps} questionText="¡Hasta mañana!" incorrectResultText="See you tomorrow!" correctAnswer="See you tomorrow!" />,
  <TranslateTextQuestion {...englishQuestionProps} questionText="¿Cómo se llama usted?" incorrectResultText="What is your name?" correctAnswer="What is your name?" />,
  // English to Spanish translations.
  <TranslateTextQuestion {...spanishQuestionProps} questionText="See you tomorrow!" incorrectResultText="¡Hasta mañana!" correctAnswer="¡Hasta mañana!" />,
  <TranslateTextQuestion {...spanishQuestionProps} questionText="See you later!" incorrectResultText="¡Hasta luego!" correctAnswer="¡Hasta luego!" />,
  <TranslateTextQuestion {...spanishQuestionProps} questionText="How are you?" incorrectResultText="Cómo está usted?" correctAnswer="¿Cómo está usted?" />,
  <TranslateTextQuestion {...spanishQuestionProps} questionText="Good evening!" incorrectResultText="¡Buenas tardes!" correctAnswer="¡Buenas tardes!" />,
  <TranslateTextQuestion {...spanishQuestionProps} questionText="Hello, how are you?" incorrectResultText="¿Hola, qué tal?" correctAnswer="Hola, qué tal?" />,
];
