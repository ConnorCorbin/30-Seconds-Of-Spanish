import React from 'react';
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

  const getPlaceholderText = () => {
    const placeholderText = validatedLanguage() === languageMap.english
      ? 'Type in English'
      : 'Type in Spanish';

    return placeholderText;
  };

  const getTextArea = () => (
    <StyledTextArea
      autoCorrect="off"
      spellCheck="false"
      autoCapitalize="none"
      lang={validatedLanguage()}
      dir="ltr"
      unselectable="on"
      placeholder={getPlaceholderText()}
      onChange={onChangeFunction}
      onKeyPress={onKeyPressFunction}
      disabled={isTextAreaDisabled}
    />
  );

  return (
    <ThemeProvider theme={theme}>
      <StyledWrapper>
        {getTextArea()}
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

export default TextArea;
