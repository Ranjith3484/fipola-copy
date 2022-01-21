import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Image, Button,Dimensions  } from 'react-native';
import TextTicker from 'react-native-text-ticker';
import { TouchableOpacity } from 'react-native-gesture-handler';
class TopDealPage extends Component {
    render() {
        const screenWidth = Math.round(Dimensions.get('window').width);
        return (
            <View>
                <View style={{ backgroundColor: '#e6e6e6' }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'grey', marginLeft: 20, marginTop: 5, marginBottom: 5 }}>Top Deal Of The Day</Text>
                </View>
                <View style={{ flexDirection: "row", backgroundColor:'white',paddingLeft:20 }}>

                <View style={{ flex: 0.35 }}>
                    <TextTicker
                        style={{ fontSize: 15,color:'#f1b306',marginTop:5 }}
                        duration={3000}
                        loop
                        bounce
                        scrollSpeed={1}
                        repeatSpacer={50}
                        marqueeDelay={1000}
                    >
                        Spicy Chicken Lollipop
                    </TextTicker>
                    <Text style={{ fontSize: 15,color:'grey',marginTop:5,marginBottom:5 }}>
                         These Chicken Lollipops are prepared from fre...
                    </Text>
                    <Button
                     title="Shop Now"
                     color="#f1b306"
                     />
                    </View>

                    <View style={{ flex: 0.15 }}></View>

                    <View style={{ flex: 0.5 }}>
                        <Image source={require('../../../assets/register.jpg')}
                        style={{width:null, 
                            height:screenWidth/3,
                            borderTopLeftRadius:screenWidth/3,borderBottomLeftRadius:screenWidth/3}}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainheader: {
        fontSize: 20,
        fontWeight: '700',
        fontStyle: 'italic'

    },
    header: {
        fontSize: 18,
        fontWeight: 'bold'
    }

})

export default TopDealPage;