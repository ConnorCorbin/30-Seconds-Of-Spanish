/* istanbul ignore file */
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import App from 'components/app/App.js';
import Header from 'components/header/header.js';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <Header textColor="" imageUrl='https://via.placeholder.com/150' imageAltTag="This is an alt tag" title1="30 Seconds" title2="of Spanish" />
    <App />
  </Fragment>
, document.getElementById('root'));
