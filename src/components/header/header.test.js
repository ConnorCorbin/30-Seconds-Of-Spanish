import React from 'react';

import Header from 'components/header/header';

import StyledTextBlock from 'components/header/styles/text-block';

let wrapper;
const getWrapper = ({
  title1 = 'Title 1',
  title2 = 'Title 2',
  textColor,
  imageUrl = 'Image URL',
  imageAltTag = 'Image alt tag',
} = {}) => shallow(
  <Header
    title1={title1}
    title2={title2}
    textColor={textColor}
    imageUrl={imageUrl}
    imageAltTag={imageAltTag}
  />,
);

it('should render Header component', () => {
  wrapper = getWrapper();

  expect(wrapper.isEmptyRender()).toEqual(false);
  expect(wrapper).toMatchSnapshot();
});

it('should not render Header component', () => {
  wrapper = getWrapper({ title1: '' });

  expect(wrapper.isEmptyRender()).toEqual(true);
});

it('should render Header component with correct title1 text', () => {
  wrapper = getWrapper();

  expect(wrapper.find(StyledTextBlock).children().first().text()).toEqual('Title 1');
});

it('should render Header component with correct title2 text', () => {
  wrapper = getWrapper();

  expect(wrapper.find(StyledTextBlock).children().last().text()).toEqual('Title 2');
});

it('should render Header with correct textColor prop value', () => {
  wrapper = getWrapper({ textColor: 'red' });

  expect(wrapper.find(StyledTextBlock).children().first().props().textColor).toEqual('red');
  expect(wrapper.find(StyledTextBlock).children().last().props().textColor).toEqual('red');
});
