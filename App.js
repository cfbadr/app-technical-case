import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import store from "./src/services/store";
import Container from './src/navigation/Container';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Container />
      </NavigationContainer>
    </Provider>
  );
}
