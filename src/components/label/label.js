import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import theme from 'common/theme';

import Image from 'components/image/image';
import StyledWrapper from 'components/label/styles/wrapper';
import StyledLabel from 'components/label/styles/label';
import StyledText from 'components/label/styles/text';

const Label = ({
  labelText,
  imageUrl,
  imageAltTag,
  isLabelActive = false,
  isAnswerSubmitted = false,
  onClickFunction,
  onKeyPressFunction,
}) => {
  const getLabelImage = () => imageUrl && (
    <Image url={imageUrl} altTag={imageAltTag} />
  );

  const getLabelText = () => labelText && (
    <StyledText>{labelText}</StyledText>
  );

  return (
    <ThemeProvider theme={theme}>
      <StyledWrapper>
        <StyledLabel
          tabIndex={0}
          aria-label={labelText}
          isLabelActive={isLabelActive}
          isAnswerSubmitted={isAnswerSubmitted}
          onClick={onClickFunction}
          onKeyPress={onKeyPressFunction}
          isImageLabel={!!imageUrl}
        >
          {getLabelImage()}
          {getLabelText()}
        </StyledLabel>
      </StyledWrapper>
    </ThemeProvider>
  );
};

Label.propTypes = {
  labelText: PropTypes.string,
  imageUrl: PropTypes.string,
  imageAltTag: PropTypes.string,
  isLabelActive: PropTypes.bool,
  isAnswerSubmitted: PropTypes.bool,
  onClickFunction: PropTypes.func,
  onKeyPressFunction: PropTypes.func,
};

export default Label;
