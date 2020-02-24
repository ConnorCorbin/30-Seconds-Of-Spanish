/* istanbul ignore file */
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import extentionLogo from 'common/icons/30-seconds-of-spanish.png';

import ImageBanner from 'components/image-banner/image-banner';
import MultipleChoiceQuestion from 'components/multiple-choice-question/multiple-choice-question';

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
    <ImageBanner
      imageUrl={extentionLogo}
      imageAltTag="30 Seconds of Spanish logo"
    />
    <MultipleChoiceQuestion
      titleText="Mark the correct meaning"
      questionText="One, Two, Three!"
      possibleAnswers={[
        '¡Uno, dos, tres!',
        '¡Un, queso, 3',
        '¡1, sal y 3!',
      ]}
      correctAnswer="¡Uno, dos, tres!"
      buttonText="Check Result"
      correctResultTitle="Correct Result!"
      correctResultText="Well Done."
      incorrectResultTitle="Correct Result:"
      incorrectResultText=""
    />
  </Fragment>,
  document.getElementById('root'),
);
