import React from 'react';
import { css } from 'styled-components';

import theme from 'common/theme';

import StyledLabel from 'components/label/styles/label';
import StyledWrapper from 'components/image/styles/wrapper';

describe('StyledLabel', () => {
  let wrapper;

  describe('Text color', () => {
    it('should render StyledLabel with correct text color', () => {
      wrapper = shallow(<StyledLabel theme={theme} />);

      expect(wrapper).toHaveStyleRule('color', theme.colors.text);
    });
  });

  describe('Pointer events', () => {
    it('should render StyledLabel with correct pointer-events when isAnswerSubmitted is true', () => {
      wrapper = shallow(<StyledLabel theme={theme} isAnswerSubmitted />);

      expect(wrapper).toHaveStyleRule('pointer-events', 'none');
    });

    it('should render StyledLabel with correct pointer-events when isAnswerSubmitted is false', () => {
      wrapper = shallow(<StyledLabel theme={theme} isAnswerSubmitted={false} />);

      expect(wrapper).toHaveStyleRule('pointer-events', 'auto');
    });
  });

  describe('Background color', () => {
    it('should render StyledLabel with correct background color when isLabelActive is true', () => {
      wrapper = shallow(<StyledLabel theme={theme} isLabelActive />);

      expect(wrapper).toHaveStyleRule('background', theme.colors.activeLabelBackground);
    });

    it('should render StyledLabel with correct background color when isLabelActive is false', () => {
      wrapper = shallow(<StyledLabel theme={theme} isLabelActive={false} />);

      expect(wrapper).toHaveStyleRule('background', theme.colors.labelBackground);
    });
  });

  describe('Border color', () => {
    it('should render StyledLabel with correct border color when isLabelActive is true', () => {
      wrapper = shallow(<StyledLabel theme={theme} isLabelActive />);

      expect(wrapper).toHaveStyleRule('border', `2px solid ${theme.colors.activeLabelBorder}`);
    });

    it('should render StyledLabel with correct border color when isLabelActive is false', () => {
      wrapper = shallow(<StyledLabel theme={theme} isLabelActive={false} />);

      expect(wrapper).toHaveStyleRule('border', `2px solid ${theme.colors.labelBorder}`);
    });
  });

  describe('Hover styles', () => {
    const modifier = ':hover';

    it('should render StyledLabel with hover styles when isLabelActive is false', () => {
      wrapper = shallow(<StyledLabel theme={theme} isLabelActive={false} />);

      expect(wrapper).toHaveStyleRule('background', theme.colors.labelHover, {
        modifier,
      });
      expect(wrapper).toHaveStyleRule('cursor', 'pointer', {
        modifier,
      });
    });

    it('should render StyledLabel without hover styles when isLabelActive is true', () => {
      wrapper = shallow(<StyledLabel theme={theme} isLabelActive />);

      expect(wrapper).not.toHaveStyleRule('background', {
        modifier,
      });
      expect(wrapper).not.toHaveStyleRule('cursor', {
        modifier,
      });
    });
  });

  describe('Focus styles', () => {
    it('should render StyledLabel with focus styles when isAnswerSubmitted is true', () => {
      wrapper = shallow(<StyledLabel theme={theme} isAnswerSubmitted />);

      expect(wrapper).toHaveStyleRule('outline', 'none', {
        modifier: ':focus',
      });
    });

    it('should render StyledLabel without focus styles when isAnswerSubmitted is true', () => {
      wrapper = shallow(<StyledLabel theme={theme} isAnswerSubmitted />);

      expect(wrapper).toHaveStyleRule('outline', 'none', {
        modifier: ':focus',
      });
    });
  });

  describe('Height', () => {
    it('should render StyledLabel with correct height for text label', () => {
      wrapper = shallow(<StyledLabel theme={theme} />);

      expect(wrapper).toHaveStyleRule('height', '36px');
    });

    it('should render StyledLabel with correct height for image label', () => {
      wrapper = shallow(<StyledLabel theme={theme} isImageLabel />);

      expect(wrapper).toHaveStyleRule('height', '56px');
    });
  });

  describe('StyledWrapper styles', () => {
    const styledWrapperModifier = css`${StyledWrapper}`;

    it('should render StyledLabel with additional height for StyledWrapper', () => {
      wrapper = shallow(<StyledLabel theme={theme} isImageLabel />);

      expect(wrapper).toHaveStyleRule('height', '100%', {
        modifier: styledWrapperModifier,
      });
    });

    it('should render StyledLabel with additional width for StyledWrapper', () => {
      wrapper = shallow(<StyledLabel theme={theme} isImageLabel />);

      expect(wrapper).toHaveStyleRule('width', 'auto', {
        modifier: styledWrapperModifier,
      });
    });

    it('should not render StyledLabel with additional height for StyledWrapper', () => {
      wrapper = shallow(<StyledLabel theme={theme} isImageLabel={false} />);

      expect(wrapper).not.toHaveStyleRule('height', {
        modifier: styledWrapperModifier,
      });
    });

    it('should not render StyledLabel with additional width for StyledWrapper', () => {
      wrapper = shallow(<StyledLabel theme={theme} isImageLabel={false} />);

      expect(wrapper).not.toHaveStyleRule('width', {
        modifier: styledWrapperModifier,
      });
    });
  });
});
