import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { H1 } from './Text';

type Props = {
    title?: string,
    renderHeader?: React.ReactNode,
    children: React.ReactNode
}

const Section = (props: Props) => {
    return (
        <View style={[styles.container]}>
            {
                props.renderHeader ?
                    props.renderHeader :
                    <H1>{props.title || "New Section"}</H1>
            }
            <View style={{ height: 15 }} />
            {props.children}
        </View>
    )
}

export default Section

const styles = StyleSheet.create({
    container: {
        marginTop: 25
    }
})