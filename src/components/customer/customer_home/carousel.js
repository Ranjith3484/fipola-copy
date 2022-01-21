import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet,Image,Dimensions } from 'react-native';
import Carousel from 'react-native-smart-carousel';
//import Carousel from 'react-native-snap-carousel';
import image1 from '../../../assets/register.jpg';
import image2 from '../../../assets/yellow.jpg';
const datacarousel = [

    {
        "id": 339403,
        "imagePath": image1,
    },
    {
        "id": 339404,
        "imagePath": image2,
    },
    {
        "id": 339405,
        "imagePath": image1,
    },
    {
        "id": 339406,
        "imagePath": image2,
    },
    {
        "id": 339407,
        "imagePath": image1,
    },
    {
        "id": 339408,
        "imagePath": image2,
    },

];

const screenWidth = Math.round(Dimensions.get('window').width);

class HomeCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            carouselItems: [
                {
                    title: "Item 1",
                    image: image1,
                },
                {
                    title: "Item 2",
                    image: image2,
                },
                {
                    title: "Item 3",
                    image: image1,
                },
                {
                    title: "Item 4",
                    image: image2,
                },
                {
                    title: "Item 5",
                    image: image1,
                },
                {
                    title: "Item 6",
                    image: image2,
                },
            ]
        }
    }

    _renderItem({ item, index }) {
        return (
            <View>
                {/* <Text style={{ fontSize: 30 }}>{item.title}</Text> */}
                <Image style={{width: null, height:300, resizeMode:'cover'}}
                source={item.image}
                />
            </View>

        )
    }
    render() {
        return (
            <View>
                {/* <View>
                    <Carousel
                        layout={'stack'}
                        hasParallaxImages={true}
                        autoplay={true}
                        layoutCardOffset={`18`}
                        ref={ref => this.carousel = ref}
                        data={this.state.carouselItems}
                        sliderWidth={screenWidth}
                        itemWidth={screenWidth}
                        height={380}
                        renderItem={this._renderItem}
                        onSnapToItem={index => this.setState({ activeIndex: index })} />
                </View> */}
                <Carousel
                        data={datacarousel}
                        autoStart='true'
                        playTime='10ms'
                        navigation={true}
                        navigationType='bars'
                        height={395}
                        
                    />
            </View>
        );
    }
}


export default HomeCarousel;