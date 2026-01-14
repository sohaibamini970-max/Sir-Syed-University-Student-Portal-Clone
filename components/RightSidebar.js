import React, { useRef, useEffect, useState } from 'react';
import { Animated, View, Text, Image, ActivityIndicator, Dimensions, TouchableOpacity } from 'react-native';
import styles from '../styles/commonStyles';
import {useNavigation} from '@react-navigation/native'

const screenWidth = Dimensions.get('window').width;


export default function RightSidebar({ isVisible, closeSidebar, regNo,onLogout }) {
   const navigation = useNavigation();

    const sidebarWidth = screenWidth * 0.7; // 70% of screen width
    const slideAnim = useRef(new Animated.Value(sidebarWidth)).current; // start off-screen right
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!isVisible) return;

        setLoading(true);

        fetch(`http://192.168.1.107:5000/user/${regNo}`)
            .then(res => res.json())
            .then(data => {
                console.log("API RESPONSE:", data);
                setUser(data);
                setLoading(false);
            })
            .catch(err => {
                console.log("FETCH ERROR:", err);
                console.log(err);
                setLoading(false);
            });
    }, [isVisible, regNo]);


    useEffect(() => {
        if (isVisible) {
            // Slide in from right
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
        } else {
            // Slide out to right
            Animated.timing(slideAnim, {
                toValue: sidebarWidth,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    }, [isVisible, slideAnim, sidebarWidth]);

    return (
        <Animated.View
            style={[
                {
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    width: sidebarWidth,
                    backgroundColor: 'white',
                    zIndex: 1000,
                    padding: 20,
                    shadowColor: '#000',
                    shadowOffset: { width: -2, height: 0 },
                    shadowOpacity: 0.3,
                    shadowRadius: 5,
                    elevation: 5,
                    transform: [{ translateX: slideAnim }],
                },
            ]}
        >
            {loading ? (
                <ActivityIndicator size="large" />
            ) : user ? (
                
                <View style={{ alignItems: 'center' }}>
                    <Image
                            source={{ uri: user.profilepic }}
                        style={{ width: 200, height: 200, borderRadius: 100, marginBottom: 20 }}
                    />
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{user.name}</Text>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }} >{user.program}</Text>

                    <View>
                        <TouchableOpacity style={{backgroundColor:'rgba(31, 103, 226, 1)',borderRadius:5,width:100,height:50,alignItems:'center',justifyContent:'center',marginTop:20,marginRight:140}}
                        onPress={()=>{
                            closeSidebar();
                            onLogout();
                        }} >
                            <Text style={{color:'white',fontWeight:'900'}} >SignOut</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                       
                        <TouchableOpacity style={{backgroundColor:'rgba(31, 103, 226, 1)',borderRadius:5,width:150,height:50,alignItems:'center',justifyContent:'center',marginTop:20,marginRight:90}}
                                onPress={() => {
                                    navigation.navigate('Pass_Chan', { regNo });
                                    closeSidebar();
                                }}
                       >
                            <Text style={{color:'white',fontWeight:'900'}} >Change Password</Text>
                        </TouchableOpacity>
                    </View>
                </View>
             ) : (
                <Text>User not found</Text>
            )} 
        </Animated.View>
    );
}
