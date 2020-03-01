/* istanbul ignore file */
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import extentionLogo from 'common/constants/icons/30-seconds-of-spanish.png';
import generateRandomLearningMaterial from 'common/services/generate-random-learning-material';

import ImageBanner from 'components/image-banner/image-banner';
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
    <ImageBanner
      imageUrl={extentionLogo}
      imageAltTag="30 Seconds of Spanish logo"
    />
    {generateRandomLearningMaterial()}
  </Fragment>,
  document.getElementById('root'),
);
