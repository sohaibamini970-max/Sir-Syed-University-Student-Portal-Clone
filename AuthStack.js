import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Login';
import ForgotPassword from './ForgotPassword';
import VerifyCode from './VerifyCode';
import ResetPassword from './ResetPassword';

const Stack = createStackNavigator();

export default function AuthStack({ onLoginSuccess, handleLogout }) {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login">
                {props => (
                    <Login
                        {...props}
                        onLoginSuccess={onLoginSuccess}
                        onLogout={handleLogout}
                    />
                )}
            </Stack.Screen>

            <Stack.Screen name="Forgotpassword" component={ForgotPassword} />
            <Stack.Screen name="Verifycode" component={VerifyCode} />
            <Stack.Screen name="Resetpassword" component={ResetPassword} />
        </Stack.Navigator>
    );
}
