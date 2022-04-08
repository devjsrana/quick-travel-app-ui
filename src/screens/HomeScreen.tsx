import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Container from './../components/Container';
type Props = {}

const HomeScreen = (props: Props) => {
    return (
        <View>
            <Container>
                <Text>HomeScreen</Text>
            </Container>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})