import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from "@react-navigation/stack";
import Icon from 'react-native-vector-icons/FontAwesome5';

import Home from "./pages/Home";
import Categoria from "./pages/Categoria";
import Tipo from "./pages/Tipo";
import Marca from "./pages/Marca";

import Detail from "./components/detail";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Voltar"
                component={HomeTabs}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="Detail"
                component={Detail} />
        </Stack.Navigator>

    )
}

function HomeTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: true,
                tabBarActiveTintColor: "#414BB2",
                tabBarInactiveTintColor: "#808080",
                tabBarActiveBackgroundColor: 'transparent',
                tabBarInactiveBackgroundColor: 'transparent',
                tabBarStyle: {
                    paddingTop: 5,
                    paddingBottom: 5
                },
                tabBarLabelStyle: {
                    fontSize: 9,
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                }
            }}
        >
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Icon name="home" size={size} color={color} />
                    )
                }}

            />
            <Tab.Screen name="Categoria" component={Categoria} 
            options={{
                tabBarIcon: ({ size, color }) => (
                    <Icon name="spa" size={size} color={color} />
                )
            }}
            />
            <Tab.Screen name="Tipo" component={Tipo}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Icon name="paint-brush" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen name="Marca" component={Marca}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Icon name="tag" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}