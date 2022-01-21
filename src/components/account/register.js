import React, { Component } from 'react';
import { StatusBar, SafeAreaView, StyleSheet, ScrollView, View, Text, ImageBackground, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import { Card } from 'react-native-shadow-cards';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';

class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            FirstName: '',
            LastName: '',
            Email: '',
            PhoneNumber: '',
            Password: '',
            ConfirmPassword: '',
            Type: 'customer',
            OneTimePassword: ''
        }
    }

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    clearInput = () => {
        this._textInput1.setNativeProps({ text: '' });
        this._textInput2.setNativeProps({ text: '' });
        this._textInput3.setNativeProps({ text: '' });
        this._textInput4.setNativeProps({ text: '' });
        this._textInput5.setNativeProps({ text: '' });
        this._textInput6.setNativeProps({ text: '' });
        this._textInput7.setNativeProps({ text: '' });
    }

    UserRegister = () => {
        this.toggleModal();
    }

    GoToLoginPage = () => {
        this.props.navigation.navigate('Login');
    }

    VerifyUser = () => {
        Alert.alert(this.state.OneTimePassword)
        this.toggleModal()
    }

    render() {
        return (

            <View style={styles.container}>
                <StatusBar translucent backgroundColor="transparent" />
                <ImageBackground
                    source={require('../../assets/register.jpg')}
                    style={styles.image}>
                    <View style={{ jusifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#e6e6e6', paddingBottom: 20 }}>
                            FreshMeat
                        </Text>
                        <Card>
                            <View style={{ paddingLeft: 10, }}>
                                <Text style={{ fontSize: 20, color: 'grey',paddingTop:10 }}>Sign Up</Text>
                            </View>

                            <View
                                style={{
                                    flexDirection: "row",
                                    paddingLeft: 20,
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
                                    <TextInput
                                        style={{ height: 40, borderColor: 'grey', borderBottomWidth: 1, marginLeft: 10 }}
                                        placeholder='First Name'
                                        ref={component => this._textInput1 = component}
                                        onChangeText={(FirstName) => this.setState({ FirstName })}
                                    />
                                </View>
                                <View style={{ flex: 0.45 }}>
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
                                    <TextInput
                                        style={{ height: 40, borderColor: 'grey', borderBottomWidth: 1, margin: 10, }}
                                        placeholder='Email'
                                        ref={component => this._textInput3 = component}
                                        onChangeText={(Email) => this.setState({ Email })}
                                    />
                                </View>
                            </View>

                            <View
                                style={{
                                    flexDirection: "row",
                                    paddingLeft: 20,
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
                                    <TextInput
                                        style={{ height: 40, borderColor: 'grey', borderBottomWidth: 1, margin: 10, }}
                                        placeholder='Phone Number'
                                        maxLength={10}
                                        ref={component => this._textInput4 = component}
                                        onChangeText={(PhoneNumber) => this.setState({ PhoneNumber })}
                                    />
                                </View>
                            </View>

                            <View
                                style={{
                                    flexDirection: "row",
                                    paddingLeft: 20,
                                    alignItems: "center"
                                }}
                            >

                                <View style={{ flex: 0.08 }}>
                                    <Icon
                                        name='lock'
                                        size={24}
                                        color='grey'
                                    />
                                </View>
                                <View style={{ flex: 0.92 }}>
                                    <TextInput
                                        style={{ height: 40, borderColor: 'grey', borderBottomWidth: 1, margin: 10, }}
                                        placeholder='Password'
                                        ref={component => this._textInput5 = component}
                                        secureTextEntry={true}
                                        onChangeText={(Password) => this.setState({ Password })}
                                    />
                                </View>
                            </View>

                            <View
                                style={{
                                    flexDirection: "row",
                                    paddingLeft: 20,
                                    paddingBottom: 10,
                                    alignItems: "center"
                                }}
                            >
                                <View style={{ flex: 0.08 }}>
                                    <Icon
                                        name='lock'
                                        size={24}
                                        color='grey'
                                    />
                                </View>
                                <View style={{ flex: 0.92 }}>
                                    <TextInput
                                        style={{ height: 40, borderColor: 'grey', borderBottomWidth: 1, margin: 10, }}
                                        placeholder='Re-TypePassword'
                                        ref={component => this._textInput6 = component}
                                        secureTextEntry={true}
                                        onChangeText={(ConfirmPassword) => this.setState({ ConfirmPassword })}
                                    />
                                </View>
                            </View>


                            <View
                                style={{
                                    flexDirection: "row",
                                    paddingLeft: 20,
                                    paddingBottom: 20,
                                    alignItems: "center"
                                }}
                            >
                                <View style={{ flex: 0.95 }}>
                                    <Button
                                        title="Sign Up"
                                        color="#f1b306"
                                        onPress={() => { this.UserRegister(); }}
                                    />
                                </View>
                            </View>

                            <Text
                                style={{ fontSize: 15, color: 'grey', textAlign: 'right', paddingRight: 20, paddingBottom: 10 }}
                                onPress={() => { this.GoToLoginPage(); }}
                            >
                                Already a member?</Text>

                        </Card>
                        <View style={{ flex: 1 }}>
                            <Modal isVisible={this.state.isModalVisible}>
                                <View style={{ flex: 0.2, }}>
                                    <Text style={{ fontSize: 15, color: 'white' }}>Enter OTP</Text>
                                    <TextInput
                                        style={{ height: 40, color:'white', borderColor: 'white', borderBottomWidth: 1, marginLeft: 10, marginBottom: 10 }}
                                        ref={component => this._textInput7 = component}
                                        onChangeText={(OneTimePassword) => this.setState({ OneTimePassword })}
                                        maxLength={4}
                                    />
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            paddingLeft: 20,
                                            paddingBottom: 20,
                                            alignItems: "center"
                                        }}
                                    >
                                        <View style={{ flex: 0.95 }}>
                                            <Button title="Enter" color="#f1b306" onPress={() => { this.VerifyUser(); }} />
                                        </View>
                                    </View>

                                </View>
                            </Modal>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    }
});


export default RegisterPage;