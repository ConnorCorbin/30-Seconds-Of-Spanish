import React from 'react';

import Header from 'components/header/header';
import StyledIcon from 'components/header/styles/icon';

describe('Header component', () => {
  let wrapper;
  const getWrapper = ({
    iconName = 'logo',
  } = {}) => shallow(
    <Header
      iconName={iconName}
    />,
  );

  it('should render Header component', () => {
    wrapper = getWrapper();

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.isEmptyRender()).toEqual(false);
  });

  it('should not render Header component', () => {
    wrapper = getWrapper({ iconName: '' });

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.isEmptyRender()).toEqual(true);
  });

  it('should render Header component with icon', () => {
    wrapper = getWrapper();

    expect(wrapper.find(StyledIcon).exists()).toEqual(true);
  });
});
