import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Login from "../screens/Login";
import CreateAccount from '../screens/CreateAccount';
import FirstTest from '../screens/FirstTest';
import Menu from '../screens/Menu';
import AvailableTests from '../screens/AvailableTests';
import Test from '../screens/Test';
import Test2 from '../screens/Test2';
import Test3 from '../screens/Test3';
import Test4 from '../screens/Test4';
import Results from '../screens/Results';
import MyStats from '../screens/MyStats';
import Settings from '../screens/Settings';
import GetHelp from '../screens/GetHelp';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false}}>

            <Stack.Screen
                name = 'Login'
                component={Login}/>

            <Stack.Screen
                name = 'CreateAccount'
                component={CreateAccount}/>

            <Stack.Screen
                name = 'FirstTest'
                component={FirstTest}/>

            <Stack.Screen
                name = 'Menu'
                component={Menu}/>

            <Stack.Screen
                name = 'AvailableTests'
                component={AvailableTests}/>

            <Stack.Screen
                name = 'Test'
                component={Test}/>

            <Stack.Screen
                name = 'Test2'
                component={Test2}/>

            <Stack.Screen
                name = 'Test3'
                component={Test3}/>

            <Stack.Screen
                name = 'Test4'
                component={Test4}/>

            <Stack.Screen
                name = 'Results'
                component={Results}/>

            <Stack.Screen
                name = 'MyStats'
                component={MyStats}/>

            <Stack.Screen
                name = 'Settings'
                component={Settings}/>

            <Stack.Screen
                name = 'GetHelp'
                component={GetHelp}/>

        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStack;
