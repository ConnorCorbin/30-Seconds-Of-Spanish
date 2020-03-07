import React from 'react';

import ImageBanner from 'components/image-banner/image-banner';
import Image from 'components/image/image';

describe('ImageBanner component', () => {
  let wrapper;
  const getWrapper = ({
    imageUrl = 'Image URL',
    imageAltTag = 'Image alt tag',
  } = {}) => shallow(
    <ImageBanner
      imageUrl={imageUrl}
      imageAltTag={imageAltTag}
    />,
  );

  it('should render ImageBanner component', () => {
    wrapper = getWrapper();

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.isEmptyRender()).toEqual(false);
  });

  it('should not render ImageBanner component', () => {
    wrapper = getWrapper({ imageUrl: '' });

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.isEmptyRender()).toEqual(true);
  });

  it('should render ImageBanner component with correct props passed to Image component', () => {
    wrapper = getWrapper();

    expect(wrapper.contains(
      <Image
        url="Image URL"
        altTag="Image alt tag"
      />,
    )).toEqual(true);
  });
});
