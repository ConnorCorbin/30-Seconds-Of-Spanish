import React from 'react';

import theme from 'common/theme';
import { MEDIA_DEFAULTS } from 'common/services/dimensions-service';

import StyledTextArea from 'components/text-area/styles/text-area';

describe('StyledTextArea', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<StyledTextArea theme={theme} />);
  });

  it('should render StyledTextArea with correct background color', () => {
    expect(wrapper).toHaveStyleRule('background', theme.colors.textAreaBackground);
  });

  it('should render StyledTextArea with correct border', () => {
    expect(wrapper).toHaveStyleRule('border', `2px solid ${theme.colors.textAreaBorder}`);
  });

  it('should render StyledTextArea with correct height', () => {
    expect(wrapper).toHaveStyleRule('height', '90px');
  });

  it('should render StyledTextArea with correct height for LARGE breakpoint', () => {
    expect(wrapper).toHaveStyleRule('height', '160px', {
      media: `(min-width:${MEDIA_DEFAULTS.LARGE}em)`,
    });
  });
});
