import React from 'react';

import TextLabel from 'components/text-label/text-label';
import StyledTextLabel from 'components/text-label/styles/text-label';

describe('TextLabel component', () => {
  let wrapper;
  let mockFunction;
  const getWrapper = ({
    labelText = 'Some nice label text',
    isLabelActive,
    isAnswerSubmitted,
    onClickFunction,
    onKeyPressFunction,
  } = {}) => shallow(
    <TextLabel
      labelText={labelText}
      isLabelActive={isLabelActive}
      isAnswerSubmitted={isAnswerSubmitted}
      onClickFunction={onClickFunction}
      onKeyPressFunction={onKeyPressFunction}
    />,
  );

  it('should render TextLabel component', () => {
    wrapper = getWrapper();

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.isEmptyRender()).toEqual(false);
  });

  it('should render TextLabel with correct text', () => {
    wrapper = getWrapper();

    expect(wrapper.find(StyledTextLabel).children().text()).toEqual('Some nice label text');
  });

  describe('IsLabelActive', () => {
    it('should render TextLabel with correct default isLabelActive prop value', () => {
      wrapper = getWrapper();

      expect(wrapper.find(StyledTextLabel).props().isLabelActive).toEqual(false);
    });

    it('should render TextLabel with correct isLabelActive prop value hen true is passed in', () => {
      wrapper = getWrapper({ isLabelActive: true });

      expect(wrapper.find(StyledTextLabel).props().isLabelActive).toEqual(true);
    });

    it('should render TextLabel with correct isLabelActive prop value hen false is passed in', () => {
      wrapper = getWrapper({ isLabelActive: false });

      expect(wrapper.find(StyledTextLabel).props().isLabelActive).toEqual(false);
    });
  });

  describe('IsAnswerSubmitted', () => {
    it('should render TextLabel with correct default isAnswerSubmitted prop value', () => {
      wrapper = getWrapper();

      expect(wrapper.find(StyledTextLabel).props().isAnswerSubmitted).toEqual(false);
    });

    it('should render TextLabel with correct isAnswerSubmitted prop value hen true is passed in', () => {
      wrapper = getWrapper({ isAnswerSubmitted: true });

      expect(wrapper.find(StyledTextLabel).props().isAnswerSubmitted).toEqual(true);
    });

    it('should render TextLabel with correct isAnswerSubmitted prop value hen false is passed in', () => {
      wrapper = getWrapper({ isAnswerSubmitted: false });

      expect(wrapper.find(StyledTextLabel).props().isAnswerSubmitted).toEqual(false);
    });
  });

  it('should execute onClickFunction when StyledTextLabel onClick event is fired', () => {
    mockFunction = jest.fn();
    wrapper = getWrapper({ onClickFunction: mockFunction });

    expect(mockFunction).not.toHaveBeenCalledWith();
    wrapper.find(StyledTextLabel).simulate('click');
    expect(mockFunction).toHaveBeenCalledWith();
  });

  it('should execute onKeyPressFunction when StyledTextLabel onKeyPress event is fired', () => {
    mockFunction = jest.fn();
    wrapper = getWrapper({ onKeyPressFunction: mockFunction });

    expect(mockFunction).toHaveBeenCalledTimes(0);
    wrapper.find(StyledTextLabel).simulate('keypress', { charCode: 29 });
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});
