"use strict";

import React from 'react'
import { View, Dimensions, Text } from 'react-native'
import { NavigationBar, Title } from "@shoutem/ui"

const window = Dimensions.get('window');

const Container = (props) => {
    return (
        <View
            {...props}
            style={{
                backgroundColor: '#1a70d5',
                width: window.width,
                height: 70
            }}>
        </View>
    )
};

export default (props) => {
    return (
        <Container>
            <NavigationBar
                styleName="clear"
                centerComponent={<Title style={{color: "#FFF"}}>{props.title}</Title>}
            />
        </Container>
    )
};