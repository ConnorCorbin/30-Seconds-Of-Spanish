import React from 'react';

import getResultBanner from 'common/services/get-result-banner/index';

import ResultBanner from 'components/result-banner/result-banner';

describe('GetResultBanner service', () => {
  let functionParameters;
  const defaultUndecidedProps = {
    bannerType: 'undecided',
  };

  const defaultCorrectProps = {
    isAnswerCorrect: true,
    bannerType: 'correct',
  };

  const defaultIncorrectProps = {
    isAnswerCorrect: false,
    bannerType: 'incorrect',
  };

  const undecidedResultBannerProps = {
    buttonText: 'Button text',
    isActive: true,
    onClickFunction: () => {},
  };

  const correctResultBannerProps = {
    correctResultTitle: 'Correct result title',
    correctResultText: 'Correct result text',
  };

  const incorrectResultBannerProps = {
    incorrectResultTitle: 'Incorrect title title',
    incorrectResultText: 'Incorrect result text',
  };

  const resultBannerMap = {
    undecided: { ...undecidedResultBannerProps, ...defaultUndecidedProps },
    correct: { ...correctResultBannerProps, ...defaultCorrectProps },
    incorrect: { ...incorrectResultBannerProps, ...defaultIncorrectProps },
  };

  ['undecided', 'correct', 'incorrect'].forEach((answerStatus) => {
    it(`should return ${answerStatus} ResultBanner with correct props when answerStatus is ${answerStatus}`, () => {
      functionParameters = [
        answerStatus,
        undecidedResultBannerProps,
        correctResultBannerProps,
        incorrectResultBannerProps,
      ];

      expect(getResultBanner(...functionParameters)).toEqual(
        <ResultBanner
          {...resultBannerMap[answerStatus]}
        />,
      );
    });
  });
});
