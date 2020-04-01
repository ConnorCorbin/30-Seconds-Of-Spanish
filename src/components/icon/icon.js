import React from 'react';
import PropTypes from 'prop-types';

import icons from 'common/icons';

const Icon = ({
  name,
}) => {
  const IconComponent = icons[name];

  if (!IconComponent) return null;
  return <IconComponent />;
};

Icon.propTypes = {
  name: PropTypes.string,
};

export default Icon;
