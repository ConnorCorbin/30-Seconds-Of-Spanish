import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import theme from 'common/constants/theme/theme';

import StyledWrapper from 'components/text-input/styles/wrapper';
import StyledTextArea from 'components/text-input/styles/text-area';

const languageMap = {
  en: 'en',
  es: 'es',
};

const TextInput = ({
  language,
}) => {
  const validatedLanguage = () => {
    const lowerCaseLanguage = language.toLowerCase();
    const validateLanguage = languageMap[lowerCaseLanguage] || 'es';

    return validateLanguage;
  };

  const getPlaceholderText = () => {
    const placeholderText = validatedLanguage() === languageMap.en
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
      placeholder={getPlaceholderText()}
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

TextInput.defaultProps = {
  language: 'es',
};

TextInput.propTypes = {
  language: PropTypes.string,
};

export default TextInput;
