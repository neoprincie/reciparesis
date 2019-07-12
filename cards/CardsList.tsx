import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import Card from './Card';

export interface CardsListProps {
  cards: Array<Card>;
}

export default class CardsList extends Component<CardsListProps, {}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <View style={{flex:7, backgroundColor:"#C7AFD3"}}>
                <ScrollView>
                    <Card name="My first card" />
                    <Card name="My second card" />
                    <Card name="My third card" />
                    <Card name="My fourth card" />
                    <Card name="My first card" />
                    <Card name="My second card" />
                    <Card name="My third card" />
                    <Card name="My fourth card" />
                    <Card name="My first card" />
                    <Card name="My second card" />
                    <Card name="My third card" />
                    <Card name="My fourth card" />
                    <Card name="My first card" />
                    <Card name="My second card" />
                    <Card name="My third card" />
                    <Card name="My fourth card" />
                    <Card name="My first card" />
                    <Card name="My second card" />
                    <Card name="My third card" />
                    <Card name="My fourth card" />
                    <Card name="My first card" />
                    <Card name="My second card" />
                    <Card name="My third card" />
                    <Card name="My fourth card" />
                    <Card name="My first card" />
                    <Card name="My second card" />
                    <Card name="My third card" />
                    <Card name="My fourth card" />
                    <Card name="My first card" />
                    <Card name="My second card" />
                    <Card name="My third card" />
                    <Card name="My fourth card" />
                    <Card name="My first card" />
                    <Card name="My second card" />
                    <Card name="My third card" />
                    <Card name="My fourth card" />
                </ScrollView>
            </View>
        )
    }
}
