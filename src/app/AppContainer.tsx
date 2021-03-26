import React, { Component } from 'react';
import { View } from 'react-native';
import MainBottomTabNavigator from '../navigation/bottom-tabs-bar/BottomTabbar';
import { getCharacters } from '../utils/utils';
import { styles } from './style';

export default class AppContainer extends Component {
  public componentDidMount(): void {
    getCharacters();
  }

  render(): JSX.Element {
    return (
      <View style={styles.container}>
        <MainBottomTabNavigator />
      </View>
    );
  }
}
