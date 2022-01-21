import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Image, ScrollView } from 'react-native';
class CustomerFaqScreen extends Component {
    render() { 
        return ( 
            <ScrollView 
            showsVerticalScrollIndicator={false}
            style={{backgroundColor:'#e6e6e6'}}>
               <View style={{flex: 1,margin:15, backgroundColor:'white', paddingLeft:10,paddingRight:10}}>
               <Text style={styles.header}>
                   1) Where is your store?
                </Text>
                <Text style={{  textAlign:'justify',lineHeight: 30 }}>
                    The Agricultural College and Research Institute, Killikulam is contributing towards the generation of human resources in the field of agriculture. Besides offering quality education, the College serves the farming community of Southern districts of Tamil Nadu through dedicated research in all frontier areas of agriculture and extension activities. It also provides a variety of expert services to the stake holders of this region.
                </Text>
                <Text style={styles.header}>
                2) Where is your office?
                </Text>
                <Text style={{   textAlign:'justify',lineHeight: 30}}>
                    The College was established in 1984 - 85 as the third constituent college of Tamil Nadu Agricultural University. It was then upgraded as Agricultural College and Research Institute in 1989 and as Post-graduate institute in 1990. The college became a co-education campus in 1990-91.The institute has secured the best college award during 2002, 2005 and 2009 in TNAU.
                </Text>
                <Text style={styles.header}>
                3) Is your meat safe?
                </Text>
                <Text style={{ textAlign:'justify',lineHeight: 30}}>
                    Killikulam Agribusiness Incubation Forum is promoted by Agricultural College and Research Institute, Killikulam, Tuticorin district with the grant support of EDII (Entrepreneurship Development Innovation Institute), funded by TN govt.   
                </Text>
                <Text style={{ textAlign:'justify',lineHeight: 30}}>
                    There is lot of scope for post-harvest management and value addition of crop produced in the southern districts of Kanyakumari, Tirunelveli and Thoothukudi for crops especially, Fruits, Spices, Vegetables and Minor millets in these regions.
                </Text>
                <Text style={{ textAlign:'justify',lineHeight: 30}}>
                    KABIF will garner prospective entrepreneurs in this region and provide a platform to start agribusiness ventures based on food processing technologies.
                </Text>
                <Text style={{ textAlign:'justify',lineHeight: 30}}>
                    This would enable better use of raw agricultural produce and reduce post-harvest losses, thereby stimulating demand for agricultural produce.
                </Text>
                <Text style={{ textAlign:'justify',lineHeight: 30}}>
                     Technological mentoring, Capacity Building and training, Project proposal, Technical assistance, Technological commercialization, Techno-Entrepreneurial Training, patent rights support, Branding and Funding Facilitation.
                </Text>
                <Text style={{ textAlign:'justify',lineHeight: 30}}>
                To foster the spirit of Entrepreneurship and innovation in the field of Agribusiness by providing technical assistance and market linkage to budding agriprenuers.
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
        header:{
            fontSize: 18,
            fontWeight:'bold'
        }
    
    })

export default CustomerFaqScreen;