import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import SampleComponent from '../SampleComponent';

export default function MainPage(props) {
  return (
    <View style={styles.container}>
      <Icon name="ios-planet" size={60} color="#4F8EF7" />
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Changes you make will automatically reload.</Text>
      <Text>Shake your phone to open the developer menu.</Text>
      <SampleComponent />
      <Button title='go to page 2' onPress={() => Actions.page2()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
