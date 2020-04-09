import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/icon/icon';
import StyledWrapper from 'components/header/styles/wrapper';
import StyledIcon from 'components/header/styles/icon';

const Header = ({
  iconName,
}) => {
  if (!iconName) return null;

  return (
    <StyledWrapper>
      <StyledIcon>
        <Icon name={iconName} />
      </StyledIcon>
    </StyledWrapper>
  );
};

Header.propTypes = {
  iconName: PropTypes.string,
};

export default Header;
