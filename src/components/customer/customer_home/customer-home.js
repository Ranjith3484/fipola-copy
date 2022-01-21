import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import HomeCarousel from './carousel';
import TopDealPage from './top_deal.js';
import BestSellers from './best_sellers';
import CustomerReview from './customer_review';
import FooterComponent from './footer';
import Icon from 'react-native-vector-icons/FontAwesome';

class CustomerHomeScreen extends Component {
    render() {
        const screenWidth = Math.round(Dimensions.get('window').width);
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <HomeCarousel />

                {/* shop category is writted here because,when it is imported from an another file,navigation is not woking */}
                <View style={{ flex: 1, height: 455, backgroundColor: '#f1b306' }}>
                    <View style={{ backgroundColor: 'black', width: screenWidth / 2, marginTop: -10, borderBottomRightRadius: 50 }}>
                        <Text style={{ color: 'white', fontSize: 10, padding: 1, paddingLeft: 10 }}>BROWSE THROUGH OUR RANGE</Text>
                    </View>
                    {/* first row */}
                    <View style={{ flexDirection: "row", marginTop: 20, height: 80, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}
                                onPress={() => { this.props.navigation.navigate('ShopChicken') }}>
                                <Icon
                                    name="history"
                                    size={40}

                                />
                                <Text style={{ fontSize: 15, }}>Chicken</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}
                             onPress={() => { this.props.navigation.navigate('ShopGoat') }}>
                                <Icon
                                    name="heart-o"
                                    size={40}

                                />
                                <Text style={{ fontSize: 15 }}>Lamb & Goat</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}
                             onPress={() => { this.props.navigation.navigate('ShopSeaFood') }}>
                                <Icon
                                    name="star-o"
                                    size={40}
                                />
                                <Text style={{ fontSize: 15 }}>Sea Food</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* second row */}
                    <View style={{ flexDirection: "row", marginTop: 25, height: 80, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}
                             onPress={() => { this.props.navigation.navigate('ShopMarinades') }}>
                                <Icon
                                    name="history"
                                    size={40}

                                />
                                <Text style={{ fontSize: 15, }}>Marinades</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}
                             onPress={() => { this.props.navigation.navigate('ShopColdCuts') }}>
                                <Icon
                                    name="heart-o"
                                    size={40}

                                />
                                <Text style={{ fontSize: 15 }}>Cold Cuts</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}
                             onPress={() => { this.props.navigation.navigate('ShopReadyToFry') }}>
                                <Icon
                                    name="star-o"
                                    size={40}
                                />
                                <Text style={{ fontSize: 15 }}>Ready To Fry</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* third row */}
                    <View style={{ flexDirection: "row", marginTop: 25, height: 80, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}
                             onPress={() => { this.props.navigation.navigate('ShopExotic') }}>
                                <Icon
                                    name="history"
                                    size={40}

                                />
                                <Text style={{ fontSize: 15, }}>Exotic</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}
                             onPress={() => { this.props.navigation.navigate('ShopRelishes') }}>
                                <Icon
                                    name="heart-o"
                                    size={40}

                                />
                                <Text style={{ fontSize: 15 }}>Relishes</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}
                             onPress={() => { this.props.navigation.navigate('ShopEggs') }}>
                                <Icon
                                    name="star-o"
                                    size={40}
                                />
                                <Text style={{ fontSize: 15 }}>Eggs</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* fourth row */}
                    <View style={{ flexDirection: "row", marginTop: 25, height: 80, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}
                             onPress={() => { this.props.navigation.navigate('ShopCombos') }}>
                                <Icon
                                    name="history"
                                    size={40}

                                />
                                <Text style={{ fontSize: 15, }}>Combos</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}
                             onPress={() => { this.props.navigation.navigate('ShopPetFood') }}>
                                <Icon
                                    name="heart-o"
                                    size={40}

                                />
                                <Text style={{ fontSize: 15 }}>Pet Food</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}
                             onPress={() => { this.props.navigation.navigate('ShopBbqCorner') }}>
                                <Icon
                                    name="star-o"
                                    size={40}
                                />
                                <Text style={{ fontSize: 15 }}>BBQ Corner</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
                {/* shop category code ends here, below were imported ones */}
                <TopDealPage />
                <BestSellers />
                <CustomerReview />
                <FooterComponent />
            </ScrollView>
        );
    }
}

export default CustomerHomeScreen;