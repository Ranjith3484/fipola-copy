import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Image, Button, ScrollView,TouchableOpacity,Dimensions  } from 'react-native';
import { Card } from 'react-native-shadow-cards';
class BestSellers extends Component {
    render() {
        const screenWidth = Math.round(Dimensions.get('window').width);
        return (
            <View style={{ backgroundColor: '#e6e6e6',}}>
               <View>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'grey', marginLeft: 20, marginTop: 5 }}>
                        Best Sellers of the Month
                    </Text>
                </View>
                <ScrollView  
                horizontal={true}
                style={styles.container}
                contentContainerStyle={{ width: null }}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={200}
                decelerationRate="fast"
                >  
                <TouchableOpacity>
                    
                <View style={[{ width: screenWidth/2,margin:10,backgroundColor:'white',elevation:5}]}> 
                <Image source={require('../../../assets/register.jpg')}
                          style={{  width:  screenWidth/2,height: screenWidth/3 }} />
                          <Text style={{ fontSize: 15,textAlign:'center', fontWeight: 'bold', color: '#f1b306',paddingTop:10}}>Prawns Peeled</Text>
                        <Text style={{ fontSize: 15,textAlign:'center', color: 'grey',paddingTop:10,paddingBottom:10}}>Rs. 250</Text>
                </View> 
                </TouchableOpacity>
              
                <TouchableOpacity>
                <View style={[{ width: screenWidth/2,margin:10,backgroundColor:'white',elevation:5}]}>  
                <Image source={require('../../../assets/register.jpg')}
                          style={{  width:  screenWidth/2,height: screenWidth/3 }} />
                          <Text style={{ fontSize: 15,textAlign:'center', fontWeight: 'bold', color: '#f1b306',paddingTop:10}}>Prawns Peeled</Text>
                        <Text style={{ fontSize: 15,textAlign:'center', color: 'grey',paddingTop:10,paddingBottom:10}}>Rs. 250</Text>
                </View> 
                </TouchableOpacity>

                <TouchableOpacity>
                <View style={[{ width: screenWidth/2,margin:10,backgroundColor:'white',elevation:5}]}>  
                <Image source={require('../../../assets/register.jpg')}
                          style={{  width:  screenWidth/2,height: screenWidth/3 }} />
                          <Text style={{ fontSize: 15,textAlign:'center', fontWeight: 'bold', color: '#f1b306',paddingTop:10}}>Prawns Peeled</Text>
                        <Text style={{ fontSize: 15,textAlign:'center', color: 'grey',paddingTop:10,paddingBottom:10}}>Rs. 250</Text>
                </View> 
                </TouchableOpacity>

                <TouchableOpacity>
                <View 
                style={[{ width: screenWidth/2,margin:10,backgroundColor:'white',elevation:5  }]}>  
                <Image source={require('../../../assets/register.jpg')}
                          style={{  width:  screenWidth/2,height: screenWidth/3 }} />
                          <Text style={{ fontSize: 15,textAlign:'center', fontWeight: 'bold', color: '#f1b306',paddingTop:10}}>Prawns Peeled</Text>
                        <Text style={{ fontSize: 15,textAlign:'center', color: 'grey',paddingTop:10,paddingBottom:10}}>Rs. 250</Text>
                </View> 
                </TouchableOpacity>

                <TouchableOpacity>
                <View style={[{ width: screenWidth/2,margin:10,backgroundColor:'white',elevation:5}]}>  
                <Image source={require('../../../assets/register.jpg')}
                          style={{  width:  screenWidth/2,height: screenWidth/3 }} />
                          <Text style={{ fontSize: 15,textAlign:'center', fontWeight: 'bold', color: '#f1b306',paddingTop:10}}>Prawns Peeled</Text>
                        <Text style={{ fontSize: 15,textAlign:'center', color: 'grey',paddingTop:10,paddingBottom:10}}>Rs. 250</Text>
                </View> 
                </TouchableOpacity>

            </ScrollView> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{  
        flex: 1,
    }
})

export default BestSellers;