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
  <TranslateTextQuestion {...englishQuestionProps} questionText="Gracias, hasta luego." correctAnswer="Thanks, see you later." />,
  <TranslateTextQuestion {...englishQuestionProps} questionText="¿Cómo está usted?" correctAnswer="How are you?" />,
  <TranslateTextQuestion {...englishQuestionProps} questionText="Buenas tardes, ¿Cómo está usted?" correctAnswer="Good evening, How are you?" />,
  <TranslateTextQuestion {...englishQuestionProps} questionText="¡Hasta mañana!" correctAnswer="See you tomorrow!" />,
  <TranslateTextQuestion {...englishQuestionProps} questionText="¿Cómo se llama usted?" correctAnswer="What is your name?" />,
  // English to Spanish translations.
  <TranslateTextQuestion {...spanishQuestionProps} questionText="See you tomorrow!" correctAnswer="¡Hasta mañana!" />,
  <TranslateTextQuestion {...spanishQuestionProps} questionText="See you later!" correctAnswer="¡Hasta luego!" />,
  <TranslateTextQuestion {...spanishQuestionProps} questionText="How are you?" correctAnswer="¿Cómo está usted?" />,
  <TranslateTextQuestion {...spanishQuestionProps} questionText="Good evening!" correctAnswer="¡Buenas tardes!" />,
  <TranslateTextQuestion {...spanishQuestionProps} questionText="Hello, how are you?" correctAnswer="Hola, qué tal?" />,
];
