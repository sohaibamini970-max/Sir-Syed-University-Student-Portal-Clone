import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import TeacherAppStack from './TeacherAppStack';

export default function App() {
    const [loggedInUser, setLoggedInUser] = useState(null);

    const handleLogout = () => {
        setLoggedInUser(null);
    };

    const role = loggedInUser?.role?.trim().toLowerCase() || 'student';
    console.log('Logged In User:', loggedInUser);
    console.log('Normalized Role:', role);
    return (
        <NavigationContainer>
            {!loggedInUser ? (
                <AuthStack onLoginSuccess={setLoggedInUser} />
            ) : role === 'teacher' ? (
                <TeacherAppStack loggedInUser={loggedInUser} onLogout={handleLogout} />
            ) : (
                <AppStack loggedInUser={loggedInUser} onLogout={handleLogout} />
            )}
        </NavigationContainer>
    );
}
