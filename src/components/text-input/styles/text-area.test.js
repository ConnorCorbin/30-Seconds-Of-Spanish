import React from 'react';

import { MEDIA_DEFAULTS } from 'common/services/dimensions-service';

import StyledTextArea from 'components/text-input/styles/text-area';

describe('StyledTextArea', () => {
  let wrapper;
  const theme = {
    colors: {
      slate: '#323c41',
      white: '#ffffff',
      darkGray: '#e5e5e5',
    },
  };

  beforeEach(() => {
    wrapper = shallow(<StyledTextArea theme={theme} />);
  });

  it('should render StyledTextArea with correct background color', () => {
    expect(wrapper).toHaveStyleRule('background', theme.colors.white);
  });

  it('should render StyledTextArea with correct border', () => {
    expect(wrapper).toHaveStyleRule('border', `2px solid ${theme.colors.darkGray}`);
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
