import learningMaterial from 'common/learning-material';

export default () => {
  const totalNumberOfQuestions = learningMaterial.length;
  const randomQuestionIndex = Math.floor(Math.random() * totalNumberOfQuestions);
  const randomQuestion = learningMaterial[randomQuestionIndex];

  return randomQuestion;
};
