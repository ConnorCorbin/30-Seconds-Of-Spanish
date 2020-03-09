import React from 'react';

import { MEDIA_DEFAULTS } from 'common/services/dimensions-service';

import StyledTextLabel from 'components/text-label/styles/text-label';

describe('StyledTextLabel', () => {
  let wrapper;
  const theme = {
    colors: {
      white: '#ffffff',
      slate: '#323c41',
      lightBlue: '#ddf4ff',
      darkBlue: '#1cb0f6',
      lightGray: '#f7f7f7',
      darkGray: '#e5e5e5',
    },
  };

  describe('Background color', () => {
    it('should render StyledTextLabel with correct background color when isLabelActive is true', () => {
      wrapper = shallow(<StyledTextLabel theme={theme} isLabelActive />);

      expect(wrapper).toHaveStyleRule('background', theme.colors.lightBlue);
    });

    it('should render StyledTextLabel with correct background color when isLabelActive is false', () => {
      wrapper = shallow(<StyledTextLabel theme={theme} isLabelActive={false} />);

      expect(wrapper).toHaveStyleRule('background', theme.colors.white);
    });
  });

  describe('Border color', () => {
    it('should render StyledTextLabel with correct border color when isLabelActive is true', () => {
      wrapper = shallow(<StyledTextLabel theme={theme} isLabelActive />);

      expect(wrapper).toHaveStyleRule('border', `2px solid ${theme.colors.darkBlue}`);
    });

    it('should render StyledTextLabel with correct border color when isLabelActive is false', () => {
      wrapper = shallow(<StyledTextLabel theme={theme} isLabelActive={false} />);

      expect(wrapper).toHaveStyleRule('border', `2px solid ${theme.colors.darkGray}`);
    });
  });

  describe('Text color', () => {
    it('should render StyledTextLabel with correct text color', () => {
      wrapper = shallow(<StyledTextLabel theme={theme} />);

      expect(wrapper).toHaveStyleRule('color', theme.colors.slate);
    });
  });

  describe('Pointer events', () => {
    it('should render StyledTextLabel with correct pointer-events when isAnswerSubmitted is true', () => {
      wrapper = shallow(<StyledTextLabel theme={theme} isAnswerSubmitted />);

      expect(wrapper).toHaveStyleRule('pointer-events', 'none');
    });

    it('should render StyledTextLabel with correct pointer-events when isAnswerSubmitted is false', () => {
      wrapper = shallow(<StyledTextLabel theme={theme} isAnswerSubmitted={false} />);

      expect(wrapper).toHaveStyleRule('pointer-events', 'auto');
    });
  });

  describe('Hover styles', () => {
    const modifier = ':hover';

    it('should render StyledTextLabel with hover styles when isLabelActive is false', () => {
      wrapper = shallow(<StyledTextLabel theme={theme} isLabelActive={false} />);

      expect(wrapper).toHaveStyleRule('background', theme.colors.lightGray, {
        modifier,
      });
      expect(wrapper).toHaveStyleRule('cursor', 'pointer', {
        modifier,
      });
    });

    it('should render StyledTextLabel without hover styles when isLabelActive is true', () => {
      wrapper = shallow(<StyledTextLabel theme={theme} isLabelActive />);

      expect(wrapper).not.toHaveStyleRule('background', theme.colors.lightGray, {
        modifier,
      });
      expect(wrapper).not.toHaveStyleRule('cursor', 'pointer', {
        modifier,
      });
    });
  });

  describe('Focus styles', () => {
    it('should render StyledTextLabel without focus styles when isAnswerSubmitted is true', () => {
      wrapper = shallow(<StyledTextLabel theme={theme} isAnswerSubmitted />);

      expect(wrapper).toHaveStyleRule('outline', 'none', {
        modifier: ':focus',
      });
    });
  });

  describe('Height', () => {
    it('should render StyledTextLabel with correct height', () => {
      wrapper = shallow(<StyledTextLabel theme={theme} />);

      expect(wrapper).toHaveStyleRule('height', '36px');
    });

    it('should render StyledTextLabel with correct height for LARGE breakpoint', () => {
      wrapper = shallow(<StyledTextLabel theme={theme} />);

      expect(wrapper).toHaveStyleRule('height', '40px', {
        media: `(min-width:${MEDIA_DEFAULTS.LARGE}em)`,
      });
    });
  });
});
