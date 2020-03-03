import React from 'react';

import TextInput from 'components/text-input/text-input';
import StyledTextInput from 'components/text-input/styles/text-area';

describe('TextInput', () => {
  let wrapper;
  let expected;
  let language;
  const spanishPlaceholderText = 'Type in Spanish';
  const englishPlaceholderText = 'Type in English';

  it('should render TextInput component', () => {
    wrapper = shallow(<TextInput />);

    expect(wrapper.isEmptyRender()).toEqual(false);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render TextInput component with correct default textarea attributes', () => {
    wrapper = shallow(<TextInput />);

    expected = {
      autoCorrect: 'off',
      spellCheck: 'false',
      autoCapitalize: 'none',
      dir: 'ltr',
      lang: 'es',
      placeholder: spanishPlaceholderText,
    };

    expect(wrapper.find(StyledTextInput).props()).toMatchObject(expected);
  });

  it('should render TextInput component with correct textarea attributes when `en` is passed for language', () => {
    language = 'en';
    wrapper = shallow(<TextInput language={language} />);

    expected = {
      lang: language,
      placeholder: englishPlaceholderText,
    };

    expect(wrapper.find(StyledTextInput).props()).toMatchObject(expected);
  });

  it('should render TextInput component with correct attributes when `es` is passed for language', () => {
    language = 'es';

    wrapper = shallow(<TextInput language={language} />);
    expected = {
      lang: language,
      placeholder: spanishPlaceholderText,
    };

    expect(wrapper.find(StyledTextInput).props()).toMatchObject(expected);
  });

  it('should render TextInput component with correct language textarea attribute when invalid language entered', () => {
    wrapper = shallow(<TextInput language="german" />);

    expect(wrapper.find(StyledTextInput).props().lang).toEqual('es');
  });
});
