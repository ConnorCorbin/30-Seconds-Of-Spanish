import React from 'react';

import TestComponent from 'test-component/test-component';

describe('TestComponent', () => {
  let wrapper;

  it('should render TestComponent component', () => {
    wrapper = shallow(<TestComponent componentName="Image" />);

    expect(wrapper.isEmptyRender()).toEqual(false);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not render TestComponent when componentName is empty', () => {
    wrapper = shallow(<TestComponent componentName="" />);

    expect(wrapper.isEmptyRender()).toEqual(true);
    expect(wrapper).toMatchSnapshot();
  });
});
