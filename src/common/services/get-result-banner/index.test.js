import React from 'react';

import getResultBanner from 'common/services/get-result-banner';

import ResultBanner from 'components/result-banner/result-banner';

const undecidedProps = {
  buttonText: 'Check answer',
  isActive: true,
  onClickFunction: () => {},
};

const correctProps = {
  correctTitle: 'Correct title',
  correctText: 'Correct text',
};

const incorrectProps = {
  incorrectTitle: 'Incorrect title',
  incorrectText: 'Incorrect text',
};

const resultBannerMap = {
  undecided: { ...undecidedProps, answerStatus: 'undecided' },
  correct: { ...correctProps, answerStatus: 'correct' },
  incorrect: { ...incorrectProps, answerStatus: 'incorrect' },
};

const props = { ...undecidedProps, ...correctProps, ...incorrectProps };

['undecided', 'correct', 'incorrect'].forEach((answerStatus) => {
  it(`should return ${answerStatus} ResultBanner with correct props when answerStatus is ${answerStatus}`, () => {
    expect(getResultBanner({ ...props, answerStatus })).toEqual(
      <ResultBanner
        {...resultBannerMap[answerStatus]}
      />,
    );
  });
});
