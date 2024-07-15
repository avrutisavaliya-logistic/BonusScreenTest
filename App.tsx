/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar, View} from 'react-native';

import BonusScreen from './src/container/BonusScreen/BonusScreen';
import {style} from './AppStyle';
import {Colors} from './src/utils/theme';

function App(): React.JSX.Element {
  return (
    <View style={style.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.transparent}
        translucent={true}
      />
      <BonusScreen />
    </View>
  );
}

export default App;
