import React from 'react';

import StyledWrapper from 'components/result-banner/styles/wrapper';

describe('StyledWrapper', () => {
  let wrapper;
  const theme = {
    colors: {
      correctBannerBackground: '#b8f28b',
      incorrectBannerBackground: '#ffc1c1',
      undecidedBannerBackground: '#f5f5f5',
    },
  };

  ['correct', 'incorrect', 'undecided'].forEach((bannerType) => {
    it(`should render StyledWrapper with the correct background color for ${bannerType} banner type`, () => {
      wrapper = shallow(<StyledWrapper theme={theme} bannerType={bannerType} />);

      expect(wrapper).toHaveStyleRule('background-color', theme.colors[`${bannerType}BannerBackground`]);
    });
  });

  describe('Cursor', () => {
    ['correct', 'incorrect'].forEach((bannerType) => {
      it(`should render StyledWrapper with the correct cursor for ${bannerType} banner type`, () => {
        wrapper = shallow(<StyledWrapper theme={theme} bannerType={bannerType} />);

        expect(wrapper).toHaveStyleRule('cursor', 'default');
      });
    });

    it('should render StyledWrapper with no cursor for undecided banner type', () => {
      wrapper = shallow(<StyledWrapper theme={theme} bannerType="undecided" />);

      expect(wrapper).not.toHaveStyleRule('cursor');
    });
  });

  describe('Additional styles', () => {
    ['correct', 'incorrect'].forEach((bannerType) => {
      it(`should render StyledWrapper without additional styles for ${bannerType} banner type`, () => {
        wrapper = shallow(<StyledWrapper theme={theme} bannerType={bannerType} />);

        expect(wrapper).not.toHaveStyleRule('justify-content');
        expect(wrapper).not.toHaveStyleRule('align-items');
      });
    });

    it('should render StyledWrapper with additional styles for undecided banner type', () => {
      wrapper = shallow(<StyledWrapper theme={theme} bannerType="undecided" />);

      expect(wrapper).toHaveStyleRule('justify-content', 'center');
      expect(wrapper).toHaveStyleRule('align-items', 'center');
    });
  });
});
