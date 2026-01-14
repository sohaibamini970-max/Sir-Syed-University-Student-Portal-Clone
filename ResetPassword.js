import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

export default function ResetPassword({ route, navigation }) {
    const { registrationNo, code } = route.params;
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleResetPassword = async () => {
        if (!newPassword || !confirmPassword) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        if (newPassword !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match');
            return;
        }

        try {
            await axios.put('http://192.168.1.107 :5000/reset-password', {
                registrationNo,
                code,
                newPassword
            });

            Alert.alert('Success', 'Password reset successfully');
            navigation.navigate('Login');
        } catch (error) {
            console.log(error.response?.data || error.message);
            Alert.alert('Error', error.response?.data?.message || 'Server error');
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <Text>Enter New Password:</Text>
            <TextInput
                value={newPassword}
                onChangeText={setNewPassword}
                secureTextEntry
                style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
            />
            <Text>Confirm New Password:</Text>
            <TextInput
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
            />
            <Button title="Reset Password" onPress={handleResetPassword} />
        </View>
    );
}
