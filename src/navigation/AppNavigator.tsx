import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


//screens
import IntroScreen from '../screens/IntroScreen';

import BottomTabNavigator from './BottomTabNavigator';


const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Intro" component={IntroScreen} options={{
                headerShown: false
            }} />
            <Stack.Screen name="Main" component={BottomTabNavigator} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    )
}

export default AppNavigator;