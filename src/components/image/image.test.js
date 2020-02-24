import React from 'react';

import Image from 'components/image/image';

describe('Image', () => {
  let wrapper;
  const props = {
    url: 'Image URL',
    altTag: 'Image alt tag',
  };

  it('should render Image component', () => {
    wrapper = shallow(<Image {...props} />);

    expect(wrapper.isEmptyRender()).toEqual(false);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not render Image component', () => {
    wrapper = shallow(<Image />);

    expect(wrapper.isEmptyRender()).toEqual(true);
  });

  it('should render Image component with correct image URL', () => {
    wrapper = shallow(<Image {...props} />);

    expect(wrapper.find('img').at(0).props().src).toEqual(props.url);
  });

  it('should render Image component with correct image alt tag', () => {
    wrapper = shallow(<Image {...props} />);

    expect(wrapper.find('img').at(0).props().alt).toEqual(props.altTag);
  });
});
