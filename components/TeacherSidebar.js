import React, { useRef, useEffect, useState } from 'react';
import {
    Animated,
    Text,
    TouchableOpacity,
    Dimensions,
    View,
    Image,
} from 'react-native';
import styles from '../styles/commonStyles';
import { useNavigation } from '@react-navigation/native';
 

const screenWidth = Dimensions.get('window').width;

export default function TeacherSidebar({ isVisible, closeSidebar,regNo }) {
    const navigation = useNavigation(); 
    const slideAnim = useRef(new Animated.Value(-screenWidth * 0.7)).current;

    // 👇 state to control expanded menus
    const [expanded, setExpanded] = useState(null);

    useEffect(() => {
        slideAnim.stopAnimation();

        if (isVisible) {
            // 🔥 INSTANT OPEN
            slideAnim.setValue(0);
        } else {
            // 🔥 FAST CLOSE (optional)
            Animated.timing(slideAnim, {
                toValue: -screenWidth * 0.7,
                duration: 80,
                useNativeDriver: true,
            }).start();
        }
    }, [isVisible, slideAnim]);

    const toggleExpand = (menu) => {
        setExpanded(expanded === menu ? null : menu);
    };

    const goTo = (screen) => {
        navigation.navigate(screen);
        closeSidebar();
        setExpanded(null);
    };

    return (
        <Animated.View
            style={[styles.sidebar, { transform: [{ translateX: slideAnim }] }]}
        >
            {/* Logo */}
            <View style={{flexDirection:'row'}} >
                <Image
                    source={{
                        uri: 'https://www.ssuet.edu.pk/wp-content/uploads/SSUET-Official-Logo.webp',
                    }}
                    style={{ width: 180, height: 53, marginLeft: -10 }}
                />
                {/* CLOSE */}
                <TouchableOpacity onPress={closeSidebar} style={{ marginTop: 30 }}>
                    <Image
                        source={require('../assets/images/slide-left.png')}
                        style={{ width: 30, height: 30,marginTop:-20 , marginLeft:60 }}
                    />
                </TouchableOpacity>
            </View>


            <View style={{ marginTop: 60 }}>

                {/* ===== GENERAL ===== */}

                <TouchableOpacity onPress={() => {
                    navigation.navigate('TeacherHome', { regNo });
                    closeSidebar();
                    setExpanded(null);
                }}>
                <View style={{ flexDirection:'row' }} >

                    <Image
                    source={require('../assets/images/layers (1).png')}
                    style={{width:20, height:20,marginTop:12}}
                    />

                        <Text style={{ fontSize: 18, marginVertical: 10, marginLeft: 10 }}>Dashboard</Text>
                </View>
                </TouchableOpacity>


                <TouchableOpacity onPress={() =>
                    {
                        navigation.navigate('TeacherAttendance',{regNo});
                        closeSidebar();
                        setExpanded();
                    }
                 }
                >
                <View style={{ flexDirection:'row' }} >

                        <Image
                            source={require('../assets/images/menu.png')}
                            style={{ width: 20, height: 20, marginTop: 12 }}
                        />

                <Text style={styles.link}>Attendance</Text>
                </View>
                </TouchableOpacity>

                {/* ===== ASSESSMENT ===== */}
                <TouchableOpacity onPress={() => 
                    {
                        navigation.navigate('TeacherAssessment',{regNo});
                        closeSidebar();
                        setExpanded();
                    }
                }>

                    <View style={{ flexDirection: 'row' }} >
                    <Image
                        source={require('../assets/images/homework.png')}
                        style={{ width: 20, height: 20, marginTop: 12 }}
                    />
                        <Text style={styles.link}>Assessment</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </Animated.View>
    );
}
