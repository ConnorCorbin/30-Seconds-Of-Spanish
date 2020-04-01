export default {
  defaultProps: {
    incorrectResultTitle: 'Incorrect. Correct answer is:',
    correctResultTitle: 'You are correct!',
  },
  spanishProps: {
    typedInLanguage: 'spanish',
    questionTitle: 'Translate the following text into Spanish',
  },
  englishProps: {
    typedInLanguage: 'english',
    questionTitle: 'Translate the following text into English',
  },
  questions: [{
    questionText: 'Gracias, hasta luego.',
    correctAnswer: 'Thanks, see you later.',
    isEnglishQuestion: false,
  }, {
    questionText: '¿Cómo está usted?',
    correctAnswer: 'How are you?',
    isEnglishQuestion: false,
  }, {
    questionText: 'Buenas tardes, ¿Cómo está usted?',
    correctAnswer: 'Good evening, How are you?',
    isEnglishQuestion: false,
  }, {
    questionText: '¡Hasta mañana!',
    correctAnswer: 'See you tomorrow!',
    isEnglishQuestion: false,
  }, {
    questionText: '¿Cómo se llama usted?',
    correctAnswer: 'What is your name?',
    isEnglishQuestion: false,
  }, {
    questionText: 'See you tomorrow!',
    correctAnswer: '¡Hasta mañana!',
    isEnglishQuestion: true,
  }, {
    questionText: 'See you later!',
    correctAnswer: '¡Hasta luego!',
    isEnglishQuestion: true,
  }, {
    questionText: 'How are you?',
    correctAnswer: '¿Cómo está usted?',
    isEnglishQuestion: true,
  }, {
    questionText: 'Good evening!',
    correctAnswer: '¡Buenas tardes!',
    isEnglishQuestion: true,
  }, {
    questionText: 'Hello, how are you?',
    correctAnswer: 'Hola, qué tal?',
    isEnglishQuestion: true,
  }],
};
