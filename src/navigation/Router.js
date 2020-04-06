import React, { useState } from 'react';

import { TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native'

import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

import LinearGradient from 'react-native-linear-gradient';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';


// importing screens
import { LoginScreen, HomeScreen, SplashScreen, ProfileScreen } from '../components/screens';
import Animated from 'react-native-reanimated';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
            <View style={{
                flex: 1,
            }}>

                <View style={{
                    flex: 0.4,
                    margin: 40,
                    justifyContent: 'flex-end',
                }}>
                    <Image
                        source={{
                            uri: 'https://lh3.googleusercontent.com/WuSlXduDz2RrzLrDGD2pnf3vy6iEiZzBbAgOpHN652FI7OHzwHzBhJWDVY2FtvFN-A=w220',
                            height: 80,
                            width: 80,
                            scale: 0.5,
                        }}
                        resizeMode="center"
                        style={styles.avatar}
                    />
                    <Text style={{
                        color: 'white'
                    }} >
                        Splitter
                         </Text>
                    <Text style={{
                        fontSize: 9,
                        color: 'white'
                    }} >
                        ankitpuri@zapbuild.com
                             </Text>
                </View>
                <View>
                    <DrawerItem
                        labelStyle={styles.drawerLabel}
                        style={styles.drawerItem}
                        label="Dashboard"
                        onPress={() => props.navigation.navigate("HomeScreen2")}
                        icon={() => <AntDesign name="dashboard" color="white" size={16} />}
                    />
                    <DrawerItem
                        labelStyle={styles.drawerLabel}
                        style={styles.drawerItem}
                        label="Profile"
                        icon={() => <AntDesign name="message1" color="white" size={16} />}
                        onPress={() => props.navigation.navigate("ProfileScreen")}
                    />
                    <DrawerItem
                        labelStyle={styles.drawerLabel}
                        style={styles.drawerItem}
                        label="Logout"
                        icon={() => <AntDesign name="logout" color="white" size={16} />}
                        onPress={() => props.navigation.navigate("ProfileScreen")}
                    />
                </View>
            </View>
        </DrawerContentScrollView>
    );
}

const DrawerScreens = ({ props, style }) => {

    return (
        <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
            <Stack.Navigator
                screenOptions={{
                    headerTransparent: true,
                    headerTitle: null,
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => {
                                props.navigation.openDrawer();
                            }}
                            style={{

                            }}>
                            <Feather name="menu"
                                size={25}
                                color="black"
                                style={{ paddingHorizontal: 10 }} />
                        </TouchableOpacity>
                    ),
                }}>
                 <Stack.Screen name="HomeScreen2">{props => <HomeScreen {...props} />}</Stack.Screen>
                <Stack.Screen name="ProfileScreen">{props => <ProfileScreen {...props} />}</Stack.Screen>
            </Stack.Navigator>
        </Animated.View>
    )
}

const drawer = (props) => {
    const [progress, setProgress] = useState(new Animated.Value(0))

    const scale = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [1, 0.8],
    });

    const borderRadius = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [0, 16],
    });

    const animatedStyle = { borderRadius:borderRadius, transform: [{ scale }] };
    return (
        <LinearGradient
            colors={['red', 'blue']}
            style={{
                flex: 1,
                backgroundColor: 'red'
            }}>
            <Drawer.Navigator
                drawerContent={props => {
                    setProgress(props.progress)
                    return <DrawerContent {...props} />
                }}
                initialRouteName="Home"
                overlayColor="transparent"
                contentContainerStyle={{ flex: 1 }}
                drawerContentOptions={{
                    activeBackgroundColor: 'transparent',
                    activeTintColor: 'white',
                    inactiveTintColor: 'white',
                }}
                drawerStyle={{
                    flex: 1, width: '50%', backgroundColor: 'transparent'
                }}
                sceneContainerStyle={{ backgroundColor: 'transparent' }}
                drawerType={"slide"}>
                <Drawer.Screen name="Screens">
                    {props => {
                        return <DrawerScreens props={props} style={animatedStyle} />
                    }
                    }
                </Drawer.Screen>
            </Drawer.Navigator>
        </LinearGradient>
    )
}

const Router = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator
                screenOptions={{
                    headerTransparent: true,
                    headerTitle: null,

                }}
            >
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="HomeScreen" component={drawer} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    stack: {
        flex: 1,
        shadowColor: '#FFF',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 5,
    },
    drawerStyles: { flex: 1, width: '50%', backgroundColor: 'transparent' },
    drawerItem: { alignItems: 'flex-start', marginVertical: 0 },
    drawerLabel: { color: 'white', marginLeft: -16 },
    avatar: {
        borderRadius: 60,
        marginBottom: 16,
        borderWidth: StyleSheet.hairlineWidth,
    },
});

export default Router