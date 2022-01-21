import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, ScrollView,StatusBar,Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PrivacyPolicy from '../../official/terms_policies/privacy_policy';
import TermsConditions from '../../official/terms_policies/conditions';
import CancellationPolicy from '../../official/terms_policies/cancellation_policy';


class ShopEggsScreen extends Component {
    render() {
        const Tab = createMaterialTopTabNavigator();
        const StatusBarHeight = StatusBar.currentHeight
        return (
            <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" />
            <View style={{flexDirection:'row',backgroundColor:'#f1b306',paddingTop:StatusBarHeight*2,paddingBottom:10}}>
                    <View style={{flex:0.1}}>
                    <Icon
                        name="arrow-left"
                        size={18}
                        onPress={() => { this.props.navigation.navigate('Home') }}
                        style={{ paddingLeft: 20}}
                    />
                   </View>
                   <View style={{flex:0.7}}></View>
                   <View style={{flex:0.1}}>
                    <Icon
                       // onPress={() => navigation.openDrawer()}
                        name="search"
                        size={25}
                    />
                    </View>
                    <View style={{flex:0.1}}>
                   <Icon
                       // onPress={() => navigation.openDrawer()}
                        name="shopping-cart"
                        size={25}
                        color='black'
                    />
                    </View>
                    </View>
            <NavigationContainer>
                <Tab.Navigator
                 initialRouteName="EGGS"
                    tabBarOptions={{
                        scrollEnabled: true,
                        style: { backgroundColor: '#f1b306' },
                        indicatorStyle: {
                            borderWidth: 1,
                            borderColor:'black',
                            backgroundColor: 'black'
                        }
                    }}
                >
                    <Tab.Screen name="CHICKEN" component={PrivacyPolicy} />
                    <Tab.Screen name="LAMB & GOAT" component={TermsConditions} />
                    <Tab.Screen name="SEA FOOD" component={CancellationPolicy} />
                    <Tab.Screen name="MARINADES" component={PrivacyPolicy} />
                    <Tab.Screen name="COLD CUTS" component={TermsConditions} />
                    <Tab.Screen name="READY TO FRY" component={CancellationPolicy} />
                    <Tab.Screen name="EXOTIC" component={PrivacyPolicy} />
                    <Tab.Screen name="RELISHES" component={TermsConditions} />
                    <Tab.Screen name="EGGS" component={CancellationPolicy} />
                    <Tab.Screen name="COMBOS" component={CancellationPolicy} />
                    <Tab.Screen name="PET FOOD" component={PrivacyPolicy} />
                    <Tab.Screen name="BBQ CORNER" component={TermsConditions} />
                </Tab.Navigator>
            </NavigationContainer>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    }
});

export default ShopEggsScreen;
