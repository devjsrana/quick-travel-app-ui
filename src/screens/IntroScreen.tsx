import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useDeviceOrientation } from '@react-native-community/hooks';
import React, { useMemo } from 'react'
import AutoHeightImage from 'react-native-auto-height-image';
import { PrimaryButton } from './../components/Buttons';
import colors from '../constants/colors';

import { travelBanner } from './../constants/images';

type Props = {}

const IntroScreen = (props: Props) => {
    const { landscape } = useDeviceOrientation();

    const { width, height } = useMemo(() => Dimensions.get("screen"), [landscape]);

    return (
        <View style={{ flexDirection: landscape ? "row" : 'column' }} >
            <AutoHeightImage width={landscape ? width / 2 : width} source={travelBanner} style={landscape ? { height } : {}} />
            <View style={{ flexGrow: 1 }}>
                <Text style={[styles.title, { fontSize: landscape ? 24 : 36 }]}>Discover the world around you.</Text>
                <Text style={styles.description}>QuickTravel will help and guide you on your advanture {"\n"} like never before.</Text>

                <View style={{ justifyContent: 'center', alignItems: "center", marginTop: 56 }}>
                    <PrimaryButton width={landscape ? width / 2 - 150 : width - 150} title="Start Now" />
                </View>
            </View>
        </View>
    )
}

export default IntroScreen

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        marginTop: 44,
        color: colors.secondary,
        paddingHorizontal: 15
    },
    description: {
        padding: 15,
        fontSize: 14,
        textAlign: 'center'
    }
})