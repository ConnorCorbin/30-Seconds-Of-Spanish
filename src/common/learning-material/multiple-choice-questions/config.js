export default {
  defaultProps: {
    questionTitle: 'Mark the correct meaning',
    correctTitle: 'Correct Result!',
    correctText: 'Well Done.',
    incorrectTitle: 'Incorrect. Correct Result is:',
  },
  questions: [{
    questionText: 'Hello!',
    possibleAnswers: [{
      text: '¡Tarde!',
      isCorrectAnswer: false,
    }, {
      text: '¡Adios!',
      isCorrectAnswer: false,
    }, {
      text: '¡Hola!',
      isCorrectAnswer: true,
    }],
  }, {
    questionText: 'How are you?',
    possibleAnswers: [{
      text: '¿Qué tal?',
      isCorrectAnswer: true,
    }, {
      text: '¿Cómo te va?',
      isCorrectAnswer: false,
    }, {
      text: '¿Cómo te llamas?',
      isCorrectAnswer: false,
    }],
  }, {
    questionText: 'See you later!',
    possibleAnswers: [{
      text: '¡Estoy bien!',
      isCorrectAnswer: false,
    }, {
      text: '¡Hasta la vista!',
      isCorrectAnswer: true,
    }, {
      text: '¡De nada!',
      isCorrectAnswer: false,
    }],
  }, {
    questionText: 'You\'re welcome!',
    possibleAnswers: [{
      text: '¡Estoy bien!',
      isCorrectAnswer: false,
    }, {
      text: '¡Hasta la vista!',
      isCorrectAnswer: false,
    }, {
      text: '¡De nada!',
      isCorrectAnswer: true,
    }],
  }, {
    questionText: 'Where is the bathroom?',
    possibleAnswers: [{
      text: '¿Dónde está el baño?',
      isCorrectAnswer: true,
    }, {
      text: '¡Hasta la vista!',
      isCorrectAnswer: false,
    }, {
      text: '¡De nada!',
      isCorrectAnswer: false,
    }],
  }, {
    questionText: 'Yo no comprendo español.',
    possibleAnswers: [{
      text: 'I know Spanish',
      isCorrectAnswer: false,
    }, {
      text: 'I know some Spanish',
      isCorrectAnswer: false,
    }, {
      text: 'I don\'t understand Spanish',
      isCorrectAnswer: true,
    }],
  }, {
    questionText: 'Necesito ayuda.',
    possibleAnswers: [{
      text: 'I need help',
      isCorrectAnswer: true,
    }, {
      text: 'I\'m going home',
      isCorrectAnswer: false,
    }, {
      text: 'I don\'t need anything else',
      isCorrectAnswer: false,
    }],
  }, {
    questionText: '¿Puede hablar más despacio, por favor?',
    possibleAnswers: [{
      text: 'Can you do me a favour, please?',
      isCorrectAnswer: false,
    }, {
      text: 'Can you help me, please?',
      isCorrectAnswer: false,
    }, {
      text: 'Can you speak slowly, please?',
      isCorrectAnswer: true,
    }],
  }, {
    questionText: '¡Salud!',
    possibleAnswers: [{
      text: 'Thanks!',
      isCorrectAnswer: false,
    }, {
      text: 'Stop!',
      isCorrectAnswer: false,
    }, {
      text: 'Cheers!',
      isCorrectAnswer: true,
    }],
  }, {
    questionText: '¡Buen Provecho!',
    possibleAnswers: [{
      text: 'Genius!',
      isCorrectAnswer: false,
    }, {
      text: 'Great!',
      isCorrectAnswer: false,
    }, {
      text: 'Well done!',
      isCorrectAnswer: true,
    }],
  }, {
    questionText: 'A dog.',
    possibleAnswers: [{
      text: 'El Perro',
      imageUrl: 'https://image.flaticon.com/icons/svg/1530/1530856.svg',
      imageAltTag: 'Dog',
      isCorrectAnswer: true,
    }, {
      text: 'El gato',
      imageUrl: 'https://image.flaticon.com/icons/svg/1998/1998592.svg',
      imageAltTag: 'Cat',
      isCorrectAnswer: false,
    }, {
      text: 'El conejo',
      imageUrl: 'https://image.flaticon.com/icons/svg/1469/1469055.svg',
      imageAltTag: 'Rabbit',
      isCorrectAnswer: false,
    }],
  }, {
    questionText: 'Monday',
    possibleAnswers: [{
      text: 'Lunes',
      imageUrl: 'https://image.flaticon.com/icons/svg/547/547433.svg',
      imageAltTag: 'The moon',
      isCorrectAnswer: true,
    }, {
      text: 'Martes',
      imageUrl: 'https://image.flaticon.com/icons/svg/547/547417.svg',
      imageAltTag: 'Plant Mars',
      isCorrectAnswer: false,
    }, {
      text: 'Jueves',
      imageUrl: 'https://image.flaticon.com/icons/svg/547/547450.svg',
      imageAltTag: 'Planet Jupiter',
      isCorrectAnswer: false,
    }],
  }, {
    questionText: 'The milk',
    possibleAnswers: [{
      text: 'El pan',
      imageUrl: 'https://image.flaticon.com/icons/svg/702/702500.svg',
      imageAltTag: 'A loaf of bread',
      isCorrectAnswer: false,
    }, {
      text: 'La Manzana',
      imageUrl: 'https://image.flaticon.com/icons/svg/415/415733.svg',
      imageAltTag: 'An apple',
      isCorrectAnswer: false,
    }, {
      text: 'La leche',
      imageUrl: 'https://image.flaticon.com/icons/svg/372/372973.svg',
      imageAltTag: 'Milk carton',
      isCorrectAnswer: true,
    }],
  }, {
    questionText: 'A chicken',
    possibleAnswers: [{
      text: 'El pollo',
      imageUrl: 'https://image.flaticon.com/icons/svg/1864/1864470.svg',
      imageAltTag: 'A chicken',
      isCorrectAnswer: true,
    }, {
      text: 'El cerdo',
      imageUrl: 'https://image.flaticon.com/icons/svg/2194/2194842.svg',
      imageAltTag: 'A pig',
      isCorrectAnswer: false,
    }, {
      text: 'La vaca',
      imageUrl: 'https://image.flaticon.com/icons/svg/2395/2395765.svg',
      imageAltTag: 'A cow',
      isCorrectAnswer: false,
    }],
  }, {
    questionText: 'A Cow',
    possibleAnswers: [{
      text: 'El pollo',
      imageUrl: 'https://image.flaticon.com/icons/svg/1864/1864470.svg',
      imageAltTag: 'A chicken',
      isCorrectAnswer: false,
    }, {
      text: 'El cerdo',
      imageUrl: 'https://image.flaticon.com/icons/svg/2194/2194842.svg',
      imageAltTag: 'A pig',
      isCorrectAnswer: false,
    }, {
      text: 'La vaca',
      imageUrl: 'https://image.flaticon.com/icons/svg/2395/2395765.svg',
      imageAltTag: 'A cow',
      isCorrectAnswer: true,
    }],
  }],
};
