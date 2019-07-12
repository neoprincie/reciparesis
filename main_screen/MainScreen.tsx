import React, { Component } from 'react'
import { Text, View } from 'react-native'
import MenuBar from '../menu_bar/MenuBar';
import CardsList from '../cards/CardsList';
import Card from '../cards/Card';

export default class MainScreen extends Component {
    render() {
        let cardz = new Array<Card>();

        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <MenuBar />
                <CardsList cards={cardz} />
            </View>
        )
    }
}
