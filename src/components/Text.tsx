import React from 'react';
import { Text, StyleSheet, StyleProp, TextStyle } from 'react-native';
import { useTheme } from '@react-navigation/native';


type Props = {
    children?: React.ReactNode,
    style?: StyleProp<TextStyle>
}

export const P = (props: Props) => <Text style={[{ color: useTheme().colors.text }, styles.p, props.style]}>{props.children}</Text>;
export const H1 = (props: Props) => <Text style={[{ color: useTheme().colors.text }, styles.h1, props.style]}>{props.children}</Text>;
export const H3 = (props: Props) => <Text style={[{ color: useTheme().colors.text }, styles.h3, props.style]}>{props.children}</Text>;
export const H4 = (props: Props) => <Text style={[{ color: useTheme().colors.text }, styles.h4, props.style]}>{props.children}</Text>;


const styles = StyleSheet.create({
    p: {
        fontSize: 12
    },
    h1: {
        fontSize: 26,
        fontWeight: 'bold'
    },
    h3: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    h4: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})