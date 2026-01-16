import React, { useState, useEffect } from 'react';
import {
    View, Text, Image, TextInput, TouchableOpacity, Alert, Keyboard, Modal, FlatList
} from 'react-native';
import api from './services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from '@react-native-community/checkbox';

export default function Login({ navigation, onLoginSuccess }) {
    const [registrationNo, setRegistrationNo] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');
    const [keyboardVisible, setKeyboardVisible] = useState(false);
    const [savedCredentials, setSavedCredentials] = useState([]);
    const [showSavedModal, setShowSavedModal] = useState(false);

    useEffect(() => {
        const showSub = Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true));
        const hideSub = Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false));
        return () => {
            showSub.remove();
            hideSub.remove();
        };
    }, []);

    const handleLogin = async () => {
        setError('');
        if (!registrationNo || !password) {
            setError('Please enter registration number and password');
            return;
        }

        try {
            const res = await api('/login', 'POST', { registrationNo, password });

            if (res.success) {
                // Save credentials if Remember Me checked
                if (rememberMe) {
                    const stored = await AsyncStorage.getItem('savedCredentials');
                    let credsArray = stored ? JSON.parse(stored) : [];

                    // Avoid duplicates
                    if (!credsArray.some(c => c.registrationNo === registrationNo)) {
                        credsArray.push({ registrationNo, password });
                        await AsyncStorage.setItem('savedCredentials', JSON.stringify(credsArray));
                    }
                }
                onLoginSuccess(res.user);
            } else {
                Alert.alert('Error', res.message || 'Invalid credentials');
            }
        } catch (error) {
            console.log(error);
            Alert.alert('Error', 'Something went wrong');
        }
    };

    const fillFromSaved = (item) => {
        setRegistrationNo(item.registrationNo);
        setPassword(item.password);
        setShowSavedModal(false); // Close popup
    };

    return (
        <View style={{ flex: 1, marginTop: keyboardVisible ? -80 : 0, alignItems: 'center' }}>
            <Image
                source={{
                    uri: 'https://www.ssuet.edu.pk/wp-content/uploads/Sir-Syed-University-of-Engineering-and-Technology.webp',
                }}
                style={{ width: 250, height: 250, marginTop: 80 }}
            />
            <Text style={{ fontSize: 20, color: 'black' }}>STUDENT PORTAL</Text>
            <Text style={{ fontSize: 13, color: 'rgba(184,176,176,1)', fontWeight: 'bold', marginBottom: 20 }}>
                Enter Your Registration No and Password
            </Text>
            <View style={{ marginTop:-0 }}>

            <TextInput
                placeholder="Registration No"
                placeholderTextColor={'rgba(186,179,179,1)'}
                value={registrationNo}
                    onFocus={async () => {
                        // Load saved credentials from AsyncStorage
                        try {
                            const stored = await AsyncStorage.getItem('savedCredentials');
                            if (stored) {
                                const credsArray = JSON.parse(stored);
                                if (credsArray.length > 0) {
                                    setSavedCredentials(credsArray);
                                    setShowSavedModal(true); // Show popup only on focus
                                }
                            }
                        } catch (error) {
                            console.log(error);
                        }
                    }}
                onChangeText={setRegistrationNo}
                style={{ borderWidth: 1, width: 350, padding: 10, borderRadius: 5, color: 'black', marginBottom: 20,borderColor:'rgb(225, 224, 224)' }}
                />
            <TextInput
                placeholder="Password"
                placeholderTextColor={'rgba(186,179,179,1)'}
                secureTextEntry
                    onFocus={async () => {
                        // Load saved credentials from AsyncStorage
                        try {
                            const stored = await AsyncStorage.getItem('savedCredentials');
                            if (stored) {
                                const credsArray = JSON.parse(stored);
                                if (credsArray.length > 0) {
                                    setSavedCredentials(credsArray);
                                    setShowSavedModal(true); // Show popup only on focus
                                }
                            }
                        } catch (error) {
                            console.log(error);
                        }
                    }}
                value={password}
                onChangeText={setPassword}
                style={{ borderWidth: 1, width: 350, padding: 10, borderRadius: 5, color: 'black', marginBottom: 20, borderColor: 'rgb(225, 224, 224)' }}
            />
          </View>

            {error ? <Text style={{ color: 'red', marginBottom: 10 }}>{error}</Text> : null}

            <View style={{ flexDirection: 'row', width: 350, alignItems: 'center', marginBottom: 30 }}>
                <CheckBox value={rememberMe} onValueChange={setRememberMe} tintColors={{ true: '#007BFF', false: '#000' }} />
                <Text style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 12, color: 'rgba(184,176,176,1)' }}>
                    Remember Me
                </Text>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Forgotpassword', { registrationNo })}
                        style={{ alignSelf: 'flex-end' }}
                    >
                        <Text style={{ color: '#007BFF' }}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity
                onPress={handleLogin}
                style={{
                    backgroundColor: '#0088FF',
                    width: 150,
                    height: 60,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft:200
                }}
            >
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>Login</Text>
            </TouchableOpacity>

            {/* Saved Credentials Popup */}
            <Modal visible={showSavedModal} transparent animationType="slide">
                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{ width: 300, backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
                        <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>Saved Credentials</Text>
                        <FlatList
                            data={savedCredentials}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    onPress={() => fillFromSaved(item)}
                                    style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}
                                >
                                    <Text>{item.registrationNo}</Text>
                                </TouchableOpacity>
                            )}
                        />
                        <TouchableOpacity
                            onPress={() => setShowSavedModal(false)
                               }
                            style={{ alignItems: 'center', marginTop: 10 }}
                        >
                            <Text style={{ color: 'blue' }}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
 
