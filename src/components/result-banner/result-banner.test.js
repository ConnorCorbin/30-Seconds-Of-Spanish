import React from 'react';

import ResultBanner from 'components/result-banner/result-banner';
import Icon from 'components/icon/icon';
import StyledTitle from 'components/result-banner/styles/title';
import StyledTitleText from 'components/result-banner/styles/title-text';
import StyledButton from 'components/result-banner/styles/button';

describe('ResultBanner component', () => {
  let wrapper;
  const getWrapper = ({
    correctResultTitle = 'You are correct!',
    correctResultText = 'Well done keep going!',
    incorrectResultTitle = 'Correct Solution:',
    incorrectResultText = 'En el tren.',
    bannerType,
    onClickFunction,
    buttonText,
    isActive,
  } = {}) => shallow(
    <ResultBanner
      correctResultTitle={correctResultTitle}
      correctResultText={correctResultText}
      incorrectResultTitle={incorrectResultTitle}
      incorrectResultText={incorrectResultText}
      bannerType={bannerType}
      onClickFunction={onClickFunction}
      buttonText={buttonText}
      isActive={isActive}
    />,
  );

  ['correct', 'incorrect', 'undecided'].forEach((bannerType) => {
    it(`Should render ${bannerType} banner type`, () => {
      wrapper = getWrapper({ bannerType });

      expect(wrapper.isEmptyRender()).toEqual(false);
      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should render ResultBanner with correct default button text', () => {
    wrapper = getWrapper({ buttonText: 'Check now!' });

    expect(wrapper.find(StyledButton).children().text()).toEqual('Check now!');
  });

  describe('Undecided ResultBanner', () => {
    beforeEach(() => {
      wrapper = getWrapper({ bannerType: 'undecided' });
    });

    it('should render undecided ResultBanner with button', () => {
      expect(wrapper.find(StyledButton).exists()).toEqual(true);
    });

    it('should render undecided ResultBanner with correct text', () => {
      expect(wrapper.find(StyledButton).children().text()).toEqual('Check Result');
    });
  });

  describe('Correct ResultBanner', () => {
    beforeEach(() => {
      wrapper = getWrapper({ bannerType: 'correct' });
    });

    it('should render correct ResultBanner with correct', () => {
      expect(wrapper.find(StyledTitle).children().text()).toEqual('You are correct!');
      expect(wrapper.find(StyledTitleText).children().text()).toEqual('Well done keep going!');
    });

    it('should render correct ResultBanner with Tick icon', () => {
      expect(wrapper.find(Icon).props().name).toEqual('tick');
    });
  });

  describe('Incorrect ResultBanner', () => {
    beforeEach(() => {
      wrapper = getWrapper({ bannerType: 'incorrect' });
    });

    it('should render incorrect ResultBanner with correct', () => {
      expect(wrapper.find(StyledTitle).children().text()).toEqual('Correct Solution:');
      expect(wrapper.find(StyledTitleText).children().text()).toEqual('En el tren.');
    });

    it('should render incorrect ResultBanner with Cross icon', () => {
      expect(wrapper.find(Icon).props().name).toEqual('cross');
    });
  });

  describe('Invalid bannerType input', () => {
    ['Something', '', undefined].forEach((bannerType) => {
      it(`should render undecided ResultBanner with ${bannerType} bannerType input`, () => {
        wrapper = getWrapper({ bannerType });

        expect(wrapper.find(StyledButton).exists()).toEqual(true);
        expect(wrapper.find(StyledButton).children().text()).toEqual('Check Result');
      });
    });

    it('should render correct ResultBanner when capital correct bannerType is passed', () => {
      wrapper = getWrapper({ bannerType: 'CoRRect' });

      expect(wrapper.find(StyledTitle).children().text()).toEqual('You are correct!');
      expect(wrapper.find(StyledTitleText).children().text()).toEqual('Well done keep going!');
      expect(wrapper.find(Icon).props().name).toEqual('tick');
    });

    it('should render incorrect ResultBanner when capital incorrect bannerType is passed', () => {
      wrapper = getWrapper({ bannerType: 'INCoRRect' });

      expect(wrapper.find(StyledTitle).children().text()).toEqual('Correct Solution:');
      expect(wrapper.find(StyledTitleText).children().text()).toEqual('En el tren.');
      expect(wrapper.find(Icon).props().name).toEqual('cross');
    });
  });
});
