import React from 'react';
import { Text, StyleSheet, StyleProp, TextStyle } from 'react-native';
import { useTheme } from '@react-navigation/native';


type Props = {
    children?: React.ReactNode,
    style?: StyleProp<TextStyle>
}

export const P = (props: Props) => <Text style={[{ color: useTheme().colors.text }, styles.p, props.style]}>{props.children}</Text>;
export const H4 = (props: Props) => <Text style={[{ color: useTheme().colors.text }, styles.h4, props.style]}>{props.children}</Text>;


const styles = StyleSheet.create({
    p: {
        fontSize: 12
    },
    h4: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})