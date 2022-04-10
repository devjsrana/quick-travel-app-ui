import { StyleSheet, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '@react-navigation/native';
import { P } from './Text';

type Props = {
    type: 'rating' | 'review',
    text: string
}

const RatingReviewCard = (props: Props) => {
    const { colors } = useTheme();
    return (
        <View style={{ flexDirection: 'row', alignItems: "center" }}>
            {/* @ts-ignore */}
            <Icon name={props.type === "rating" ? 'star' : 'chatbubble-ellipses'} color={colors.info} size={22} />
            <View style={{ marginLeft: 20 }}>
                <P style={{ textTransform: 'uppercase', opacity: 0.3, fontSize: 10 }}>{props.type === "rating" ? "Rating" : "Review"}</P>
                <P style={{ marginTop: 2, fontWeight: 'bold', fontSize: 14 }}>{props.text}</P>
            </View>
        </View>
    )
}

export default RatingReviewCard

const styles = StyleSheet.create({})