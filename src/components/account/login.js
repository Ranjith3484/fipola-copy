import React, { Component } from 'react';
import { StatusBar, SafeAreaView, StyleSheet, ScrollView, View, Text, ImageBackground, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import { Card } from 'react-native-shadow-cards';
import Icon from 'react-native-vector-icons/FontAwesome';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PhoneNumber: '',
            Password: '',
        }
    }

  

    clearInput = () => {
        this._textInput1.setNativeProps({ text: '' });
        this._textInput2.setNativeProps({ text: '' });
    }
    
    UserLogin = () => {
        this.props.navigation.navigate('CustomerDashboard')
    }

    GoToRegisterPage = () => {
        this.props.navigation.navigate('Register')
    }
    GoToRegisterPage1 = () => {
        this.props.navigation.navigate('DriverDashboard')
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
                                <Text style={{ fontSize: 20, color: 'grey',paddingTop:10 }}>Login</Text>
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
                                        ref={component => this._textInput1 = component}
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
                                        ref={component => this._textInput2 = component}
                                        secureTextEntry={true}
                                        onChangeText={(Password) => this.setState({ Password })}
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
                                        title="Login"
                                        color="#f1b306"
                                        onPress={() => { this.UserLogin(); }}
                                    />
                                </View>
                            </View>

                            <Text
                                style={{ fontSize: 15, color: 'grey', textAlign: 'right', paddingRight: 20, paddingBottom: 10 }}
                                onPress={() => { this.GoToRegisterPage(); }}
                            >
                                Not a member?</Text>

                                {/* <Text
                                style={{ fontSize: 15, color: 'grey', textAlign: 'right', paddingRight: 20, paddingBottom: 10 }}
                                onPress={() => { this.GoToRegisterPage1(); }}
                            >
                                Driver?</Text> */}

                        </Card>
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


export default LoginPage;