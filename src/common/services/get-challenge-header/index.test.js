import React from 'react';

import getChallengeHeader from 'common/services/get-challenge-header';

import ChallengeHeader from 'components/challenge-header/challenge-header';

it('should return ChallengeHeader component with correct props', () => {
  const questionTitle = 'Question title';
  const questionText = 'Question text';

  expect(getChallengeHeader(questionTitle, questionText)).toMatchSnapshot();
  expect(getChallengeHeader(questionTitle, questionText)).toEqual(
    <ChallengeHeader
      questionTitle={questionTitle}
      questionText={questionText}
    />,
  );
});

it('should not return ChallengeHeader component when no parameters are passed in', () => {
  expect(getChallengeHeader()).toMatchSnapshot();
  expect(getChallengeHeader()).toEqual(null);
});
