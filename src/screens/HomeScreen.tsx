import { Image, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Container from './../components/Container';
import { P, H4 } from './../components/Text';
import { userAvatar } from './../constants/images';
import SearchPlace from './../components/SearchPlace';
type Props = {}

const HomeScreen = (props: Props) => {
    const navigation = useNavigation();

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

    return (
        <Container style={{ marginTop: 25 }}>
            <SearchPlace />
        </Container>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})