import React from 'react';

import ResultBanner from 'components/result-banner/result-banner';

export default (resultBannerProps) => {
  const {
    answerStatus,
    buttonText,
    isActive,
    onClickFunction,
    correctTitle,
    correctText,
    incorrectTitle,
    incorrectText,
  } = resultBannerProps;

  const undecidedProps = {
    answerStatus,
    buttonText,
    isActive,
    onClickFunction,
  };

  const correctProps = {
    answerStatus,
    correctTitle,
    correctText,
  };

  const incorrectProps = {
    answerStatus,
    incorrectTitle,
    incorrectText,
  };

  const resultBannerMap = {
    undecided: undecidedProps,
    correct: correctProps,
    incorrect: incorrectProps,
  };

  return <ResultBanner {...resultBannerMap[answerStatus]} />;
};
