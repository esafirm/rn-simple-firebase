"use strict";

import React from 'react'
import { Card, Title } from '@shoutem/ui'
import { Dimensions, TouchableHighlight } from 'react-native'

const window = Dimensions.get('window');

export default (props) => {
    console.log("props", props);

    return (
        <TouchableHighlight onPress={props.onPress}>
            <Card
                style={{
                    height: 48,
                    width: window.width,
                    padding: 16
                }}>
                <Title>{props.item}</Title>
            </Card>
        </TouchableHighlight>
    )
};