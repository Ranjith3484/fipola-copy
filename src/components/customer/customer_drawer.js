import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView, ScrollView, Alert, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import CustomerHomeScreen from './customer_home/customer-home';
import ShopHomeScreen from './shop/shop-home';
import OrderHistoryScreen from './order_history/order-history';
import CustomerProfileScreen from './profile/profile';
import CustomerWishlistScreen from './wishlist/wishlist';
import CustomerFaqScreen from './official/faq_page';
import CustomerAboutScreen from './official/about_page';
import CustomerPoliciesScreen from './official/terms_policies/terms_policies_home';
import CustomerContactScreen from './official/contact_page';
import LogoutScreen from '../account/logout';
import UpdatePersonal from '../account/update_personal';
import ChangePassword from '../account/change_password';
import ManageAddress from '../account/manage_address';
import LoginPage from '../account/login';
import ShopChickenScreen from './shop/shop-top-bar/shop-chicken-bar';
import ShopGoatScreen from './shop/shop-top-bar/shop-lamp-bar';
import ShopSeaFoodScreen from './shop/shop-top-bar/shop-seafood-bar';
import ShopMarinadesScreen from './shop/shop-top-bar/shop-marinades-bar';
import ShopColdCutsScreen from './shop/shop-top-bar/shop-coldcuts-bar';
import ShopReadyToFryScreen from './shop/shop-top-bar/shop-ready_fry-bar';
import ShopExoticScreen from './shop/shop-top-bar/shop-exotic-bar';
import ShopRelishesScreen from './shop/shop-top-bar/shop-relishes-bar';
import ShopEggsScreen from './shop/shop-top-bar/shop-eggs-bar';
import ShopCombosScreen from './shop/shop-top-bar/shop-combos-bar';
import ShopPetFoodScreen from './shop/shop-top-bar/shop-petfood-bar';
import ShopBbqCornerScreen from './shop/shop-top-bar/shop-bbq-bar';

export default class CustomerDrawer extends Component {
    render() {
        return <AppContainer />;
    }
}

const HomeStackNavigator = createStackNavigator(
    {
        HomeNavigator: CustomerHomeScreen
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                        name="bars"
                        size={25}
                        color='black'
                    />
                ),
                headerRight: (
                    <View style={{flexDirection:'row-reverse'}}>
                    <Icon
                        style={{ paddingRight: 20 }}
                       // onPress={() => navigation.openDrawer()}
                        name="shopping-cart"
                        size={25}
                        color='black'
                    />

                    <Icon
                        style={{ paddingRight: 20 }}
                       // onPress={() => navigation.openDrawer()}
                        name="search"
                        size={25}
                    />

                   <Icon
                        style={{ paddingRight: 20 }}
                       // onPress={() => navigation.openDrawer()}
                        name="comments"
                        size={25}
                    />

                    </View>
                ),
                title: (
                    <Text style={{fontSize:15}}>FreshMeat</Text>
                ),
                headerStyle: {
                    backgroundColor: '#f1b306'
                },
                headerTintColor: 'black',
            };
        }
    }
);

const ShopStackNavigator = createStackNavigator(
    {
        ShopNavigator: ShopHomeScreen
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                        name="bars"
                        size={25}
                        color='black'
                    />
                ),
                title: (
                    <Text style={{fontSize:15}}>FreshMeat</Text>
                ),
                headerStyle: {
                    backgroundColor: '#f1b306'
                },
                headerTintColor: 'black',
            };
        }
    }
);

const OrderHistoryStackNavigator = createStackNavigator(
    {
        OrderHistoryNavigator: OrderHistoryScreen
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                        name="bars"
                        size={25}
                        color='black'
                    />
                ),
                title: (
                    <Text style={{fontSize:15}}>FreshMeat</Text>
                ),
                headerStyle: {
                    backgroundColor: '#f1b306'
                },
                headerTintColor: 'black',
            };
        }
    }
);

// const ProfileStackNavigator = createStackNavigator(
//     {
//         ProfileNavigator: CustomerProfileScreen
//     },
//     {
//         defaultNavigationOptions: ({ navigation }) => {
//             return {
//                 headerLeft: (
//                     <Icon
//                         style={{ paddingLeft: 10 }}
//                         onPress={() => navigation.openDrawer()}
//                         name="bars"
//                         size={25}
//                         color='black'
//                     />
//                 ),
//                 title: (
//                     <Text style={{fontSize:15}}>FreshMeat</Text>
//                 ),
//                 headerStyle: {
//                     backgroundColor: '#f1b306'
//                 },
//                 headerTintColor: 'black',
//             };
//         }
//     }
// );

const WishlistStackNavigator = createStackNavigator(
    {
        WishlistNavigator: CustomerWishlistScreen
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                        name="bars"
                        size={25}
                        color='black'
                    />
                ),
                title: (
                    <Text style={{fontSize:15}}>FreshMeat</Text>
                ),
                headerStyle: {
                    backgroundColor: '#f1b306'
                },
                headerTintColor: 'black',
            };
        }
    }
);

