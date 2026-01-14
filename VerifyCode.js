import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

export default function VerifyCode({ route, navigation }) {
    const { registrationNo } = route.params;
    const [code, setCode] = useState('');

    const handleVerifyCode = async () => {
        if (!code) {
            Alert.alert('Error', 'Please enter the code');
            return;
        }

        try {
            await axios.post('http://192.168.1.101:5000/verify-reset-code', {
                registrationNo,
                code
            });

            Alert.alert('Success', 'Code verified');
            navigation.navigate('Resetpassword', { registrationNo, code });
        } catch (error) {
            console.log(error.response?.data || error.message);
            Alert.alert('Error', error.response?.data?.message || 'Server error');
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <Text>Enter the code sent to your email:</Text>
            <TextInput
                value={code}
                onChangeText={setCode}
                keyboardType="numeric"
                style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
            />
            <Button title="Verify Code" onPress={handleVerifyCode} />
        </View>
    );
}
