import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import SampleComponent from './SampleComponent';

export default class MainPage extends Component {
  openPage2() {
    //name cames from Scene key name
    //actions can be called from redux reducers too, in order to modify the
    //store, finally go back to a new page (e.g. when a server request is
    //necessary before going to the next page)
    Actions.page2();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <SampleComponent />
        <Button title='go to page 2' onPress={this.openPage2} />
      </View>
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
