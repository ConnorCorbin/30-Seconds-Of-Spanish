import React from 'react';
import { css } from 'styled-components';

import StyledLabel from 'components/label/styles/label';
import StyledWrapper from 'components/image/styles/wrapper';

describe('StyledLabel', () => {
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
    it('should render StyledLabel with correct background color when isLabelActive is true', () => {
      wrapper = shallow(<StyledLabel theme={theme} isLabelActive />);

      expect(wrapper).toHaveStyleRule('background', theme.colors.lightBlue);
    });

    it('should render StyledLabel with correct background color when isLabelActive is false', () => {
      wrapper = shallow(<StyledLabel theme={theme} isLabelActive={false} />);

      expect(wrapper).toHaveStyleRule('background', theme.colors.white);
    });
  });

  describe('Border color', () => {
    it('should render StyledLabel with correct border color when isLabelActive is true', () => {
      wrapper = shallow(<StyledLabel theme={theme} isLabelActive />);

      expect(wrapper).toHaveStyleRule('border', `2px solid ${theme.colors.darkBlue}`);
    });

    it('should render StyledLabel with correct border color when isLabelActive is false', () => {
      wrapper = shallow(<StyledLabel theme={theme} isLabelActive={false} />);

      expect(wrapper).toHaveStyleRule('border', `2px solid ${theme.colors.darkGray}`);
    });
  });

  describe('Text color', () => {
    it('should render StyledLabel with correct text color', () => {
      wrapper = shallow(<StyledLabel theme={theme} />);

      expect(wrapper).toHaveStyleRule('color', theme.colors.slate);
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

  describe('Hover styles', () => {
    const modifier = ':hover';

    it('should render StyledLabel with hover styles when isLabelActive is false', () => {
      wrapper = shallow(<StyledLabel theme={theme} isLabelActive={false} />);

      expect(wrapper).toHaveStyleRule('background', theme.colors.lightGray, {
        modifier,
      });
      expect(wrapper).toHaveStyleRule('cursor', 'pointer', {
        modifier,
      });
    });

    it('should render StyledLabel without hover styles when isLabelActive is true', () => {
      wrapper = shallow(<StyledLabel theme={theme} isLabelActive />);

      expect(wrapper).not.toHaveStyleRule('background', theme.colors.lightGray, {
        modifier,
      });
      expect(wrapper).not.toHaveStyleRule('cursor', 'pointer', {
        modifier,
      });
    });
  });

  describe('Focus styles', () => {
    it('should render StyledLabel without focus styles when isAnswerSubmitted is true', () => {
      wrapper = shallow(<StyledLabel theme={theme} isAnswerSubmitted />);

      expect(wrapper).toHaveStyleRule('outline', 'none', {
        modifier: ':focus',
      });
    });
  });

  describe('Additional image styles', () => {
    const styledWrapperModifier = css`${StyledWrapper}`;

    it('should render StyledLabel with additional height for StyledWrapper', () => {
      wrapper = shallow(<StyledLabel theme={theme} isImageLabel />);

      expect(wrapper).toHaveStyleRule('height', '100%', {
        modifier: styledWrapperModifier,
      });
    });

    it('should render StyledLabel without additional height CSS for StyledImage', () => {
      wrapper = shallow(<StyledLabel theme={theme} isImageLabel />);

      expect(wrapper).toHaveStyleRule('width', 'auto', {
        modifier: styledWrapperModifier,
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
});
