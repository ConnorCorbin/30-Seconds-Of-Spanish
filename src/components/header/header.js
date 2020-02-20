import React from 'react';
import PropTypes from 'prop-types';

import logo from 'common/logo/logo.svg';

import Image from 'components/image/image';

import StyledWrapper from 'components/header/styles/styled-wrapper';
import StyledContentWrapper from 'components/header/styles/styled-content-wrapper';
import StyledTitle from 'components/header/styles/Styled-title';
import StyledTextBlock from 'components/header/styles/styled-text-block';

const Header = ({
  title1,
  title2,
  textColor,
  imageUrl,
  imageAltTag,
}) => {
  const getTitle = (titleText) => titleText && (
    <StyledTitle textColor={textColor} >
      {titleText}
    </StyledTitle>
  );

  const getTextBlock = () => (
    <StyledTextBlock>
      {getTitle(title1)}
      {getTitle(title2)}
    </StyledTextBlock>
  );

  if (!title1) return null;

  return (
    <StyledWrapper>
      <StyledContentWrapper>
        <Image url={logo} altTag={imageAltTag} />
        {getTextBlock()}
      </StyledContentWrapper>
    </StyledWrapper>
  );
};

Header.propTypes = {
  title1: PropTypes.string,
  title2: PropTypes.string,
  textColor: PropTypes.string,
  imageUrl: PropTypes.string,
  imageAltTag: PropTypes.string,
};

export default Header;
