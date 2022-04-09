import { ImageBackground, StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react';
import { H3, P } from './Text';

type Props = {
    image: any,
    discount: number,
    title: string,
    place: string
}

const SliderPlaceItem = (props: Props) => {
    return (
        <TouchableOpacity>
            <ImageBackground source={props.image} style={styles.imageBg} borderRadius={15} resizeMode={"cover"} >
                <P style={styles.tag}>{`${props.discount}% OFF`}</P>
            </ImageBackground>
            <View style={{ marginTop: 15 }}>
                <H3>{props.title}</H3>
                <P style={{ opacity: .5 }}>{props.place}</P>
            </View>
        </TouchableOpacity>
    )
}

export default SliderPlaceItem

const styles = StyleSheet.create({
    imageBg: {
        width: '100%',
        height: 200,
        position: "relative"
    },
    tag: {
        backgroundColor: "white",
        alignSelf: "flex-start",
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 999,
        fontWeight: 'bold',
        marginTop: 15,
        marginLeft: 15
    }
})