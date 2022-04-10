import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { H4, P } from './Text';

type Props = {
    icon: React.ReactNode,
    title: string,
    details: string
}

const ReviewItem = (props: Props) => {
    return (
        <View style={{ marginBottom: 15 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                {props.icon}
                <H4 style={{ marginLeft: 10 }}>{props.title}</H4>
            </View>
            <P style={{ marginLeft: 32, marginTop: 5, opacity: 0.7 }}>{props.details}</P>
        </View>
    )
}

export default ReviewItem

const styles = StyleSheet.create({})