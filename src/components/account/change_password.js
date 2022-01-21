import React, { Component } from 'react';
import { StatusBar, SafeAreaView, StyleSheet, ScrollView, View, Text, ImageBackground, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import { Card } from 'react-native-shadow-cards';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';

class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            OldPassword: '',
            NewPassword: '',
            ConfirmPassword: '',
        }
    }

    clearInput = () => {
        this._textInput1.setNativeProps({ text: '' });
        this._textInput2.setNativeProps({ text: '' });
        this._textInput3.setNativeProps({ text: '' });
    }

    UpdatePassword = () => {
        Alert.alert('updated')
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={{ jusifyContent: "center", alignItems: "center", }}>
                    <View
                        style={{
                            flexDirection: "row",
                            paddingLeft: 10,
                            marginTop: 10,
                            alignItems: "center"
                        }}
                    >
                <View style={{ flex: 1 }}>
                <Text style={{color:'grey'}}>Old password</Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'grey', borderBottomWidth: 1, marginLeft: 10 }}
                        ref={component => this._textInput1 = component}
                        onChangeText={(OldPassword) => this.setState({ OldPassword })}
                    />
                </View>
                </View>

                <View
                style={{
                    flexDirection: "row",
                    paddingLeft: 10,
                    marginTop:10,
                    alignItems: "center"
                }}
            >
                <View style={{ flex: 1 }}>
                <Text style={{color:'grey'}}>New password</Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'grey', borderBottomWidth: 1, margin: 10, }}
                        ref={component => this._textInput2 = component}
                        onChangeText={(NewPassword) => this.setState({ NewPassword })}
                    />
                </View>
            </View>

            <View
                style={{
                    flexDirection: "row",
                    paddingLeft: 10,
                    marginTop:10,
                    alignItems: "center"
                }}
            >
                <View style={{ flex: 1 }}>
                <Text style={{color:'grey'}}>Confirm password</Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'grey', borderBottomWidth: 1, margin: 10, }}
                        ref={component => this._textInput3 = component}
                        onChangeText={(ConfirmPassword) => this.setState({ ConfirmPassword })}
                    />
                </View>
            </View>

                </View>
                <View style={styles.bottom}>
                    <Button
                        title="Update Password"
                        color="#f1b306"
                        onPress={() => { this.UpdatePassword(); }} />
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

export default ChangePassword;