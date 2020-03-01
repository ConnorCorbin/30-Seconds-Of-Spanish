import PropTypes from 'prop-types';

import componentConfigs from 'component-configs';

const TestComponent = ({
  componentName,
}) => {
  if (!componentName) return null;

  const chosenComponent = componentName.charAt(0).toLowerCase() + componentName.slice(1);

  return componentConfigs[chosenComponent];
};

TestComponent.propTypes = {
  componentName: PropTypes.string,
};

export default TestComponent;
