import React from 'react';

import StyledLabel from 'components/multiple-choice-question/styles/label';

describe('StyledLabel', () => {
  let wrapper;
  const modifier = ':hover';
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

      expect(wrapper).not.toHaveStyleRule('pointer-events');
    });
  });


  describe('Background color', () => {
    it('should render StyledLabel with correct background color when isActive is true', () => {
      wrapper = shallow(<StyledLabel theme={theme} isActive />);

      expect(wrapper).toHaveStyleRule('background', theme.colors.lightBlue);
    });

    it('should render StyledLabel with correct background color when isActive is false', () => {
      wrapper = shallow(<StyledLabel theme={theme} isActive={false} />);

      expect(wrapper).toHaveStyleRule('background', theme.colors.white);
    });
  });

  describe('Hover styles', () => {
    it('should render StyledLabel with hover styles when isActive is false', () => {
      wrapper = shallow(<StyledLabel theme={theme} isActive={false} />);

      expect(wrapper).toHaveStyleRule('background', theme.colors.lightGray, {
        modifier,
      });
      expect(wrapper).toHaveStyleRule('cursor', 'pointer', {
        modifier,
      });
    });

    it('should render StyledLabel without hover styles when isActive is true', () => {
      wrapper = shallow(<StyledLabel theme={theme} isActive />);

      expect(wrapper).not.toHaveStyleRule('background', theme.colors.lightGray, {
        modifier,
      });
      expect(wrapper).not.toHaveStyleRule('cursor', 'pointer', {
        modifier,
      });
    });
  });

  describe('Border color', () => {
    it('should render StyledLabel with correct border color when isActive is true', () => {
      wrapper = shallow(<StyledLabel theme={theme} isActive />);

      expect(wrapper).toHaveStyleRule('border', `2px solid ${theme.colors.darkBlue}`);
    });

    it('should render StyledLabel with correct border color when isActive is false', () => {
      wrapper = shallow(<StyledLabel theme={theme} isActive={false} />);

      expect(wrapper).toHaveStyleRule('border', `2px solid ${theme.colors.darkGray}`);
    });
  });
});
