import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import theme from 'common/theme/theme';
import { ReactComponent as CrossIcon } from 'common/icons/cross.svg';
import { ReactComponent as TickIcon } from 'common/icons/tick.svg';

import StyledWrapper from 'components/message-box/styles/wrapper';
import StyledTitle from 'components/message-box/styles/title';
import StyledTitleText from 'components/message-box/styles/title-text';
import StyledIconWrapper from 'components/message-box/styles/icon-wrapper';
import StyledContentWrapper from 'components/message-box/styles/content-wrapper';
import StyledTextWrapper from 'components/message-box/styles/text-wrapper';

const MessageBox = ({
  correctTitle1,
  correctText1,
  incorrectTitle1,
  incorrectText1,
  incorrectTitle2,
  incorrectText2,
  isAnswerCorrect,
}) => {
  const getTitleAndText = (title, text) => (
    <Fragment>
      {title && <StyledTitle>{title}</StyledTitle>}
      {text && <StyledTitleText>{text}</StyledTitleText>}
    </Fragment>
  );

  const getMessage = () => {
    if (isAnswerCorrect) return getTitleAndText(correctTitle1, correctText1);

    return (
      <Fragment>
        {getTitleAndText(incorrectTitle1, incorrectText1)}
        {getTitleAndText(incorrectTitle2, incorrectText2)}
      </Fragment>
    );
  };

  const getCorrectIcon = () => {
    const icon = isAnswerCorrect
      ? <TickIcon />
      : <CrossIcon />;

    return (
      <StyledIconWrapper>
        {icon}
      </StyledIconWrapper>
    );
  };

  const getCorrectMessage = () => (
    <StyledContentWrapper>
      {getCorrectIcon()}
      <StyledTextWrapper isAnswerCorrect={isAnswerCorrect}>
        {getMessage()}
      </StyledTextWrapper>
    </StyledContentWrapper>
  );

  return (
    <ThemeProvider theme={theme}>
      <StyledWrapper isAnswerCorrect={isAnswerCorrect}>
        {getCorrectMessage()}
      </StyledWrapper>
    </ThemeProvider>
  );
};

MessageBox.propTypes = {
  correctTitle1: PropTypes.string,
  correctText1: PropTypes.string,
  incorrectTitle1: PropTypes.string,
  incorrectText1: PropTypes.string,
  incorrectTitle2: PropTypes.string,
  incorrectText2: PropTypes.string,
  isAnswerCorrect: PropTypes.bool,
};

export default MessageBox;
