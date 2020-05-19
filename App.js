
import React, { Component } from 'react';
import { StyleSheet, Text, View, BackHandler } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
//import axios from 'axios';
//import axiosMiddleware from 'redux-axios-middleware';

import reducer from './src/reducers';
import Navi from './Navigation';

const store = createStore(reducer, {}, applyMiddleware(ReduxThunk, logger));

//const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Navi />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  }
});
