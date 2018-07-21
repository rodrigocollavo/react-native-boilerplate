import React, { Component } from 'react';
import { Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content } from 'native-base';
import SampleNativeBase from '../SampleNativeBase';

export default function MainPage(props) {
  return (
    <Container>
      <Content>
        <SampleNativeBase />
        <Button title='go to the main page' onPress={() => Actions.pop()} />
      </Content>
    </Container>
  );
}
