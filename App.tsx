import 'react-native-gesture-handler';

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useColorScheme } from './hooks/useColorScheme';
import { useLoadedAssets } from './hooks/useLoadedAssets';
import Navigation from './navigation';
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
                  <SafeAreaProvider style={{paddingTop: "5%"}}>
                      <Navigation colorScheme={colorScheme} />
                  </SafeAreaProvider>
        </Provider>
    );
  };
}
