import React from 'react';

import Label from 'components/label/label';
import Image from 'components/image/image';
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
    it('should render component', () => {
      wrapper = getWrapper();

      expect(wrapper).toMatchSnapshot();
      expect(wrapper.isEmptyRender()).toEqual(false);
    });

    it('should not render component', () => {
      wrapper = getWrapper();

      expect(wrapper).toMatchSnapshot();
      expect(wrapper.isEmptyRender()).toEqual(false);
    });
  });

  describe('Correct label text', () => {
    it('should render component with correct text for text label', () => {
      wrapper = getWrapper();

      expect(wrapper.find(StyledLabel).children().text()).toEqual('Some nice label text');
    });

    it('should render component with correct text for image label', () => {
      wrapper = getWrapper({ imageUrl: 'Some nice URL' });

      expect(wrapper.find(StyledLabel).children().last().text()).toEqual('Some nice label text');
    });
  });

  describe('Correct image', () => {
    it('should render component without image when no image URL is passed', () => {
      wrapper = getWrapper();

      expect(wrapper.find(Image).exists()).toEqual(false);
    });

    it('should render component with correct Image props when image URL is passed', () => {
      wrapper = getWrapper({ imageUrl: 'Some nice URL', imageAltTag: 'Image alt tag' });

      expect(wrapper.find(Image).props()).toMatchObject({
        url: 'Some nice URL',
        altTag: 'Image alt tag',
      });
    });
  });

  describe('TabIndex', () => {
    it('should render component with correct tabIndex value for text label', () => {
      wrapper = getWrapper();

      expect(wrapper.find(StyledLabel).props().tabIndex).toEqual(0);
    });

    it('should render component with correct tabIndex value for image label', () => {
      wrapper = getWrapper({ imageUrl: 'Some nice URL' });

      expect(wrapper.find(StyledLabel).props().tabIndex).toEqual(0);
    });
  });

  describe('Aria-label', () => {
    it('should render component with correct aria-label value for text label', () => {
      wrapper = getWrapper();

      expect(wrapper.find(StyledLabel).prop('aria-label')).toEqual('Some nice label text');
    });

    it('should render component with correct aria-label value for image label', () => {
      wrapper = getWrapper({ imageUrl: 'Some nice URL' });

      expect(wrapper.find(StyledLabel).prop('aria-label')).toEqual('Some nice label text');
    });
  });

  describe('IsLabelActive', () => {
    it('should render component with correct default isLabelActive prop value', () => {
      wrapper = getWrapper();

      expect(wrapper.find(StyledLabel).props().isLabelActive).toEqual(false);
    });

    it('should render component with correct isLabelActive prop value when true is passed in', () => {
      wrapper = getWrapper({ isLabelActive: true });

      expect(wrapper.find(StyledLabel).props().isLabelActive).toEqual(true);
    });

    it('should render component with correct isLabelActive prop value when false is passed in', () => {
      wrapper = getWrapper({ isLabelActive: false });

      expect(wrapper.find(StyledLabel).props().isLabelActive).toEqual(false);
    });
  });

  describe('IsAnswerSubmitted', () => {
    it('should render component with correct default isAnswerSubmitted prop value', () => {
      wrapper = getWrapper();

      expect(wrapper.find(StyledLabel).props().isAnswerSubmitted).toEqual(false);
    });

    it('should render component with correct isAnswerSubmitted prop value when true is passed in', () => {
      wrapper = getWrapper({ isAnswerSubmitted: true });

      expect(wrapper.find(StyledLabel).props().isAnswerSubmitted).toEqual(true);
    });

    it('should render component with correct isAnswerSubmitted prop value when false is passed in', () => {
      wrapper = getWrapper({ isAnswerSubmitted: false });

      expect(wrapper.find(StyledLabel).props().isAnswerSubmitted).toEqual(false);
    });
  });

  describe('IsImageLabel', () => {
    it('should render component with correct isImageLabel prop value when no image URL is passed in', () => {
      wrapper = getWrapper();

      expect(wrapper.find(StyledLabel).props().isImageLabel).toEqual(false);
    });

    it('should render component with correct isImageLabel prop value when image URL is passed in', () => {
      wrapper = getWrapper({ imageUrl: 'Some nice URL' });

      expect(wrapper.find(StyledLabel).props().isImageLabel).toEqual(true);
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
