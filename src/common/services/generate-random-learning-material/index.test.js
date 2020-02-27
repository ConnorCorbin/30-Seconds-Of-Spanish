import React from 'react';

import generateRandomLearningMaterial from 'common/services/generate-random-learning-material';
import learningMaterial from 'common/constants/learning-material';

describe('GenerateRandomLearningMaterial', () => {
  it('should return random React component from learning material array', () => {
    const wrapper = shallow(
      <div>
        {generateRandomLearningMaterial()}
      </div>,
    );

    expect(wrapper.containsAnyMatchingElements([
      ...learningMaterial,
    ])).toEqual(true);
  });
});
