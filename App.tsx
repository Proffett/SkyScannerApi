import 'react-native-gesture-handler';

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useColorScheme } from './hooks/useColorScheme';
import { useLoadedAssets } from './hooks/useLoadedAssets';
import Navigation from './navigation';
import {Text} from "react-native";
import {Provider} from "react-redux";
import store from "./redux/store";

export default function App() {
  const isLoadingComplete = useLoadedAssets();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
        <Provider store={store}>
          <SafeAreaProvider>
              <Text style={{position:"relative", textAlign: 'center', marginTop: 45}} >Flights</Text>
              <Navigation colorScheme={colorScheme} />
          </SafeAreaProvider>
        </Provider>
    );
  }
}
