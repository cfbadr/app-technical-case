import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEarthEurope, faGear } from '@fortawesome/free-solid-svg-icons';
import colors from '../constants/colors';
import HomeScreen from '../screens/app/home';
import SettingsScreen from '../screens/app/settings';
import Overview from '../screens/app/overview';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const getBottomBarColor = (focused) => {
    return focused ? colors.primary :colors.discret 
}
const Stack = createNativeStackNavigator();

function StackScreen() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Countries" component={HomeScreen} />
        <Stack.Screen name="Overview" component={Overview} />
    </Stack.Navigator>
  );
}


export default function App() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarLabelStyle: {
                padding: 5
            },
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: colors.discret
        }}>
            <Tab.Screen
                name="Home"
                component={StackScreen}
                options={{
                    tabBarIcon: ({ focused }) => <FontAwesomeIcon icon={faEarthEurope} color={getBottomBarColor(focused)}/>
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarIcon: ({ focused }) => <FontAwesomeIcon icon={faGear} color={getBottomBarColor(focused)}/>
                }}
            />
        </Tab.Navigator>
    )
}