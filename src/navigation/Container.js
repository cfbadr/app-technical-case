import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import AppContainer from './App';
import AuthContainer from './Auth';

const Stack = createStackNavigator();


function App(props) {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        {props.loggedIn ? <Stack.Screen name="App" component={AppContainer} /> : <Stack.Screen name="Auth" component={AuthContainer} />}
    </Stack.Navigator>
  );
}



const mapStateToProps = (state) => ({
    loggedIn: state.auth.loggedIn,
});
export default connect(mapStateToProps, null)(App);