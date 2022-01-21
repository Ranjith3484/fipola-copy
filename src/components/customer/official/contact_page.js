import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Image, ScrollView } from 'react-native';
class CustomerContactScreen extends Component {
    render() { 
        return ( 
            <ScrollView 
            showsVerticalScrollIndicator={false}
            style={{backgroundColor:'#e6e6e6'}}>
            <View style={{flex: 1,marginLeft:15,marginRight:15,paddingTop:20, backgroundColor:'white', paddingLeft:10,paddingRight:10}}>
            <Text style={styles.mainheader}>
                Corporate Office
             </Text>
             <Text style={{  textAlign:'justify',lineHeight: 30,fontSize:19 }}>
                1address will be
             </Text>
             <Text style={{  textAlign:'justify',lineHeight: 30,fontSize:19 }}>
                23245address will be
             </Text>
             <Text style={{  textAlign:'justify',lineHeight: 30,fontSize:19 }}>
                Email : suport@gmail.com
             </Text>
             <Text style={{  textAlign:'justify',lineHeight: 30,fontSize:19}}>
                Call us @ 97242948247
             </Text>
        <View style={{borderWidth:0.9,borderColor:'grey',margin:20}}></View>
             <Text style={styles.mainheader}>
                Corporate Office
             </Text>
             <Text style={{  textAlign:'justify',lineHeight: 30,fontSize:19 }}>
                1address will be
             </Text>
             <Text style={{  textAlign:'justify',lineHeight: 30,fontSize:19 }}>
                23245address will be
             </Text>
             <Text style={{  textAlign:'justify',lineHeight: 30,fontSize:19 }}>
                Email : suport@gmail.com
             </Text>
             <Text style={{  textAlign:'justify',lineHeight: 30,fontSize:19}}>
                Call us @ 97242948247
             </Text>
         </View>
         </ScrollView>
         );
    }
}

const styles=StyleSheet.create({
    mainheader:{
        fontSize: 20,
        fontWeight:'700',
        fontStyle:'italic'
    
    },
    
    })

export default CustomerContactScreen;