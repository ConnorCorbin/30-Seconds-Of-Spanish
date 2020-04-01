/* istanbul ignore file */
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import generateRandomLearningMaterial from 'common/services/generate-random-learning-material';

import Header from 'components/header/header';
import TestComponent from 'test-component/test-component';

const urlParams = new URLSearchParams(window.location.search);
const componentName = urlParams.get('component');

const GlobalStyle = createGlobalStyle`
  body, html {
    background: #fafafa;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    height: 100%;
    margin: 0;

    #root {
      display: flex;
      flex-direction: column;
      height: inherit;
    }
  }
`;

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <TestComponent componentName={componentName} />
    <Header iconName="logo" />
    {generateRandomLearningMaterial()}
  </Fragment>,
  document.getElementById('root'),
);
