import React, { useEffect, useRef } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import store from './utils/store';
import { Provider } from 'react-redux'

import Entypo from 'react-native-vector-icons/Entypo';

import HomeHeader from "@components/HomeHeader.js"
import Home from "@screens/Home.js"
import Bookmarks from "@screens/Bookmarks.js"
import Activity from "@screens/Activity.js"
import Discover from "@screens/Discover.js"
import Profile from "@screens/Profile.js"


export default function App() {

  const HomeStack = createNativeStackNavigator();

  function HomeStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen  name="HomeStack" component={Home} options={{ header: (props) => <HomeHeader {...props} /> }} />
      </HomeStack.Navigator>
    );
  }

  const Tab = createBottomTabNavigator();

  const entypoIcon = (iconName, color, size) => { return (<Entypo name={iconName} size={size} color={color} />)}

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ tabBarStyle: { backgroundColor: "black" }, tabBarActiveTintColor: "white" }}>
          <Tab.Screen name="Home" component={HomeStackScreen} options={{ headerShown: false, tabBarLabel: 'Home', tabBarIcon: ({ color, size }) => entypoIcon("home", color, size) }}/>
          <Tab.Screen name="Discover" component={Discover} options={{ tabBarLabel: 'Discover', tabBarIcon: ({ color, size }) => entypoIcon("compass", color, size) }}/>
          <Tab.Screen name="Activity" component={Activity} options={{ tabBarLabel: 'Activity', tabBarIcon: ({ color, size }) => entypoIcon("stopwatch", color, size) }}/>
          <Tab.Screen name="Bookmarks" component={Bookmarks} options={{ tabBarLabel: 'Bookmarks', tabBarIcon: ({ color, size }) => entypoIcon("bookmark", color, size) }}/>
          <Tab.Screen name="Profile" component={Profile} options={{ tabBarLabel: 'Profile', tabBarIcon: ({ color, size }) => entypoIcon("user", color, size) }}/>
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
