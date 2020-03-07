import React from 'react';

import ChallengeHeader from 'components/challenge-header/challenge-header';

export default (questionTitle, questionText) => {
  if (!questionTitle && !questionText) return null;

  return (
    <ChallengeHeader
      questionTitle={questionTitle}
      questionText={questionText}
    />
  );
};
