//Imports
import React from 'react'
import { AppRegistry } from 'react-native';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import configStore from './src/store/configStore';

import Router from './src/router';

const store = configStore();

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
)

AppRegistry.registerComponent('dialect', () => App);
