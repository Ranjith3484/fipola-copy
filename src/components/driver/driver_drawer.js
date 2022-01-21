import React, { Component } from 'react';
import {Text, View, AsyncStorage, Alert, StyleSheet} from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/Ionicons';   
import { createAppContainer } from 'react-navigation';

import DriverHomeScreen from './driver_home/driver-home';


 
const RootStack1 = createDrawerNavigator({
 
  DriverHomeScreen:{screen: DriverHomeScreen},
  
},
{  
  initialRouteName: "DriverHomeScreen",
  drawerBackgroundColor:'#f1b306',  
  drawerType:'button',
  hideStatusBar:'true',
  drawerWidth:'70%',
  contentOptions: {
    activeTintColor: 'white',
  },
   
},
{
    navigationOptions: ({ navigation }) => ({
      headerMode: 'screen',
      headerTitle: 'Main Screen Header',
      drawerLabel: 'Main Screen',
    }),
  }
)


const AppContainer = createAppContainer(RootStack1)


export default class DriverDrawer extends Component {
  
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
    }
})