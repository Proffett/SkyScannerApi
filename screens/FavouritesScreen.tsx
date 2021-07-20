import * as React from 'react';
import {ScrollView, StyleSheet, TouchableOpacity} from 'react-native';

import { View } from '../components/Themed';
import FavoritesScreenInfo from "../components/FavoritesScreenInfo";

export default function FavouritesScreen() {
  return (
      <ScrollView>
        <View style={styles.container}>
            <FavoritesScreenInfo path="/screens/FavouritesScreen.tsx" />
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
