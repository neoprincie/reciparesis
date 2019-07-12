import React, { Component } from 'react'
import { Text, View } from 'react-native'

export interface CardProps {
    name: string;
}

export default class Card extends Component<CardProps, {}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <View style={{height: 50, backgroundColor:'#FAF3FC', marginTop:5, marginBottom:5}}>
                <Text> {this.props.name} </Text>
            </View>
        )
    }
}
