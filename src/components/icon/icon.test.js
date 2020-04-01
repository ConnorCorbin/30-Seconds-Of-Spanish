import React from 'react';

import Icon from 'components/icon/icon';

jest.mock('common/icons', () => ({
  logo: () => (<svg>something</svg>),
}));

let wrapper;

it('should return correct react component which renders icon', () => {
  wrapper = shallow(<Icon name="logo" />);

  expect(wrapper.html()).toEqual('<svg>something</svg>');
});

it('should not render anything if no icon found', () => {
  wrapper = shallow(<Icon name="not-exist-icon" />);

  expect(wrapper.html()).toEqual(null);
});
