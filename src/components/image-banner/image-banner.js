import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Image from 'components/image/image';

import StyledWrapper from 'components/image-banner/styles/wrapper';

const ImageBanner = ({
  imageUrl,
  imageAltTag,
}) => (
  <StyledWrapper>
    <Image url={imageUrl} altTag={imageAltTag} />
  </StyledWrapper>
);

ImageBanner.propTypes = {
  imageUrl: PropTypes.string,
  imageAltTag: PropTypes.string,
};

export default memo(ImageBanner);
