import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import {
  incrementCounter
} from '../actions';

class SampleComponent extends Component {
  onTestingClicked() {
    const { incrementCounter } = this.props;
    incrementCounter();
  }

  render() {
    const { counter, persistedCounter } = this.props;

    return (
      <View style={styles.container}>
        <Text>This is a custom component with a counter</Text>
        <Text>current value: {counter}</Text>
        <Text>persistable value: {persistedCounter}</Text>
        <Button title='increment value' onPress={this.onTestingClicked.bind(this)}/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: "#999"
  }
});

const mapStateToProps = ({ sample, samplePersistable }) => {
  return {
    counter: sample.counter,
    persistedCounter: samplePersistable.counter
  };
};

export default connect(mapStateToProps, {
  incrementCounter
})(SampleComponent);
