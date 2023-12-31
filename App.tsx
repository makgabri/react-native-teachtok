import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import store from './utils/store';
import { Provider } from 'react-redux'

import Entypo from 'react-native-vector-icons/Entypo';

import HomeHeader from "./components/HomeHeader.tsx"
import Home from "./screens/Home.tsx"
import Bookmarks from "./screens/Bookmarks.tsx"
import Activity from "./screens/Activity.tsx"
import Discover from "./screens/Discover.tsx"
import Profile from "./screens/Profile.tsx"

export default function App(): JSX.Element {

  const HomeStack = createNativeStackNavigator();

  const HomeStackScreen = () => {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen  name="HomeStack" component={Home} options={{ header: (props: any) => <HomeHeader {...props} /> }} />
      </HomeStack.Navigator>
    );
  }

  const Tab = createBottomTabNavigator();

  const entypoIcon = (iconName: string, color: string, size: number): JSX.Element => { return (<Entypo name={iconName} size={size} color={color} />)}

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