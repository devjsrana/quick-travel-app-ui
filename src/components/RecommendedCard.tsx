import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { H3, H4, P } from './Text'

type Props = {
    image: any,
    title: string,
    place: string,
    price: number
}

const RecommendedCard = (props: Props) => {
    return (
        <View style={styles.container}>
            <Image source={props.image} style={styles.image} />
            <View style={{ flexGrow: 1, paddingHorizontal: 15 }}>
                <H4>{props.title.length < 25 ? props.title : `${props.title.slice(0, 24)}...`}</H4>
                <P style={{ opacity: .5, marginTop: 5 }}>{props.place}</P>
            </View>
            <H3 style={{ marginRight: 10 }}>{`${props.price}$`}</H3>
        </View>
    )
}

export default RecommendedCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 5,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15
    },
    image: {
        width: 55,
        height: 55,
        borderRadius: 5
    }
})