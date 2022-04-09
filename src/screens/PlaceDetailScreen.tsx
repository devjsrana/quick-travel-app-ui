import { Dimensions, StyleSheet, View, ImageBackground, SafeAreaView, ScrollView } from 'react-native'
import React, { useState, useEffect, useMemo } from 'react'
import { useRoute, useNavigation, useTheme } from '@react-navigation/native';
import places, { placeType } from './../data/places';
import { H3, H4, P } from '../components/Text';
import { IconButton } from '../components/Buttons';
import { useDeviceOrientation } from '@react-native-community/hooks';

type Props = {}

const PlaceDetailScreen = (props: Props) => {
    const { params } = useRoute();
    const navigation = useNavigation();
    const [place, setPlace] = useState<placeType>();
    const { landscape } = useDeviceOrientation();
    const { colors } = useTheme();

    const { width, height } = useMemo(() => Dimensions.get("screen"), [landscape]);


    useEffect(() => {
        //@ts-ignore
        const placeId = params?.placeId;

        const selectedPlace = places.find((p) => p.id === placeId);
        setPlace(selectedPlace);
    }, [params])


    if (!place) {
        return (
            <View>
                <P>Not found</P>
            </View>
        )
    }
    return (
        <SafeAreaView>
            <ScrollView style={{ marginHorizontal: 15 }}>
                <ImageBackground source={place.image} borderRadius={15} style={{ height: height / 2, marginTop: 15, position: "relative" }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 15 }}>
                        <IconButton icon={"chevron-back-outline"} rounded onPress={() => navigation.goBack()} />
                        <IconButton icon={"heart-outline"} rounded />
                    </View>


                    <View style={{ position: "absolute", bottom: 15, left: 15, padding: 15, borderRadius: 15, backgroundColor: colors.primary }}>
                        <H3 style={{ color: "white" }}>{place.title}</H3>
                        <View style={{ marginTop: 5, flexDirection: "row", alignItems: "center" }}>
                            <H4 style={{ color: "white" }}>{place.pricePerPerson}$</H4>
                            <P style={{ color: "white", opacity: 0.5 }}> / person</P>
                        </View>
                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    )
}

export default PlaceDetailScreen

const styles = StyleSheet.create({})