import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './src/store/configureStore';
import Router from './src/Router';

const { persistor, store } = configureStore()

const onBeforeLift = () => {
  // take some action before the gate lifts
}

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          onBeforeLift={onBeforeLift}
          persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    );
  }
}
