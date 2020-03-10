import React from 'react';

import Label from 'components/label/label';
import StyledLabel from 'components/label/styles/label';

describe('Label component', () => {
  let wrapper;
  let mockFunction;
  const getWrapper = ({
    labelText = 'Some nice label text',
    imageUrl,
    imageAltTag,
    isLabelActive,
    isAnswerSubmitted,
    onClickFunction,
    onKeyPressFunction,
  } = {}) => shallow(
    <Label
      labelText={labelText}
      imageUrl={imageUrl}
      imageAltTag={imageAltTag}
      isLabelActive={isLabelActive}
      isAnswerSubmitted={isAnswerSubmitted}
      onClickFunction={onClickFunction}
      onKeyPressFunction={onKeyPressFunction}
    />,
  );

  describe('Label component', () => {
    it('should render text Label component', () => {
      wrapper = getWrapper();

      expect(wrapper).toMatchSnapshot();
      expect(wrapper.isEmptyRender()).toEqual(false);
    });

    it('should render image Label component', () => {
      wrapper = getWrapper();

      expect(wrapper).toMatchSnapshot();
      expect(wrapper.isEmptyRender()).toEqual(false);
    });
  });

  describe('Correct label text', () => {
    it('should render Label with correct text for text label', () => {
      wrapper = getWrapper();

      expect(wrapper.find(StyledLabel).children().text()).toEqual('Some nice label text');
    });

    it('should render Label with correct text for image label', () => {
      wrapper = getWrapper({ imageUrl: 'Some nice URL' });

      expect(wrapper.find(StyledLabel).children().last().text()).toEqual('Some nice label text');
    });
  });

  describe('IsLabelActive', () => {
    it('should render Label with correct default isLabelActive prop value', () => {
      wrapper = getWrapper();

      expect(wrapper.find(StyledLabel).props().isLabelActive).toEqual(false);
    });

    it('should render Label with correct isLabelActive prop value hen true is passed in', () => {
      wrapper = getWrapper({ isLabelActive: true });

      expect(wrapper.find(StyledLabel).props().isLabelActive).toEqual(true);
    });

    it('should render Label with correct isLabelActive prop value hen false is passed in', () => {
      wrapper = getWrapper({ isLabelActive: false });

      expect(wrapper.find(StyledLabel).props().isLabelActive).toEqual(false);
    });
  });

  describe('IsAnswerSubmitted', () => {
    it('should render Label with correct default isAnswerSubmitted prop value', () => {
      wrapper = getWrapper();

      expect(wrapper.find(StyledLabel).props().isAnswerSubmitted).toEqual(false);
    });

    it('should render Label with correct isAnswerSubmitted prop value hen true is passed in', () => {
      wrapper = getWrapper({ isAnswerSubmitted: true });

      expect(wrapper.find(StyledLabel).props().isAnswerSubmitted).toEqual(true);
    });

    it('should render Label with correct isAnswerSubmitted prop value hen false is passed in', () => {
      wrapper = getWrapper({ isAnswerSubmitted: false });

      expect(wrapper.find(StyledLabel).props().isAnswerSubmitted).toEqual(false);
    });
  });

  it('should execute onClickFunction when StyledLabel onClick event is fired', () => {
    mockFunction = jest.fn();
    wrapper = getWrapper({ onClickFunction: mockFunction });

    expect(mockFunction).not.toHaveBeenCalledWith();
    wrapper.find(StyledLabel).simulate('click');
    expect(mockFunction).toHaveBeenCalledWith();
  });

  it('should execute onKeyPressFunction when StyledLabel onKeyPress event is fired', () => {
    mockFunction = jest.fn();
    wrapper = getWrapper({ onKeyPressFunction: mockFunction });

    expect(mockFunction).toHaveBeenCalledTimes(0);
    wrapper.find(StyledLabel).simulate('keypress', { charCode: 29 });
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});
