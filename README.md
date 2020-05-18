<div align="center">
  <img width=300 src="./src/common/icons/svg/logo.svg"/>
</div>

------

# 30 Seconds of Spanish (Web Extension)

------

## [Description](#description)

Learn **Spanish** every time you open a **New Tab**! All you need is **30 seconds** of less, to read, understand and complete a range of randomly generated interactive learning material.

This Chrome Extension is built with **React** and **StyledComponents** API.

------

## [Instructions to install locally on Chrome Web Browser](#install-locally)

1. Clone repository

```
git clone https://github.com/ConnorCorbin/30-Seconds-Of-Spanish.git
```

2. Install dependencies

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

5. Enable developer mode by clicking the toggle switch next to **developer mode**

6. Load unpacked extension by selecting the **build** folder in the cloned repositoy

7. :tada: Success! Web extension should successfully be installed locally :tada:

------

## [Steps to create and release a new component](#start)

1. Create a folder for the new component inside the `/components/` folder. For example, for a new component called `banana-banner`, a folder called `banana-banner` will be created. Inside this newly created folder, a main JavaScript file containing the component logic will be created called `banana-banner.js`, additionally, a `/styles/` folder will be created to contain styled-components.

The current folder structure will look like the following:

  ```javascript
  src/
  -components/
  --banana-banner/
  ---styles/
  ----banana.js
  ----banana-wrapper.js
  ---banana-banner.js
  ```

2. After the component logic and styled-components have been created, a `/config/` folder should be created containing a single file called `index.js`. This will export an object containing mock implementation(s) of the component, with accurate prop values. This is required for component visual screenshot testing. Below is an example if only one component configuration is required.

  ```javascript
  import BananaBanner from 'components/banana-banner/banana-banner';

  export default {
    bananaBanner: <BananaBanner bananaTitle="Bananas are the best!" BananaText="Especially the yellow ones!" bananaUrl="banana-URL"/>,
  };
  ```

  If two or more component configurations are required, the config file will looking like the following:

  ```javascript
  import BananaBanner from 'components/banana-banner/banana-banner';

  export default {
    'bananaBanner-1': <BananaBanner bananaTitle="Bananas are the best!" BananaText="Especially the yellow ones!" bananaUrl="banana-URL"/>,
    'bananaBanner-2': <BananaBanner bananaTitle="Bananas are NOT the best!" BananaText="Especially the green ones!" bananaUrl="bad-banana-URL"/>,
  };
  ```

  Additionally, the config file will need to be added into the `component-configs` file which is located in the `src/` folder. An example of how this would look is below:

  ```javascript
  import appleBannerConfigs from 'components/apple-banner/config';
  import bananaBannerConfigs from 'components/banana-banner/config';

  export default {
    ...appleBannerConfigs,
    ...bananaBannerConfigs,
  };
  ```

3. Besides from the main JavaScript file containing the implementation code, there exists a couple of other files which must be created. These are:
  - Readme file with component documentation
  - Test file(s) containing the unit tests

  The finished folder structure of the component will look like the following:

  ```javascript
  src/
  -components/
  --banana-banner/
  ---config/
  ----index.js
  ---styles/
  ----banana.js
  ----banana-wrapper.js
  ----banana-wrapper.test.js
  ---banana-banner.js
  ---banana-banner.test.js
  ---BananaBanner.md
  ```

  Note the naming convention of the files. Files that contain the implementation code (js, unit tests and styles) use lower case `kebab-case` naming convention and the `md` file uses the upper case `CamelCase` naming convention.

4. Next, component visual screenshot testing must be ran. For this, scenarios must be added in the `/backstop_data/scenarios/` folder/file. With the `banana-banner` component created above and two configurations, this would look like the following:

  ```javascript
  module.exports = [{
    label: 'AppleBanner',
    url: 'http://localhost:8080/?component=AppleBanner',
    selectors: ['#root'],
    misMatchThreshold: 0,
  }, {
    label: 'BananaBanner-1',
    url: 'http://localhost:8080/?component=BananaBanner-1',
    selectors: ['#root'],
    misMatchThreshold: 0,
  }, {
    label: 'BananaBanner-2',
    url: 'http://localhost:8080/?component=BananaBanner-2',
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

5. Next, the test and linting scripts must be ran.

  ```javascript
  npm run test && npm run lint
  ```

  You can now find generated build in the `/build` folder.

6. Finally, it is time to build the react web extension. This is done by running the following command:

  ```javascript
  npm run build
  ```

  You can now find generated build in the `/build` folder.

------

## [Attributions](#attributions)

- Icons [www.flaticon.com](https://www.flaticon.com)
