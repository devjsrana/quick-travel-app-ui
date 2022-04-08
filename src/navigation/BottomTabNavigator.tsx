import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

//screens
import HomeScreen from './../screens/HomeScreen';
import SearchScreen from './../screens/SearchScreen';
import FavoriteScreen from './../screens/FavoriteScreen';
import OfferScreen from './../screens/OfferScreen';


const Tab = createBottomTabNavigator();

type Props = {}

const BottomTabNavigator = (props: Props) => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false
            }}
        >
            <Tab.Screen name='Home' component={HomeScreen} options={{
                tabBarIcon: (props) => <Icon name={props.focused ? "home" : "home-outline"} size={22} />
            }} />
            <Tab.Screen name='Search' component={SearchScreen} options={{
                tabBarIcon: (props) => <Icon name={props.focused ? "search" : "search-outline"} size={22} />
            }} />
            <Tab.Screen name='Favorite' component={FavoriteScreen} options={{
                tabBarIcon: (props) => <Icon name={props.focused ? "heart" : "heart-outline"} size={22} />
            }} />
            <Tab.Screen name='Offer' component={OfferScreen} options={{
                tabBarIcon: (props) => <Icon name={props.focused ? "pricetag" : "pricetag-outline"} size={22} />
            }} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator

const styles = StyleSheet.create({})