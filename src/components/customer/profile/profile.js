import React, { Component } from 'react';
import { StatusBar, SafeAreaView, StyleSheet, ScrollView, View, Text, Image, ImageBackground, Linking, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import { Card } from 'react-native-shadow-cards';
import Icon from 'react-native-vector-icons/FontAwesome';

class CustomerProfileScreen extends Component {
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

    LogMeOut=()=>{
        Alert.alert(
            'Confirm Sign Out',
            'Do you really want to sign out?',
            [
              {
                text: 'Cancel',
              },
              { text: 'Yes', 
              onPress: () => {
                  Alert.alert("Signed out")
                  this.props.navigation.navigate('Login1');
              }}
            ],
            { cancelable: true}
          );
        //this.props.navigation.navigate('Login1')
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar translucent backgroundColor="transparent" />
                <ImageBackground
                    source={require('../../../assets/yellow.jpg')}
                    style={styles.image}>
                    <Icon
                        name="arrow-left"
                        size={18}
                        onPress={() => { this.props.navigation.navigate('Home') }}
                        style={{ paddingLeft: 20, paddingTop: 50 }}
                    />
                    <View style={{ jusifyContent: "center", alignItems: "center", marginTop: 10 }}>
                        <Image source={require('../../../assets/user.png')} style={{ width: 50, height: 50, borderRadius: 100 / 2, borderWidth: 2, borderColor: 'white' }} />
                        <Text style={{ fontSize: 15, color: 'black', paddingTop: 10 }}>
                            ProfileName
                        </Text>
                        <Text style={{ fontSize: 15, color: 'black', paddingTop: 10 }}>
                            profile@gmail.com
                        </Text>
                        <View style={{ marginTop: 10 }}>
                            <Card>
                                <View style={{ flexDirection: "row", height: 80, alignItems: 'center', justifyContent: 'center' }}>
                                    <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
                                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}
                                            onPress={() => { this.props.navigation.navigate('OrderHistory') }}>
                                            <Icon
                                                name="history"
                                                size={18}

                                            />
                                            <Text style={{ fontSize: 15, color: 'grey' }}>My Orders</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
                                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}
                                            onPress={() => { this.props.navigation.navigate('Wishlist') }}>
                                            <Icon
                                                name="heart-o"
                                                size={18}

                                            />
                                            <Text style={{ fontSize: 15, color: 'grey' }}>Wishlist</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
                                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}
                                            onPress={() => { Linking.openURL("market://details?id=com.whatsapp"); }}>
                                            <Icon
                                                name="star-o"
                                                size={18}
                                            />
                                            <Text style={{ fontSize: 15, color: 'grey' }}>Rate Us</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Card>
                            <ScrollView >
                            <TouchableOpacity style={{marginTop:20}}
                             onPress={() => { this.props.navigation.navigate('UpdatePersonal') }}>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <View style={{ flex: 0.1, paddingLeft: 10 }}>
                                        <Icon
                                            name="user"
                                            size={20}
                                        />
                                    </View>
                                    <View style={{ flex: 0.9 }}>
                                        <Text style={{ fontSize: 20, color: 'grey' }}>Update Personal Details</Text>
                                    </View>
                                    <View style={{ flex: 0.1 }}>
                                        <Icon
                                            name="angle-right"
                                            size={20}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginTop:20}}
                             onPress={() => { this.props.navigation.navigate('ChangePassword') }}>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <View style={{ flex: 0.1, paddingLeft: 10 }}>
                                        <Icon
                                            name="key"
                                            size={20}
                                        />
                                    </View>
                                    <View style={{ flex: 0.9 }}>
                                        <Text style={{ fontSize: 20, color: 'grey' }}>Change password</Text>
                                    </View>
                                    <View style={{ flex: 0.1 }}>
                                        <Icon
                                            name="angle-right"
                                            size={20}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginTop:20}}
                             onPress={() => { this.props.navigation.navigate('ManageAddress') }}>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <View style={{ flex: 0.1, paddingLeft: 10 }}>
                                        <Icon
                                            name="map-marker"
                                            size={20}
                                        />
                                    </View>
                                    <View style={{ flex: 0.9 }}>
                                        <Text style={{ fontSize: 20, color: 'grey' }}>Manage addresses</Text>
                                    </View>
                                    <View style={{ flex: 0.1 }}>
                                        <Icon
                                            name="angle-right"
                                            size={20}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginTop:20}}
                             onPress={() => { this.LogMeOut() }}>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <View style={{ flex: 0.1, paddingLeft: 10 }}>
                                        <Icon
                                            name="sign-out"
                                            color='red'
                                            size={20}
                                        />
                                    </View>
                                    <View style={{ flex: 0.9 }}>
                                        <Text style={{ fontSize: 20, color: 'red' }}>Sign out</Text>
                                    </View>
                                    <View style={{ flex: 0.1 }}>
                                        <Icon
                                            name="angle-right"
                                            size={20}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                        </View>
                        <View>
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
        height: 250
    }
});


export default CustomerProfileScreen;