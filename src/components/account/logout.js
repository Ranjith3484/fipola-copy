import React, { Component } from 'react';
import { AppRegistry,StyleSheet, ActivityIndicator,AsyncStorage ,Text, View, Alert, Platform, TouchableOpacity } from 'react-native';

class LogoutScreen extends Component {

  constructor(props) {
    super(props);
      this.state = {
    }
  }


//   componentDidMount= async () => {
//        Alert.alert('Bye');
//        this.props.navigation.navigate('Login');
//   }


  render() {
    return (
          <View>
              <Text>log out</Text>
          </View>
    );
  }
}

export default LogoutScreen;


