import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import theme from 'common/theme';

import Icon from 'components/icon/icon';
import StyledWrapper from 'components/result-banner/styles/wrapper';
import StyledButton from 'components/result-banner/styles/button';
import StyledTitle from 'components/result-banner/styles/title';
import StyledTitleText from 'components/result-banner/styles/title-text';
import StyledIconWrapper from 'components/result-banner/styles/icon-wrapper';
import StyledTextWrapper from 'components/result-banner/styles/text-wrapper';

const bannerTypeMap = {
  correct: 'correct',
  incorrect: 'incorrect',
  undecided: 'undecided',
};

const { correct, undecided } = bannerTypeMap;

const ResultBanner = ({
  correctResultTitle,
  correctResultText,
  incorrectResultTitle,
  incorrectResultText,
  bannerType = undecided,
  onClickFunction,
  buttonText = 'Check Result',
  isActive = false,
}) => {
  const validateBannerType = () => {
    const lowerCaseBannerType = bannerType.toLowerCase();
    const validatedBannerType = bannerTypeMap[lowerCaseBannerType] || undecided;

    return validatedBannerType;
  };

  const getIcon = bannerDesignType => {
    const isUndecidedBanner = bannerDesignType === undecided;

    if (isUndecidedBanner) return null;

    const iconName = bannerDesignType === correct
      ? 'tick'
      : 'cross';

    return (
      <StyledIconWrapper>
        <Icon name={iconName} />
      </StyledIconWrapper>
    );
  };

  const getTextContent = (title, text) => (
    <Fragment>
      {title && <StyledTitle>{title}</StyledTitle>}
      {text && <StyledTitleText>{text}</StyledTitleText>}
    </Fragment>
  );

  const getCorrectResultBanner = bannerDesignType => {
    if (bannerDesignType === undecided) return (
      <StyledButton onClick={onClickFunction} isActive={isActive}>
        {buttonText}
      </StyledButton>
    );

    const textContent = bannerDesignType === correct
      ? getTextContent(correctResultTitle, correctResultText)
      : getTextContent(incorrectResultTitle, incorrectResultText);

    return (
      <StyledTextWrapper>
        {textContent}
      </StyledTextWrapper>
    );
  };

  const bannerDesignType = validateBannerType();

  return (
    <ThemeProvider theme={theme}>
      <StyledWrapper bannerType={bannerDesignType}>
        {getIcon(bannerDesignType)}
        {getCorrectResultBanner(bannerDesignType)}
      </StyledWrapper>
    </ThemeProvider>
  );
};

ResultBanner.propTypes = {
  correctResultTitle: PropTypes.string,
  correctResultText: PropTypes.string,
  incorrectResultTitle: PropTypes.string,
  incorrectResultText: PropTypes.string,
  bannerType: PropTypes.string,
  onClickFunction: PropTypes.func,
  buttonText: PropTypes.string,
  isActive: PropTypes.bool,
};

export default ResultBanner;
