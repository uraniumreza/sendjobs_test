import { name as appName } from './app.json';

import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import App from './App';
import store from './src/store/index';

const AppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppWithStore);
