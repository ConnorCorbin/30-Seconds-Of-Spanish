import shuffleArray from 'common/services/shuffle-array';

describe('Shuffle array', () => {
  const array = ['one', 'two', 'three', 'four'];

  it('should return array with all index values', () => {
    expect(shuffleArray(array)).toEqual(array);
  });
});
