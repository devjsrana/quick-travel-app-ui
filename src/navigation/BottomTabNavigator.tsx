import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//screens
import HomeScreen from './../screens/HomeScreen';
import SearchScreen from './../screens/SearchScreen';
import FavoriteScreen from './../screens/FavoriteScreen';
import OfferScreen from './../screens/OfferScreen';


const Tab = createBottomTabNavigator();

type Props = {}

const BottomTabNavigator = (props: Props) => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Search' component={SearchScreen} />
            <Tab.Screen name='Favorite' component={FavoriteScreen} />
            <Tab.Screen name='Offer' component={OfferScreen} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator

const styles = StyleSheet.create({})