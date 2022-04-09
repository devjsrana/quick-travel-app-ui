import { Image, StyleSheet, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import { useDeviceOrientation } from '@react-native-community/hooks';
import React, { useEffect, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';
import Container from './../components/Container';
import { P, H4 } from './../components/Text';
import { userAvatar } from './../constants/images';
import SearchPlace from './../components/SearchPlace';
import Section from './../components/Section';
import SliderPlaceItem from './../components/SliderPlaceItem';
import RecommendedCard from '../components/RecommendedCard';
import places, { placeType } from './../data/places';
type Props = {}

const HomeScreen = (props: Props) => {
    const navigation = useNavigation();
    const { landscape } = useDeviceOrientation();

    const { width } = useMemo(() => Dimensions.get("screen"), [landscape]);

    useEffect(() => {
        navigation.setOptions({
            headerTitle: () => <View>
                <P style={{ textTransform: 'uppercase', fontWeight: '500', opacity: 0.4 }}>Your Location</P>
                <H4>358 Cantebury Drive, New York</H4>
            </View>,
            headerRight: () => <TouchableOpacity style={{ marginRight: 15 }}>
                <Image source={userAvatar} style={{ width: 35, height: 35, borderRadius: 25 }} />
            </TouchableOpacity>
        })
    }, [])

    const goToPlaceDetails = (placeId: number) => {
        //@ts-ignore
        navigation.navigate("PlaceDetails", { placeId });
    }

    function _renderItem({ item, index }: { item: placeType, index: number }) {
        return (
            <SliderPlaceItem image={item.image} title={item.title} place={item.place} discount={item.discount} onPress={() => goToPlaceDetails(item.id)} />
        );
    }

    return (
        <ScrollView
            style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
        >
            <Container style={{ marginTop: 25 }}>
                <SearchPlace />
                <Section title='Popular Nearby'>
                    <Carousel
                        data={places}
                        renderItem={_renderItem}
                        sliderWidth={width - 30}
                        itemWidth={landscape ? width / 2.5 : width / 2 + width / 4}
                        activeSlideAlignment={"start"}
                        autoplay={true}
                        autoplayDelay={1000}
                        loop={true}
                    />
                </Section>

                <Section title='Recommended'>
                    {
                        places.map((item) => <RecommendedCard key={`rec_item-${item.id}`} image={item.image} title={item.title} place={item.place} price={item.price} onPress={() => goToPlaceDetails(item.id)} />)
                    }
                </Section>
            </Container>
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})