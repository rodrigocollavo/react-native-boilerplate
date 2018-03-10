import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class MainPage extends Component {
  goBack() {
    //remove page from stack
    Actions.pop();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Page 2</Text>
        <Button title='go to the main page' onPress={this.goBack} />
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
