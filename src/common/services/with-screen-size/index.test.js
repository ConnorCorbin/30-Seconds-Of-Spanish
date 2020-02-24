import React from 'react';

import withScreenSize from 'common/services/with-screen-size';

import Image from 'components/image/image';

jest.unmock('common/services/with-screen-size');

describe('WithScreenSize', () => {
  let wrapper;
  const largeUrl = 'https://picsum.photos/1000/';
  const ImageWithSizeDetection = withScreenSize(Image);

  const generateScreenSizeTest = ([size, innerWidth]) => {
    it(`should generate ${size} size when screenWidth is under ${innerWidth + 1}px`, () => {
      global.innerWidth = innerWidth;
      global.dispatchEvent(new Event('resize'));
      wrapper = shallow(<ImageWithSizeDetection />);

      expect(wrapper.state().currentSize).toEqual(size);
    });
  };

  const screenSizesData = [
    ['SMALL', 479],
    ['MEDIUM', 719],
    ['LARGE', 1019],
  ];

  screenSizesData.forEach((testData) => {
    generateScreenSizeTest(testData);
  });

  it('should add and remove resize event handler', () => {
    const adder = jest.spyOn(global, 'addEventListener');
    const remover = jest.spyOn(global, 'removeEventListener');
    wrapper = shallow(<ImageWithSizeDetection largeUrl={largeUrl} />);

    expect(adder).toHaveBeenCalled();
    expect(adder.mock.calls[0][0]).toEqual('resize');

    wrapper.unmount();

    expect(remover).toHaveBeenCalled();
    expect(remover.mock.calls[0][0]).toEqual('resize');
  });

  it('should not change currentSize if another breakpoint is not reached', () => {
    global.innerWidth = 1399;
    global.dispatchEvent(new Event('resize'));
    wrapper = shallow(<ImageWithSizeDetection largeUrl={largeUrl} />);

    expect(wrapper.state().currentSize).toEqual('LARGE');

    global.innerWidth = 1200;
    global.dispatchEvent(new Event('resize'));

    expect(wrapper.state().currentSize).toEqual('LARGE');
  });
});
