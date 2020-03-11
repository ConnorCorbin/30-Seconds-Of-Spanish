/* eslint-disable no-param-reassign */
export default (array) => {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndexFromPassedInArray;

  while (currentIndex) {
    randomIndexFromPassedInArray = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndexFromPassedInArray];
    array[randomIndexFromPassedInArray] = temporaryValue;
  }

  return array;
};
