import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
//sample pages
import MainPage from './components/pages/MainPage';
import Page2 from './components/pages/Page2';

export default class RouterComponent extends Component {
  render() {
    return (
      <Router>
        <Scene key="main">
          <Scene
            key="mainPage"
            component={MainPage} title="Main Page"
          />
          <Scene
            key="page2"
            component={Page2} title="Page 2"
          />
        </Scene>
      </Router>
    );
  }
}
