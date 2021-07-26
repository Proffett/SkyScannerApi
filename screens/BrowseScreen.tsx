import * as React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';

import BrowseFlightsInfo from '../components/BrowseFlightsInfo';
import { View } from '../components/Themed';

export default function BrowseScreen() {
  return (
          <ScrollView>
              <View style={styles.container}>
                  <BrowseFlightsInfo isFavorite={false} />
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
});
