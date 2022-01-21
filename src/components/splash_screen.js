import React, { Component } from 'react';
 
import { Platform, StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
 
export default class SplashScreen extends Component
{

  constructor(){

    super();

    this.state={

      isVisible : true,

    }

  }

  Hide_Splash_Screen=()=>{

    this.setState({ 
      isVisible : false 

    });

  }

  componentDidMount(){

    var that = this;

    setTimeout(function(){
      that.props.navigation.navigate('Login');
      that.Hide_Splash_Screen();
 
    }, 2000);


  
  }
 
    render()
    {
        let Splash_Screen = (

            <View style={styles.SplashScreen_RootView}>

                <View style={styles.SplashScreen_ChildView}>

                    {/* Put all your components Image and Text here inside Child view which you want to show in Splash Screen. */}
                    <Image animation="bounceOut" source={require('../assets/close.png')} 
                    style={{width:'20%', height: '20%', resizeMode: 'contain'}} />
                    <Text style={{fontSize: 19 }} animation="fadeOut"  direction="alternate">FreshMeat</Text>
                </View>


                {/* <TouchableOpacity 
                  activeOpacity = { 0.5 }
                  style={styles.TouchableOpacity_Style}
                  onPress={this.Hide_Splash_Screen} >

                       <Image source={require('../assets/close.png')} 
                       style={{width:'100%', height: '100%', resizeMode: 'contain'}} />

                </TouchableOpacity> */}

            
            </View> )
 
        return(
          
            <View style = { styles.MainContainer }>

                {
                  (this.state.isVisible === true) ? Splash_Screen : null
                }
            
 
            </View>
            
        );
          
    }
}
 
const styles = StyleSheet.create(
{
    MainContainer:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0,
        backgroundColor:'#f1b306',
    },

    SplashScreen_RootView:
    {
        justifyContent: 'center',
        flex:1,
        margin: 10,
        position: 'absolute',
        width: '100%',
        height: '100%',
        
    },
 
    SplashScreen_ChildView:
    {
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#00BCD4',
        flex:1,
       // margin: 20,
    },

    TouchableOpacity_Style:{

        width:25, 
        height: 25, 
        top:9, 
        right:9, 
        position: 'absolute'

    }
});
