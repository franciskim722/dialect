import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import Home from './components/Home';

const RouterComponent = () => {
  return (
    <Router>
          <Scene key="appContainer">
            <Scene key="Home" hideNavBar={true} initial={true} component={ Home } title="dialect" />
          </Scene>
    </Router>
  );
};

export default RouterComponent;
