import React from 'react';

import { MEDIA_DEFAULTS } from 'common/services/dimensions-service';

import StyledButton from 'components/result-banner/styles/button';

describe('StyledButton', () => {
  let wrapper;
  const modifier = ':hover';
  const theme = {
    colors: {
      slate: '#323c41',
    },
  };

  it('Should render StyledButton with correct textColor', () => {
    wrapper = shallow(<StyledButton theme={theme} />);

    expect(wrapper).toHaveStyleRule('color', theme.colors.slate);
  });

  it('Should render StyledButton with correct additional active styles', () => {
    wrapper = shallow(<StyledButton theme={theme} isActive />);

    expect(wrapper).toHaveStyleRule('background', '#b8f28b');
    expect(wrapper).toHaveStyleRule('border', '2px solid #78c800');
    expect(wrapper).toHaveStyleRule('background', '#84dc00', {
      modifier,
    });
    expect(wrapper).toHaveStyleRule('cursor', 'pointer', {
      modifier,
    });
  });

  it('Should render StyledButton with correct additional disabled styles', () => {
    wrapper = shallow(<StyledButton theme={theme} isActive={false} />);

    expect(wrapper).toHaveStyleRule('background', '#e5e5e5');
    expect(wrapper).toHaveStyleRule('border', `2px solid ${theme.colors.slate}`);
    expect(wrapper).toHaveStyleRule('pointer-events', 'none');
  });

  it('Should render StyledButton with correct width at LARGE breakpoint', () => {
    wrapper = shallow(<StyledButton theme={theme} isActive />);

    expect(wrapper).toHaveStyleRule('max-width', '800px', {
      media: `(min-width:${MEDIA_DEFAULTS.LARGE}em)`,
    });
  });
});
