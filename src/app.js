import React  from 'react';
import { View, Text } from 'react-native';

import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';

import Router from './router';


class App extends React.Component {

  render() {
    return (
      <View>
      
      </View>
    );
  }
}

export default App;
