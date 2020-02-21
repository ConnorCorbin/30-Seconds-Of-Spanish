/* istanbul ignore file */
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import logo from 'common/icons/logo.svg';

import Header from 'components/header/header';
import MessageBox from 'components/message-box/message-box';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    margin: 0;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <Header textColor="" imageUrl={logo} imageAltTag="This is an alt tag" title1="30 Seconds" title2="of Spanish" />
    <MessageBox
      correctTitle1="You are correct!"
      correctText1="Well done keep going!"
      incorrectTitle1="Correct Solution:"
      incorrectText1="En el tren."
      incorrectTitle2="Meaning:"
      incorrectText2="In the train."
      isAnswerCorrect={false}
    />
  </Fragment>,
  document.getElementById('root'),
);
