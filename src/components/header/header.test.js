import React from 'react';

import Header from 'components/header/header';
import Icon from 'components/icon/icon';
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

  it('should render component', () => {
    wrapper = getWrapper();

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.isEmptyRender()).toEqual(false);
  });

  it('should not render component when no icon name is passed in', () => {
    wrapper = getWrapper({ iconName: '' });

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.html()).toEqual(null);
  });

  it('should render component with correct icon', () => {
    wrapper = getWrapper();

    expect(wrapper.find(StyledIcon).exists()).toEqual(true);
    expect(wrapper.find(Icon).props().name).toEqual('logo');
  });
});
