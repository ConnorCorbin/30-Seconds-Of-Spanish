import styled, { css } from 'styled-components';

import ANSWER_STATUS from 'common/constants/answer-status';

const { undecided } = ANSWER_STATUS;

const getBackgroundColor = ({ theme, answerStatus }) => theme.colors[`${answerStatus}BannerBackground`];

const getAdditionalStyles = ({ answerStatus }) => {
  const isUndecidedAnswerStatus = answerStatus === undecided;

  if (isUndecidedAnswerStatus) return `
    justify-content: center;
    align-items: center;
  `;

  return 'cursor: default;';
};

const baseStyles = css`
  background-color: ${getBackgroundColor};
  display: flex;
  font-family: inherit;
  margin-top: 30px;
  min-height: 140px;
  user-select: none;
  width: 100%;
`;

export default styled.div`
  ${baseStyles}
  ${getAdditionalStyles}
`;
