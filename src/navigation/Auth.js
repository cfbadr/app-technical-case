import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import LoginScreen from '../screens/auth/login';

export default function App() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    )
}