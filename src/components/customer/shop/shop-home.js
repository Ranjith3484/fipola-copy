import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import PrivacyPolicy from '../official/terms_policies/privacy_policy';
import TermsConditions from '../official/terms_policies/conditions';
import CancellationPolicy from '../official/terms_policies/cancellation_policy';


class ShopHomeScreen extends Component {
    render() {
        const Tab = createMaterialTopTabNavigator();
        return (
            <ScrollView>
            <NavigationContainer>
                <Tab.Navigator
                 initialRouteName="CHICKEN"
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
            </NavigationContainer >
            </ScrollView>

        );
    }
}

export default ShopHomeScreen;
