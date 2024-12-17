import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './screens/WelcomeScreen';
import SigninScreen from './screens/SigninScreen';
import OtpScreen from './screens/OtpScreen';
import HomeScreen from './screens/HomeScreen';
import DiscoverScreen from './screens/DiscoverScreen';
import BlogScreen from './screens/BlogScreen';
import SettingScreen from './screens/SettingScreen';
import MindMapScreen from './screens/MindMapScreen';
// import CreateBlog from './screens/CreateBlog';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">

        <Stack.Screen name="Welcome" options={{ headerShown: false }} component={WelcomeScreen} />
        <Stack.Screen name="SignIn" options={{ headerShown: false }} component={SigninScreen} />
        <Stack.Screen name="Otp" options={{ headerShown: false }} component={OtpScreen} />
        <Stack.Screen name="HomeScreen" options={{ headerShown: false }} component={HomeScreen} />
        <Stack.Screen name="DiscoverScreen" options={{ headerShown: false }} component={DiscoverScreen} />
        <Stack.Screen name="BlogScreen" options={{ headerShown: false }} component={BlogScreen} />
        <Stack.Screen name="SettingScreen" options={{ headerShown: false }} component={SettingScreen} />
        <Stack.Screen name="MindMapScreen" options={{ headerShown: false }} component={MindMapScreen } />
        {/* <Stack.Screen name="CreateBlog" options={{ headerShown: false }} component={CreateBlog} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}
