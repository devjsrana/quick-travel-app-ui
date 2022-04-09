import React from 'react'
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent, StyleProp, ViewStyle } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '@react-navigation/native';

type Props = {
    width?: string | number,
    title: string,
    onPress?: ((event: GestureResponderEvent) => void)
}

export const PrimaryButton = (props: Props) => {
    const { colors } = useTheme();
    return <TouchableOpacity style={[styles.btnContainer, { width: props.width || undefined, backgroundColor: colors.primary }]} onPress={props.onPress}>
        <Text style={styles.btnText}>{props.title}</Text>
    </TouchableOpacity>
}

type IconBtnProps = {
    icon: string,
    style?: StyleProp<ViewStyle>,
    rounded?: boolean,
    onPress?: ((event: GestureResponderEvent) => void)
}
export const IconButton = (props: IconBtnProps) => {
    const { colors } = useTheme();
    return (
        <TouchableOpacity style={[styles.iconBtn, { backgroundColor: colors.primary, borderRadius: props.rounded ? 10 : 0 }, props.style]} onPress={props.onPress} >
            <Icon name={props.icon} color={"white"} size={34} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 999
    },
    btnText: {
        color: "white",
        fontSize: 18,
        textAlign: 'center'
    },
    iconBtn: {
        width: 45,
        height: 45,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center"
    }
});