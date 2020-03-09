import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import theme from 'common/theme';

import StyledWrapper from 'components/text-label/styles/wrapper';
import StyledTextLabel from 'components/text-label/styles/text-label';

const TextLabel = ({
  labelText,
  isLabelActive = false,
  isAnswerSubmitted = false,
  onClickFunction,
  onKeyPressFunction,
}) => (
  <ThemeProvider theme={theme}>
    <StyledWrapper>
      <StyledTextLabel
        tabIndex={0}
        aria-label={labelText}
        isLabelActive={isLabelActive}
        isAnswerSubmitted={isAnswerSubmitted}
        onClick={onClickFunction}
        onKeyPress={onKeyPressFunction}
      >
        {labelText}
      </StyledTextLabel>
    </StyledWrapper>
  </ThemeProvider>
);

TextLabel.propTypes = {
  labelText: PropTypes.string,
  isLabelActive: PropTypes.bool,
  isAnswerSubmitted: PropTypes.bool,
  onClickFunction: PropTypes.func,
  onKeyPressFunction: PropTypes.func,
};

export default TextLabel;
