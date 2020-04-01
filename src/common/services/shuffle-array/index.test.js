import shuffleArray from 'common/services/shuffle-array';

it('should return array with all index values', () => {
  const array = ['one', 'two', 'three', 'four'];

  expect(shuffleArray(array)).toEqual(array);
});
