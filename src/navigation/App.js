import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDashboard } from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();
import HomeScreen from '../screens/app/home';

export default function App() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarLabelStyle: {
                padding: 5
            }
        }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: () => <FontAwesomeIcon icon={faDashboard} color="blue" />
                }}
            />
        </Tab.Navigator>
    )
}