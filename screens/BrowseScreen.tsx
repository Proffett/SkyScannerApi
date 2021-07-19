import * as React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import BrowseScreenInfo from '../components/BrowseScreenInfo';
import { View } from '../components/Themed';

export default function BrowseScreen() {
  return (
      <ScrollView>
        <View style={styles.container}>
          <BrowseScreenInfo />
        </View>
      </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
