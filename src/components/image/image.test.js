import React from 'react';

import Image from 'components/image/image';

import StyledImage from 'components/image/styles/image';

describe('Image component', () => {
  let wrapper;
  const getWrapper = ({
    url = 'Image URL',
    altTag = 'Image alt tag',
  } = {}) => shallow(
    <Image
      url={url}
      altTag={altTag}
    />,
  );

  it('should render Image component', () => {
    wrapper = getWrapper();

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.isEmptyRender()).toEqual(false);
  });

  it('should not render Image component', () => {
    wrapper = getWrapper({ url: '' });

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.isEmptyRender()).toEqual(true);
  });

  it('should render Image component with correct image URL', () => {
    wrapper = getWrapper();

    expect(wrapper.find(StyledImage).props().src).toEqual('Image URL');
  });

  it('should render Image component with correct image alt tag', () => {
    wrapper = getWrapper();

    expect(wrapper.find(StyledImage).props().alt).toEqual('Image alt tag');
  });
});
