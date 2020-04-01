import React from 'react';
import PropTypes from 'prop-types';

import StyledWrapper from 'components/image/styles/wrapper';

const Image = ({
  url,
  altTag,
}) => {
  if (!url) return null;

  return (
    <StyledWrapper>
      <img
        alt={altTag}
        src={url}
      />
    </StyledWrapper>
  );
};

Image.propTypes = {
  url: PropTypes.string,
  altTag: PropTypes.string,
};

export default Image;
