import styled from 'styled-components';

const getBackgroundColor = ({ theme, isAnswerCorrect }) => (
  isAnswerCorrect
    ? theme.colors.correctAnswerBackground
    : theme.colors.incorrectAnswerBackground
);

export default styled.div`
  background-color: ${getBackgroundColor};
  min-height: 140px;
  width: 100%;
`;
