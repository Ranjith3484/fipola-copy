import React, { Component } from 'react';
import {Text, View, AsyncStorage, Alert} from 'react-native';


import { createStackNavigator } from 'react-navigation-stack';  
import { createAppContainer } from 'react-navigation';
import SplashScreen from './src/components/splash_screen';
import LoginPage from './src/components/account/login';
import RegisterPage from './src/components/account/register';
import CustomerDrawer from './src/components/customer/customer_drawer';
import DriverDrawer from './src/components/driver/driver_drawer';



 
const RootStack = createStackNavigator({
  Splash:{screen:SplashScreen},
  Login:{screen: LoginPage},
  Register:{screen: RegisterPage},
  CustomerDashboard:{screen: CustomerDrawer},
  DriverDashboard:{screen: DriverDrawer },
},
{  
  initialRouteName: "Splash",  
  headerMode:'none',  
}, )


const AppContainer = createAppContainer(RootStack)


export default class App extends Component {
  
  render() {
    return <AppContainer />;
  }
}