const FaqStackNavigator = createStackNavigator(
    {
        FaqNavigator: CustomerFaqScreen
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                        name="bars"
                        size={25}
                        color='black'
                    />
                ),
                title: (
                    <Text style={{fontSize:15}}>FreshMeat</Text>
                ),
                headerStyle: {
                    backgroundColor: '#f1b306'
                },
                headerTintColor: 'black',
            };
        }
    }
);

const AboutStackNavigator = createStackNavigator(
    {
        AboutNavigator: CustomerAboutScreen
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                        name="bars"
                        size={25}
                        color='black'
                    />
                ),
                title: (
                    <Text style={{fontSize:15}}>FreshMeat</Text>
                ),
                headerStyle: {
                    backgroundColor: '#f1b306'
                },
                headerTintColor: 'black',
            };
        }
    }
);

const TermsStackNavigator = createStackNavigator(
    {
        TermsNavigator: CustomerPoliciesScreen
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                        name="bars"
                        size={25}
                        color='black'
                    />
                ),
                title: (
                    <Text style={{fontSize:15}}>FreshMeat</Text>
                ),
                headerStyle: {
                    backgroundColor: '#f1b306'
                },
                headerTintColor: 'black',
            };
        }
    }
);

const ContactStackNavigator = createStackNavigator(
    {
        ContactNavigator: CustomerContactScreen
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                        name="bars"
                        size={25}
                        color='black'
                    />
                ),
                title: (
                    <Text style={{fontSize:15}}>FreshMeat</Text>
                ),
                headerStyle: {
                    backgroundColor: '#f1b306'
                },
                headerTintColor: 'black',
            };
        }
    }
);

const PersonalUpdateStackNavigator = createStackNavigator(
    {
        PersonalUpdateNavigator: UpdatePersonal
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.navigate('Profile1')}
                        name="arrow-left"
                        size={18}
                        color='black'
                    />
                ),
                title: (
                    <Text style={{fontSize:15}}>Update personal details</Text>
                ),
                headerStyle: {
                    backgroundColor: '#f1b306'
                },
                headerTintColor: 'black',
            };
        }
    }
);

const ChangePasswordStackNavigator = createStackNavigator(
    {
       ChangePasswordNavigator: ChangePassword
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.navigate('Profile1')}
                        name="arrow-left"
                        size={18}
                        color='black'
                    />
                ),
                title: (
                    <Text style={{fontSize:15}}>Change Password</Text>
                ),
                headerStyle: {
                    backgroundColor: '#f1b306'
                },
                headerTintColor: 'black',
            };
        }
    }
);

const ManageAddressStackNavigator = createStackNavigator(
    {
       ManageAddressNavigator: ManageAddress
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.navigate('Profile1')}
                        name="arrow-left"
                        size={18}
                        color='black'
                    />
                ),
                title: (
                    <Text style={{fontSize:15}}>Manage addresses</Text>
                ),
                headerStyle: {
                    backgroundColor: '#f1b306'
                },
                headerTintColor: 'black',
            };
        }
    }
);


// const LogoutStackNavigator = createStackNavigator(
//     {
//         LogoutNavigator: LogoutScreen
//     },
//     {
//         defaultNavigationOptions: ({ navigation }) => {
//             return {
//                 headerLeft: (
//                     <Icon
//                         style={{ paddingLeft: 10 }}
//                         onPress={() => navigation.openDrawer()}
//                         name="bars"
//                         size={25}
//                         color='black'
//                     />
//                 ),
//                 title: (
//                     <Text>FreshMeat</Text>
//                 ),
//                 headerStyle: {
//                     backgroundColor: '#f1b306'
//                 },
//                 headerTintColor: 'black',
//             };
//         }
//     }
// );

LogMeOut=()=>{
    Alert.alert(
        'Confirm Sign Out',
        'Do you really want to sign out?',
        [
          {
            text: 'Cancel',
          },
          { text: 'Yes', 
          onPress: () => {
              Alert.alert("Signed out")
            //   this.props.navigation.navigate('Login1');
          }}
        ],
        { cancelable: true}
      );
}

const AppDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStackNavigator,
        navigationOptions: {
            drawerIcon: (
                <Icon
                    name="home"
                    size={20}
                />
            ),
            title: 'Home'
        },
    },
    Shop: {
        screen: ShopStackNavigator,
        navigationOptions: {
            drawerIcon: (
                <Icon
                    name="shopping-bag"
                    size={20}
                />
            ),
            title: 'Shop'
        },
    },
    OrderHistory: {
        screen: OrderHistoryStackNavigator,
        navigationOptions: {
            drawerIcon: (
                <Icon
                    name="history"
                    size={20}
                />
            ),
            title: 'Order History'
        },
    },
    Profile: {
        //screen: ProfileStackNavigator,
        screen: CustomerProfileScreen,
        navigationOptions: {
            drawerIcon: (
                <Icon
                    name="user-circle"
                    size={20}
                />
            ),
            title: 'My Profile'
        },
    },
    Wishlist: {
        screen: WishlistStackNavigator,
        navigationOptions: {
            drawerIcon: (
                <Icon
                    name="heart"
                    size={20}
                />
            ),
            title: 'Wishlist'
        },
    },
    Faq: {
        screen: FaqStackNavigator,
        navigationOptions: {
            drawerIcon: (
                <Icon
                    name="question-circle"
                    size={20}
                />
            ),
            title: 'Faq'
        },
    },
    About: {
        screen: AboutStackNavigator,
        navigationOptions: {
            drawerIcon: (
                <Icon
                    name="users"
                    size={20}
                />
            ),
            title: 'About FreshMeat'
        },
    },
    Terms: {
        screen: TermsStackNavigator,
        navigationOptions: {
            drawerIcon: (
                <Icon
                    name="info-circle"
                    size={20}
                />
            ),
            title: 'Terms & Policies'
        },
    },
    Contact: {
        screen: ContactStackNavigator,
        navigationOptions: {
            drawerIcon: (
                <Icon
                    name="phone"
                    size={20}
                />
            ),
            title: 'Contact Us'
        },
    },
    // Logout: {
    //     screen: LogoutStackNavigator,
    //     navigationOptions: {
    //         drawerIcon: (
    //             <Icon
    //                 name="sign-out"
    //                 size={20}
    //             />
    //         ),
    //         title:'Sign out'
    //     },
    // },
},
    {
        drawerBackgroundColor: "#f1b306",
        contentOptions: {
            activeTintColor: 'white',
        },
        contentComponent: (props) => (
            <SafeAreaView>
                <View style={{ flexDirection: "row", height: 100, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ flex: 0.3, marginTop: 10 }}>
                        <Image source={require('../../assets/user.png')} style={{ width: 50, height: 50, borderRadius: 100 / 2,borderWidth:2,borderColor:'white' }} />
                    </View>
                    <View style={{ flex: 0.7, marginTop: 10 }}>
                        <Text style={{ fontSize: 20 }}>Profile Name</Text>
                    </View>

                </View>
                <ScrollView>
                    <DrawerItems {...props} />
                    <View
                        style={{
                            flexDirection: "row",
                            paddingLeft: 20,
                            paddingBottom: 20,
                            paddingTop:15,
                            alignItems: "center"
                        }}
                    >
                        <View style={{ flex: 1, flexDirection: "row" }}>
                            
                            <View style={{ flex: 0.2 }} >
                                <Icon
                                    name="sign-out"
                                    size={20}
                                    onPress={() => { Alert.alert('logged out') }}
                                />
                            </View>
                            <View style={{ flex: 0.8 }}>
                                <Text style={{ fontWeight: 'bold', textAlign: 'left' }}
                                    onPress={() => {LogMeOut(); }}>
                                    Sign out</Text>
                            </View>
                        </View>
                    </View>

                </ScrollView>
            </SafeAreaView>
        )
    });

const AppSwitchNavigator = createSwitchNavigator({
    Home: { screen: AppDrawerNavigator },
    Shop: { screen: AppDrawerNavigator },
    ShopChicken: { screen: ShopChickenScreen },
    ShopGoat: { screen: ShopGoatScreen },
    ShopSeaFood: { screen: ShopSeaFoodScreen },
    ShopMarinades: { screen: ShopMarinadesScreen },
    ShopColdCuts: { screen: ShopColdCutsScreen },
    ShopReadyToFry: { screen: ShopReadyToFryScreen },
    ShopExotic: { screen: ShopExoticScreen },
    ShopRelishes: { screen: ShopRelishesScreen },
    ShopEggs: { screen: ShopEggsScreen },
    ShopCombos: { screen: ShopCombosScreen },
    ShopPetFood: { screen: ShopPetFoodScreen },
    ShopBbqCorner: { screen: ShopBbqCornerScreen },
    OrderHistory: { screen: AppDrawerNavigator },
    Profile: { screen: AppDrawerNavigator },
    Wishlist: { screen: AppDrawerNavigator },
    Faq: { screen: AppDrawerNavigator },
    About: { screen: AppDrawerNavigator },
    Terms: { screen: AppDrawerNavigator },
    Contact: { screen: AppDrawerNavigator },
    //Profile1 is defined beacuse to go back  from other screens(screens go from profile and return to profile) to my profile
    Profile1: { screen: CustomerProfileScreen },
    UpdatePersonal:{screen: PersonalUpdateStackNavigator},
    ChangePassword:{screen: ChangePasswordStackNavigator},
    ManageAddress:{screen: ManageAddressStackNavigator},
    Login1:{screen: LoginPage}
    // Logout: { screen: AppDrawerNavigator }
});

const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});  