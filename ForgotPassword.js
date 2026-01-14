import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

export default function ForgotPassword({ navigation, route }) {
    const { registrationNo: prefilledRegNo } = route.params || {};
    const [registrationNo, setRegistrationNo] = useState(prefilledRegNo || '');
    const [email, setEmail] = useState('');

    const handleSendCode = async () => {
        if (!registrationNo || !email) {
            Alert.alert('Error', 'Please enter registration number and email');
            return;
        }

        try {
            await axios.post('http://192.168.1.107:5000/forgot-password', {
                registrationNo,
                email
            });

            Alert.alert('Success', 'Reset code sent to your email');
            navigation.navigate('Verifycode', { registrationNo });
        } catch (error) {
            console.log(error.response?.data || error.message);
            Alert.alert('Error', error.response?.data?.message || 'Server error');
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <Text>Enter Registration Number:</Text>
            <TextInput
                value={registrationNo}
                onChangeText={setRegistrationNo}
                style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
            />
            <Text>Enter Email:</Text>
            <TextInput
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
            />
            <Button title="Send Reset Code" onPress={handleSendCode} />
        </View>
    );
}
