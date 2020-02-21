import styled from 'styled-components';

const getTextColor = ({ theme, isAnswerCorrect }) => (
  isAnswerCorrect
    ? theme.colors.correctAnswerText
    : theme.colors.incorrectAnswerText
);

export default styled.div`
  color: ${getTextColor};
  display: flex;
  flex-direction: column;
`;
