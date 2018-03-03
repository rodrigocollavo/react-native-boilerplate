import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import SampleComponent from './src/components/SampleComponent';
import configureStore from './src/store/configureStore';

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
          <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
            <SampleComponent />
          </View>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
