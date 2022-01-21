import React, { Component } from 'react';
import { StatusBar, SafeAreaView, StyleSheet, ScrollView, View, Text, ImageBackground, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import { Card } from 'react-native-shadow-cards';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';

class ManageAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FirstName: '',
            LastName: '',
        }
    }

    clearInput = () => {
        this._textInput1.setNativeProps({ text: '' });
        this._textInput2.setNativeProps({ text: '' });
    }

    AddAddress = () => {
        Alert.alert('updated')
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={{ jusifyContent: "center", alignItems: "center", }}>
                    <Text>list of address</Text>
                </View>
                <View style={styles.bottom}>
                    <Button
                        title="Add new address"
                        color="#f1b306"
                        onPress={() => { this.AddAddress(); }} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 8,
        width:'100%',
        paddingLeft:10,
        paddingRight:10
    }
})

export default ManageAddress;