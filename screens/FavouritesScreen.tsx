import * as React from 'react';
import {ScrollView, StyleSheet, TouchableOpacity} from 'react-native';

import { View } from '../components/Themed';
import BrowseFlightsInfo from "../components/BrowseFlightsInfo";

export default function FavouritesScreen() {
  return (
      <ScrollView>
        <View style={styles.container}>
            <BrowseFlightsInfo isFavorite={true} />
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
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
