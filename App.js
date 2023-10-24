import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import store from "./src/services/store";
import Container from './src/navigation/Container';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Container />
      </NavigationContainer>
    </Provider>
  );
}
