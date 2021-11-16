import { SafeAreaView, StatusBar, Text, View } from 'react-native'

import { Calulator } from './src/screens/Calculator';
import React from 'react'
import { styles } from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar
        backgroundColor='black'
        barStyle='light-content'
      />
      <Calulator />
    </SafeAreaView>
  )
}

export default App;
