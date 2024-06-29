import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TryCodeScreen from "./scr/screen/TryCodeScreen";
import HomeScreen from "./scr/screen/HomeScreen";
import MainNavigator from "./scr/navigator/MainNavigator";

const App = () => {
  return(
    <SafeAreaProvider>
      <MainNavigator/>
    </SafeAreaProvider>
  )
}

export default App;