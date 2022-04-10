import { Dimensions, StyleSheet, View, ImageBackground, SafeAreaView, ScrollView } from 'react-native'
import React, { useState, useEffect, useMemo } from 'react'
import { useRoute, useNavigation, useTheme } from '@react-navigation/native';
import { useDeviceOrientation } from '@react-native-community/hooks';
import Icon from 'react-native-vector-icons/Ionicons';
import places, { placeType } from './../data/places';
import { H3, H4, P } from '../components/Text';
import { IconButton, PrimaryButton } from '../components/Buttons';
import RatingReviewCard from './../components/RatingReviewCard';
import ReviewItem from './../components/ReviewItem';
import Container from './../components/Container';

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
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Container>
                    {/* @ts-ignore */}
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

                    <View style={{ marginTop: 25, flexDirection: 'row' }}>
                        <RatingReviewCard type='rating' text='4.7 out of 5' />
                        <View style={{ width: 50 }} />
                        <RatingReviewCard type='review' text='102 reviews' />
                    </View>

                    <View style={{ marginTop: 25 }}>
                        <ReviewItem icon={<Icon name='shield-checkmark-outline' size={22} />} title='Verified Partner' details='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto explicabo voluptatibus neque odit, consectetur magnam soluta earum asperiores quidem numquam.' />
                        <ReviewItem icon={<Icon name='car-sport-outline' size={22} />} title='Veicle Partner' details='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto explicabo voluptatibus neque odit, consectetur magnam soluta earum asperiores quidem numquam.' />
                        <ReviewItem icon={<Icon name='person-outline' size={22} />} title='Jack' details='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto explicabo voluptatibus neque odit, consectetur magnam soluta earum asperiores quidem numquam.' />
                        <ReviewItem icon={<Icon name='person-outline' size={22} />} title='Joshua' details='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto explicabo voluptatibus neque odit, consectetur magnam soluta earum asperiores quidem numquam.' />
                        <ReviewItem icon={<Icon name='person-outline' size={22} />} title='Thomas' details='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto explicabo voluptatibus neque odit, consectetur magnam soluta earum asperiores quidem numquam.' />
                        <ReviewItem icon={<Icon name='person-outline' size={22} />} title='James' details='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto explicabo voluptatibus neque odit, consectetur magnam soluta earum asperiores quidem numquam.' />
                        <ReviewItem icon={<Icon name='person-outline' size={22} />} title='Daniel' details='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto explicabo voluptatibus neque odit, consectetur magnam soluta earum asperiores quidem numquam.' />
                        <ReviewItem icon={<Icon name='person-outline' size={22} />} title='Oliver' details='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto explicabo voluptatibus neque odit, consectetur magnam soluta earum asperiores quidem numquam.' />
                        <ReviewItem icon={<Icon name='person-outline' size={22} />} title='Benjamin' details='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto explicabo voluptatibus neque odit, consectetur magnam soluta earum asperiores quidem numquam.' />
                    </View>
                </Container>
            </ScrollView>
            <Container style={[styles.bottomShadow, { height: landscape ? 80 : 100 }]}>
                <P style={{ fontWeight: "bold", fontSize: 40 }}>${place.pricePerPerson}</P>
                <PrimaryButton title='Book Now' width={220} icon={<Icon name='arrow-forward-outline' size={22} style={{ marginLeft: 25 }} color={"white"} />} />
            </Container>
        </SafeAreaView>
    )
}

export default PlaceDetailScreen

const styles = StyleSheet.create({
    bottomShadow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
})