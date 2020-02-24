import React from 'react';

import ImageBanner from 'components/image-banner/image-banner';
import Image from 'components/image/image';

describe('ImageBanner', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <ImageBanner iageUrl="Image URL" imageAltTag="Image alt tag" />,
    );
  });

  it('should render ImageBanner component', () => {
    expect(wrapper.isEmptyRender()).toEqual(false);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render ImageBanner component with Image', () => {
    expect(wrapper.find(Image).exists()).toBe(true);
  });
});
