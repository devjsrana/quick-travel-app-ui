import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native'
import React, { useMemo } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '@react-navigation/native';
import { useDeviceOrientation } from '@react-native-community/hooks';

type Props = {}

const SearchPlace = (props: Props) => {
    const { colors } = useTheme();
    const { landscape } = useDeviceOrientation();
    const { width } = useMemo(() => Dimensions.get("screen"), [landscape]);
    return (
        <View style={[styles.container, { width: landscape ? width / 2 + 100 : "auto" }]}>
            <Icon name='search' size={28} color={
                //@ts-ignore
                colors.tertiary} />
            <TextInput style={[styles.input, { color: colors.text }]} placeholder="Where you want to go?" />
        </View>
    )
}

export default SearchPlace

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderRadius: 999,
        overflow: "hidden",
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 25,
        alignSelf: "center"
    },
    input: {
        height: 45,
        width: "90%",
        paddingHorizontal: 10,
        textAlignVertical: 'center',
        fontSize: 18
    }
})