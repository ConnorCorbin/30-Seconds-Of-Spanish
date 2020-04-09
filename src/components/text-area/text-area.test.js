import React from 'react';

import TextArea from 'components/text-area/text-area';
import StyledTextArea from 'components/text-area/styles/text-area';

describe('TextArea component', () => {
  let wrapper;
  let mockFunction;

  it('should render component', () => {
    wrapper = shallow(<TextArea />);

    expect(wrapper.isEmptyRender()).toEqual(false);
    expect(wrapper).toMatchSnapshot();
  });

  describe('Placeholder prop', () => {
    it('should render component with correct placeholder prop value when spanish is passed infor language prop', () => {
      wrapper = shallow(<TextArea language="spanish" />);

      expect(wrapper.find(StyledTextArea).props().placeholder).toEqual('Type in Spanish');
    });

    it('should render component with correct placeholder prop value when english is passed in for language prop', () => {
      wrapper = shallow(<TextArea language="english" />);

      expect(wrapper.find(StyledTextArea).props().placeholder).toEqual('Type in English');
    });

    it('should render component with correct placeholder prop value when invalid value passed in for language prop', () => {
      wrapper = shallow(<TextArea language="german" />);

      expect(wrapper.find(StyledTextArea).props().placeholder).toEqual('Type in Spanish');
    });
  });

  describe('Lang prop', () => {
    it('should render component with correct lang prop value when spanish is passed in for language prop', () => {
      wrapper = shallow(<TextArea language="spanish" />);

      expect(wrapper.find(StyledTextArea).props().lang).toEqual('es');
    });

    it('should render component with correct lang prop value when english is passed in for language prop', () => {
      wrapper = shallow(<TextArea language="english" />);

      expect(wrapper.find(StyledTextArea).props().lang).toEqual('en');
    });

    it('should render component with correct lang prop value when invalid value passed in for language prop', () => {
      wrapper = shallow(<TextArea language="german" />);

      expect(wrapper.find(StyledTextArea).props().lang).toEqual('es');
    });
  });

  describe('Default props', () => {
    it('should render component with correct lang prop value when spanish is passed in for language prop', () => {
      wrapper = shallow(<TextArea />);

      expect(wrapper.find(StyledTextArea).props()).toMatchObject({
        autoCorrect: 'off',
        spellCheck: 'false',
        autoCapitalize: 'none',
        dir: 'ltr',
        unselectable: 'on',
      });
    });
  });

  describe('Disabled prop', () => {
    it('should render component with correct default prop when true is passed in', () => {
      wrapper = shallow(<TextArea isTextAreaDisabled />);

      expect(wrapper.find(StyledTextArea).props().disabled).toEqual(true);
    });

    it('should render component with correct default prop when false is passed in', () => {
      wrapper = shallow(<TextArea isTextAreaDisabled={false} />);

      expect(wrapper.find(StyledTextArea).props().disabled).toEqual(false);
    });
  });

  it('should execute onChangeFunction when StyledTextArea onClick event is fired', () => {
    mockFunction = jest.fn();
    wrapper = shallow(<TextArea onChangeFunction={mockFunction} />);

    expect(mockFunction).not.toHaveBeenCalledWith();
    wrapper.find(StyledTextArea).simulate('change', {
      target: { value: 'Typed in text for areatext' },
      preventDefault: jest.fn(),
    });
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });

  it('should execute onKeyPressFunction when StyledTextArea onKeyPress event is fired', () => {
    mockFunction = jest.fn();
    wrapper = shallow(<TextArea onKeyPressFunction={mockFunction} />);

    expect(mockFunction).toHaveBeenCalledTimes(0);
    wrapper.find(StyledTextArea).simulate('keypress', { charCode: 29 });
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});
