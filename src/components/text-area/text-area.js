import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import theme from 'common/theme';

import StyledWrapper from 'components/text-area/styles/wrapper';
import StyledTextArea from 'components/text-area/styles/text-area';

const languageMap = {
  english: 'en',
  spanish: 'es',
};

const TextArea = ({
  language = 'es',
  onChangeFunction,
  onKeyPressFunction,
  isTextAreaDisabled,
}) => {
  const validatedLanguage = () => {
    const lowerCaseLanguage = language.toLowerCase();
    const validateLanguage = languageMap[lowerCaseLanguage] || 'es';

    return validateLanguage;
  };

  const getPlaceholderText = (statusOfLanguage) => {
    const placeholderText = statusOfLanguage === languageMap.english
      ? 'Type in English'
      : 'Type in Spanish';

    return placeholderText;
  };

  const getTextArea = (statusOfLanguage) => (
    <StyledTextArea
      autoCorrect="off"
      spellCheck="false"
      autoCapitalize="none"
      lang={statusOfLanguage}
      dir="ltr"
      unselectable="on"
      placeholder={getPlaceholderText(statusOfLanguage)}
      onChange={onChangeFunction}
      onKeyPress={onKeyPressFunction}
      disabled={isTextAreaDisabled}
    />
  );

  const statusOfLanguage = validatedLanguage();

  return (
    <ThemeProvider theme={theme}>
      <StyledWrapper>
        {getTextArea(statusOfLanguage)}
      </StyledWrapper>
    </ThemeProvider>
  );
};

TextArea.propTypes = {
  language: PropTypes.string,
  onChangeFunction: PropTypes.func,
  onKeyPressFunction: PropTypes.func,
  isTextAreaDisabled: PropTypes.bool,
};

export default memo(TextArea);
