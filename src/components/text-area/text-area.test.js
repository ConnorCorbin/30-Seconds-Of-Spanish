import React from 'react';

import TextArea from 'components/text-area/text-area';
import StyledTextArea from 'components/text-area/styles/text-area';

describe('TextArea component', () => {
  let wrapper;
  let expected;
  const spanishPlaceholderText = 'Type in Spanish';
  const englishPlaceholderText = 'Type in English';

  it('should render TextArea component', () => {
    wrapper = shallow(<TextArea />);

    expect(wrapper.isEmptyRender()).toEqual(false);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render TextArea component with correct default textarea attributes', () => {
    wrapper = shallow(<TextArea />);

    expected = {
      autoCorrect: 'off',
      spellCheck: 'false',
      autoCapitalize: 'none',
      dir: 'ltr',
      lang: 'es',
      placeholder: spanishPlaceholderText,
    };

    expect(wrapper.find(StyledTextArea).props()).toMatchObject(expected);
  });

  it('should render TextArea component with correct textarea attributes when `english` is passed for language', () => {
    wrapper = shallow(<TextArea language="english" />);

    expected = {
      lang: 'en',
      placeholder: englishPlaceholderText,
    };

    expect(wrapper.find(StyledTextArea).props()).toMatchObject(expected);
  });

  it('should render TextArea component with correct attributes when `spanish` is passed for language', () => {
    wrapper = shallow(<TextArea language="spanish" />);

    expected = {
      lang: 'es',
      placeholder: spanishPlaceholderText,
    };

    expect(wrapper.find(StyledTextArea).props()).toMatchObject(expected);
  });

  it('should render TextArea component with correct language textarea attribute when invalid language entered', () => {
    wrapper = shallow(<TextArea language="german" />);

    expect(wrapper.find(StyledTextArea).props().lang).toEqual('es');
  });
});
