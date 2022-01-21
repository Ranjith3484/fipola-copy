import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Image, Button, ScrollView,TouchableOpacity,Dimensions  } from 'react-native';
class CustomerReview extends Component {
    render() {
        const screenWidth = Math.round(Dimensions.get('window').width);
        return (
            <View style={{ backgroundColor: '#f1b306',}}>
                <View style={{ backgroundColor: 'black',width: screenWidth/2,marginTop:-10,borderBottomRightRadius:50 }}>
                     <Text style={{color:'white',fontSize:10,padding:1,paddingLeft:10}}>WHAT CUSTOMERS SAY ABOUT US?</Text>
                </View>
                <ScrollView  
                horizontal={true} style={styles.container}
                contentContainerStyle={{ width: null }}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={200}
                decelerationRate='fast'
                >  
               
                <View style={[{ width: screenWidth,padding:20}]}>  
                   <Text style={{ fontSize:15, textAlign:'center',lineHeight: 25 }}>
                       The Agricultural College and Research Institute, Killikulam is contributing towards the generation of human resources in the field of agriculture. Besides offering quality education, the College serves
                    </Text>  
                    <Text style={{ fontSize:15,fontWeight:'bold', textAlign:'center' }}>
                        -Customer
                    </Text>
                </View>  
                 
                <View style={[{ width: screenWidth,padding:20}]}>  
                   <Text style={{ fontSize:15, textAlign:'center',lineHeight: 25 }}>
                       The Agricultural College and Research Institute, Killikulam is contributing towards the generation of human resources in the field of agriculture. Besides offering quality education, the College serves
                    </Text>  
                    <Text style={{ fontSize:15,fontWeight:'bold', textAlign:'center' }}>
                        -Customer
                    </Text>
                </View>

                <View style={[{ width: screenWidth,padding:20}]}>  
                   <Text style={{ fontSize:15, textAlign:'center',lineHeight: 25 }}>
                       The Agricultural College and Research Institute, Killikulam is contributing towards the generation of human resources in the field of agriculture. Besides offering quality education, the College serves
                    </Text>  
                    <Text style={{ fontSize:15,fontWeight:'bold', textAlign:'center' }}>
                        -Customer
                    </Text>
                </View>

                <View style={[{ width: screenWidth,padding:20}]}>  
                   <Text style={{ fontSize:15, textAlign:'center',lineHeight: 25 }}>
                       The Agricultural College and Research Institute, Killikulam is contributing towards the generation of human resources in the field of agriculture. Besides offering quality education, the College serves
                    </Text>  
                    <Text style={{ fontSize:15,fontWeight:'bold', textAlign:'center' }}>
                        -Customer
                    </Text>
                </View>

                <View style={[{ width: screenWidth,padding:20}]}>  
                   <Text style={{ fontSize:15, textAlign:'center',lineHeight: 25 }}>
                       The Agricultural College and Research Institute, Killikulam is contributing towards the generation of human resources in the field of agriculture. Besides offering quality education, the College serves
                    </Text>  
                    <Text style={{ fontSize:15,fontWeight:'bold', textAlign:'center' }}>
                        -Customer
                    </Text>
                </View>

                <View style={[{ width: screenWidth,padding:20}]}>  
                   <Text style={{ fontSize:15, textAlign:'center',lineHeight: 25 }}>
                       The Agricultural College and Research Institute, Killikulam is contributing towards the generation of human resources in the field of agriculture. Besides offering quality education, the College serves
                    </Text>  
                    <Text style={{ fontSize:15,fontWeight:'bold', textAlign:'center' }}>
                        -Customer
                    </Text>
                </View>

            </ScrollView> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{  
        flex: 1,  
    },  

})

export default CustomerReview;