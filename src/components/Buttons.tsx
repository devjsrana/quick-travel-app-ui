import React from 'react'
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from "react-native";

import colors from './../constants/colors';

type Props = {
    width?: string | number,
    title: string,
    onPress?: ((event: GestureResponderEvent) => void)
}

export const PrimaryButton = (props: Props) => {
    return <TouchableOpacity style={[styles.btnContainer, { width: props.width || undefined }]} onPress={props.onPress}>
        <Text style={styles.btnText}>{props.title}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    btnContainer: {
        backgroundColor: colors.primary,
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 999
    },
    btnText: {
        color: "white",
        fontSize: 18,
        textAlign: 'center'
    }
});