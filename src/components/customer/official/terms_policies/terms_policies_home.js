import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import PrivacyPolicy from './privacy_policy';
import TermsConditions from './conditions';
import CancellationPolicy from './cancellation_policy';


class CustomerPoliciesScreen extends Component {
    render() {
        const Tab = createMaterialTopTabNavigator();
        return (
            <NavigationContainer>
                <Tab.Navigator
                 tabBarOptions={{
                    style: { backgroundColor: '#f1b306' },
                    indicatorStyle: {
                        borderWidth: 1,
                        borderColor:'black',
                        backgroundColor: 'black'
                    }
                    
                  }}
                >
                    <Tab.Screen name="PRIVACY POLICY" component={PrivacyPolicy} />
                    <Tab.Screen name="TERMS & CONDITIONS" component={TermsConditions} />
                    <Tab.Screen name="CANCELLATION POLICY" component={CancellationPolicy} />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}

export default CustomerPoliciesScreen;
