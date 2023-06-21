import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import Login from '../screens/login';
import Password from '../screens/changePassword';

const MainStack = createStackNavigator();

export default () => (
    <MainStack.Navigator>
        <MainStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <MainStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <MainStack.Screen name='Password Reset' component={Password} />
    </MainStack.Navigator>
)