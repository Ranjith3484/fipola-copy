import React, { Component } from 'react';
import { View, Text, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
class FooterComponent extends Component {
    state = {}
    render() {
        return (
            <View style={{ backgroundColor: 'black' }}>
                {/* first row */}
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop: 20 }}>

                    <View style={{ flex: 0.5 }}>
                        <Icon
                            name="motorcycle"
                            size={35}
                            color='#f1b306'
                            style={{
                                textAlign: 'center'
                            }}
                        />
                        <Text style={{ fontSize: 12, textAlign: 'center', color: 'white' }}>
                            Delivery within 2 hours
                                         </Text>
                    </View>
                    <View style={{ flex: 0.5 }}>
                        <View style={{ justifyContent: 'center' }}>
                            <Icon
                                name="times-circle-o"
                                size={35}
                                color='#f1b306'
                                style={{
                                    textAlign: 'center'
                                }}
                            />
                        </View>
                        <Text style={{ fontSize: 12, textAlign: 'center', color: 'white' }}>
                            No Preservatives
                                         </Text>
                    </View>
                </View>
                {/* second row */}
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop: 20 }}>

                    <View style={{ flex: 0.5 }}>
                        <Icon
                            name="ban"
                            size={35}
                            color='#f1b306'
                            style={{
                                textAlign: 'center'
                            }}
                        />
                        <Text style={{ fontSize: 12, textAlign: 'center', color: 'white' }}>
                            Antibiotic Free
                                         </Text>
                    </View>
                    <View style={{ flex: 0.5 }}>
                        <View style={{ justifyContent: 'center' }}>
                            <Icon
                                name="ban"
                                size={35}
                                color='#f1b306'
                                style={{
                                    textAlign: 'center'
                                }}
                            />
                        </View>
                        <Text style={{ fontSize: 12, textAlign: 'center', color: 'white' }}>
                            No Chemicals
                                         </Text>
                    </View>
                </View>
                {/* third row */}
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: 40 }}>
                    <Text style={{ fontSize: 12, color: 'white', textAlign: 'center' }}>
                        Follow Us On
                            </Text>
                </View>
                {/* fourth row */}
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity>
                        <Icon
                            name="facebook-square"
                            size={25}
                            color='#f1b306'
                            onPress={() => { Linking.openURL("https://www.facebook.com/"); }}
                            style={{
                                padding: 10
                            }}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Icon
                            name="instagram"
                            size={25}
                            color='#f1b306'
                            onPress={() => { Linking.openURL("https://www.instagram.com/"); }}
                            style={{
                                padding: 10
                            }}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Icon
                            name="twitter-square"
                            size={25}
                            color='#f1b306'
                            onPress={() => { Linking.openURL("https://www.twitter.com/"); }}
                            style={{
                                padding: 10
                            }}
                        />
                    </TouchableOpacity>
                </View>
                {/* fifth row */}
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                    <Icon
                        name="lock"
                        size={30}
                        color='white'
                        style={{
                            padding: 5
                        }}
                    />

                    <Icon
                        name="cc-visa"
                        size={25}
                        color='white'
                        style={{
                            padding: 5
                        }}
                    />
                    <Icon
                        name="cc-mastercard"
                        size={25}
                        color='white'
                        style={{
                            padding: 5
                        }}
                    />
                    <Icon
                        name="credit-card"
                        size={25}
                        color='white'
                        style={{
                            padding: 5
                        }}
                    />
                </View>
                  {/* sixth row */}
                  <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 12, color: 'white', textAlign: 'center' }}>
                    <Icon
                        name="copyright"
                        size={10}
                        color='white'
                    />
                     2020 FreshMeat, All Rights Reserved
                    </Text>
                </View>
                {/* sevent row */}
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity>
                <Text style={{ fontSize: 12, color: 'white', textAlign: 'center',paddingTop:10,paddingBottom:25 }}
                 onPress={() => { Linking.openURL("https://www.pinesphere.com/"); }}>
                    Powered by Pinesphere Solutions
                </Text>
                </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default FooterComponent;