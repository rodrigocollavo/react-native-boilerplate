import React, { Component } from 'react';
import { Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content } from 'native-base';
import SampleNativeBase from './SampleNativeBase';

export default class MainPage extends Component {
  goBack() {
    //remove page from stack
    Actions.pop();
  }

  render() {
    return (
      <Container>
        <Content>
          <SampleNativeBase />
          <Button title='go to the main page' onPress={this.goBack} />
        </Content>
      </Container>
    );
  }
}
