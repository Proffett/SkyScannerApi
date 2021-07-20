import 'react-native-gesture-handler';

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useColorScheme } from './hooks/useColorScheme';
import { useLoadedAssets } from './hooks/useLoadedAssets';
import Navigation from './navigation';
import {Text, View} from "react-native";
import {Provider} from "react-redux";
import store from "./redux/store";
import Loader from "./components/Loader";

export default function App() {
  const isLoadingComplete = useLoadedAssets();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return (<Loader/>);
  } else {
    return (
        <Provider store={store}>
                  <SafeAreaProvider>
                    <Navigation colorScheme={colorScheme} />
                  </SafeAreaProvider>
        </Provider>
    );
  };
}
