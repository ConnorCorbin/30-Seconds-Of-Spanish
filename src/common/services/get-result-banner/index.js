import React from 'react';

import ANSWER_STATUS from 'common/constants/answer-status';

import ResultBanner from 'components/result-banner/result-banner';

const { correct, incorrect, undecided } = ANSWER_STATUS;

export default (answerStatus, undecidedResultBannerProps, correctResultBannerProps, incorrectResultBannerProps) => {
  const defaultUndecidedProps = {
    bannerType: undecided,
  };

  const defaultCorrectProps = {
    isAnswerCorrect: true,
    bannerType: correct,
  };

  const defaultIncorrectProps = {
    isAnswerCorrect: false,
    bannerType: incorrect,
  };

  const resultBannerMap = {
    undecided: { ...undecidedResultBannerProps, ...defaultUndecidedProps },
    correct: { ...correctResultBannerProps, ...defaultCorrectProps },
    incorrect: { ...incorrectResultBannerProps, ...defaultIncorrectProps },
  };

  return <ResultBanner {...resultBannerMap[answerStatus]} />;
};
