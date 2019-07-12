import React, { Component } from 'react'
import { Text, View, Button, TextInput } from 'react-native'

export default class MenuBar extends Component {
    onMenuPress() {

    }

    render() {
        return (
            <View style={{flex:1, backgroundColor:'#582A72'}}>
                <View style={{marginTop:50, flexDirection:'row'}}>
                    <View style={{width:90}}>
                        <Button 
                            title="Menu" 
                            onPress={this.onMenuPress}
                            />
                    </View>
                    
                    <TextInput
                        style={{height: 40, marginLeft:25, flex:1}}
                        placeholder="Search" />
                </View>
            </View>
        )
    }
}
