import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

type Props = {
    children?: React.ReactNode,
    style?: StyleProp<ViewStyle>
}

const Container = (props: Props) => <View style={[{ paddingHorizontal: 15 }, props.style]}>{props.children}</View>;

export default Container;