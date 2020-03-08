<div align="center">
  <img width=300 src="./src/common/icons/logo.png"/>
</div>

------

# 30 Seconds of Spanish (Web Extension)

------

## Description

Learn **Spanish** every time you open a **New Tab**! All you need is **30 seconds** of less, to read, understand and complete a range of randomly generated interactive learning material.

This Chrome Extension is built with **React** and **StyledComponents** API.

------

## [Instructions to install locally on Chrome Web Browser](#instructions)


1. Clone repository

```
git clone https://github.com/ConnorCorbin/30-Seconds-Of-Spanish.git
```

2. install dependencies

```
npm install
```

3. Build package

```
npm run build
```

4. Open extension management page in Chrome web browser

```
chrome://extensions
```

5. Enable developer mode by clicking the toggle switch next to **developer mode**.

6. Load unpacked extension by selecting the **build** folder in the project folder

7. SUCCESS!

------

## [Steps to create new components and release them](#start)

1. Create a folder for the new component inside the `/components/` folder. For example, for a new component called `banana-banner`, we need to create a folder called `banana-banner`, with `kebab-case` naming convention. Inside the `/components/` folder we need to add a `banana-banner.js` file and a `styles` folder with styled-components.

  ```javascript
  src/
  -components/
  --banana-banner/
  ---styles/
  ----banana.js
  ----banana-wrapper.js
  ---banana-banner.js
  ```

2. Next, a config folder should created with a `index.js` file in. This will export an object containing a mock implementation of the component, with accurate prop values. This is required for component visual screenshot testing. Below is an example if only one component config is required. 

  ```javascript
  import BananaBanner from 'components/banana-banner/banana-banner';

  export default {
    bananaBanner: <BananaBanner bananaTitle="Bananas are the best!" BananaText="Especially the yellow ones!" bananaUrl="banana-URL"/>,
  };
  ```

  If two component configs are required, the config file will look like the following:

  ```javascript
  import BananaBanner from 'components/banana-banner/banana-banner';

  export default {
    'bananaBanner-1': <BananaBanner bananaTitle="Bananas are the best!" BananaText="Especially the yellow ones!" bananaUrl="banana-URL"/>,
    'bananaBanner-2': <BananaBanner bananaTitle="Bananas are NOT the best!" BananaText="Especially the green ones!" bananaUrl="bad-banana-URL"/>,
  };
  ```

  Additionally, the config file will need to be added into the `component-configs` folder which is located relative to the `src` folder. An example how this is done is below.

  ```javascript
  import appleBannerConfigs from 'components/apple-banner/config';
  import bananaBannerConfigs from 'components/banana-banner/config';

  export default {
    ...appleBannerConfigs,
    ...bananaBannerConfigs,
  };
  ```

4. Besides from implementation code, there is also a few other files that need to be created:
  - Readme file with component documentation
  - Test file containing unit tests

  The finished folder structure of the completed component will look like the following:

  ```javascript
  src/
  -components/
  --banana-banner/
  ---config/
  ----index.js
  ---styles/
  ----banana.js
  ----banana-wrapper.js
  ---banana-banner.js
  ---banana-banner.test.js
  ---BananaBanner.md
  ```

  Note the naming convention of the files. Files that contain implementation code (js, unit tests, styles) use lower case `kebab-case` naming convention and the `md` files use the `UpperCaseCamelCase` naming convention.

7. Next, visual screenshot testing must be ran. For this, scenarios must be added to in the `/backstop_data/scenarios/` folder/ file. with the `banana-banner` component created above, with two configs, this would look like the following:

  ```javascript
  module.exports = [{
    label: 'AppleBanner',
    url: 'http://localhost:3000/?component=AppleBanner',
    selectors: ['#root'],
    misMatchThreshold: 0,
  }, {
    label: 'BananaBanner-1',
    url: 'http://localhost:3000/?component=BananaBanner-1',
    selectors: ['#root'],
    misMatchThreshold: 0,
  }, {
    label: 'BananaBanner-2',
    url: 'http://localhost:3000/?component=BananaBanner-2',
    selectors: ['#root'],
    misMatchThreshold: 0,
  }]
  ```

  After adding a new scenario or scenarios, you need to run the visual tests by running the following command:

  ```javascript
  npm run visual
  ```

  This command will start the visual screenshot tests for different screen resolutions and create references for the new component. If the component on the screenshot looks as expected, you then need to save the references to the repository. This is done by the following command:

  ```javascript
  npm run visual:approve
  ```

5. When the component is finished, it is time to build the react web extension. This done by running the following script.

  ```javascript
  npm run build
  ```

  Now you can find generated build in the `/build` folder.
