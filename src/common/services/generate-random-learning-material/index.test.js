import React from 'react';

import generateRandomLearningMaterial from 'common/services/generate-random-learning-material';
import learningMaterial from 'common/learning-material';

it('should return random questions from learning material array', () => {
  const wrapper = shallow(
    <div>
      {generateRandomLearningMaterial()}
    </div>,
  );

  expect(wrapper.containsAnyMatchingElements([
    ...learningMaterial,
  ])).toEqual(true);
});
