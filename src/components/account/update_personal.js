import React, { Component } from 'react';
import { StatusBar, SafeAreaView, StyleSheet, ScrollView, View, Text, ImageBackground, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import { Card } from 'react-native-shadow-cards';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';

class UpdatePersonal extends Component {
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

    UpdateDetails = () => {
        Alert.alert('updated')
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={{ jusifyContent: "center", alignItems: "center", }}>
                    <View
                        style={{
                            flexDirection: "row",
                            paddingLeft: 20,
                            marginTop: 10,
                            alignItems: "center"
                        }}
                    >
                           <View style={{ flex: 0.08 }}>
                    <Icon
                        name='user'
                        size={24}
                        color='grey'
                    />
                </View>
                <View style={{ flex: 0.45 }}>
                    <Text style={{color:'grey'}}>First Name</Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'grey', borderBottomWidth: 1, marginLeft: 10 }}
                        placeholder='First Name'
                        ref={component => this._textInput1 = component}
                        onChangeText={(FirstName) => this.setState({ FirstName })}
                    />
                </View>
                <View style={{ flex: 0.45 }}>
                <Text style={{color:'grey'}}>Last Name</Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'grey', borderBottomWidth: 1, marginLeft: 10 }}
                        placeholder='Last Name'
                        ref={component => this._textInput2 = component}
                        onChangeText={(LastName) => this.setState({ LastName })}
                    />
                </View>
                </View>

                <View
                style={{
                    flexDirection: "row",
                    paddingLeft: 20,
                    marginTop:10,
                    alignItems: "center"
                }}
            >
                <View style={{ flex: 0.08 }}>
                    <Icon
                        name='envelope'
                        size={24}
                        color='grey'
                    />
                </View>
                <View style={{ flex: 0.92 }}>
                <Text style={{color:'grey'}}>Email</Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'grey', borderBottomWidth: 1, margin: 10, }}
                        placeholder='Email'
                        value='profile@gmail.com'
                        editable={false}
                    />
                </View>
            </View>

            <View
                style={{
                    flexDirection: "row",
                    paddingLeft: 20,
                    marginTop:10,
                    alignItems: "center"
                }}
            >
                <View style={{ flex: 0.08 }}>
                    <Icon
                        name='phone'
                        size={24}
                        color='grey'
                    />
                </View>
                <View style={{ flex: 0.92 }}>
                <Text style={{color:'grey'}}>Mobile Number</Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'grey', borderBottomWidth: 1, margin: 10, }}
                        placeholder='Mobile Number'
                        value='938438586'
                        editable={false}
                    />
                </View>
                    </View>

                </View>
                <View style={styles.bottom}>
                    <Button
                        title="Update Details"
                        color="#f1b306"
                        onPress={() => { this.UpdateDetails(); }} />
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

export default UpdatePersonal;