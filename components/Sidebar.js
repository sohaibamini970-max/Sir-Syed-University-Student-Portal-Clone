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

export default function Sidebar({ isVisible, closeSidebar,regNo }) {
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
                    navigation.navigate('Home', { regNo });
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



                <TouchableOpacity onPress={() => toggleExpand('general')}>
                <View style={{ flexDirection:'row' }} >

                        <Image
                            source={require('../assets/images/menu.png')}
                            style={{ width: 20, height: 20, marginTop: 12 }}
                        />


                    <Text style={styles.link}>General</Text>
                <Image
                    source={require('../assets/images/arrow (1).png')}
                    style={{ height: 22, width: 20, margin: 10, marginLeft: 123, transform: [{ rotate: expanded === 'general' ? '90deg' : '0deg' }], }}
                    />
                </View>
                </TouchableOpacity>


                {expanded === 'general' && (
                    <View style={styles.subMenu}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('TimeTable', { regNo });
                            closeSidebar();
                            setExpanded(null);
                        }}
                        >
                            <View style={{ marginTop: 20, flexDirection: 'row' }} >
                            <Text style={styles.dot} >•</Text>
                            <Text style={styles.subLink}>TimeTable</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Attendance', { regNo });
                            closeSidebar();
                            setExpanded(null);
                        }}
                            >
                            <View style={{marginTop:25,flexDirection:'row'}} >
                                <Text style={styles.dot} >•</Text>
                            <Text style={styles.subLink}>Attendance</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => goTo('RoadMap')}>
                            <View style={{marginTop:25,flexDirection:'row'}} >
                                <Text style={styles.dot} >•</Text>
                            <Text style={styles.subLink}>Road Map</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                        navigation.navigate('Pass_Chan', { regNo });
                        closeSidebar();
                        setExpanded(null);
                        }}

                            >
                            <View style={{marginTop:25,flexDirection:'row'}} >
                                <Text style={styles.dot} >•</Text>
                            <Text style={styles.subLink}>Change Password</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => goTo('Annoucements')}>
                            <View style={{marginTop:25,flexDirection:'row'}} >
                                <Text style={styles.dot} >•</Text>
                            <Text style={styles.subLink}>Annoucements</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}

                {/* ===== COURSE ===== */}
                <TouchableOpacity onPress={() => toggleExpand('course')}>



                    <View style={{ flexDirection: 'row' }} >
                    <Image
                        source={require('../assets/images/homework.png')}
                        style={{ width: 20, height: 20, marginTop: 12 }}
                    />
                        <Text style={styles.link}>Course</Text>
                        <Image
                            source={require('../assets/images/arrow (1).png')}
                            style={{ height: 22, width: 20, margin: 10, marginLeft: 130, transform: [{ rotate: expanded === 'course' ? '90deg' : '0deg' }], }}
                        />
                    </View>
                </TouchableOpacity>

                {expanded === 'course' && (
                    <View style={styles.subMenu}>
                        <TouchableOpacity onPress={() => goTo('MyCourse')}>
                            <View style={{ flexDirection: 'row',marginTop:5 }} >
                                <Text style={styles.dot} >•</Text>
                            <Text style={styles.subLink}>My Courses</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}

                {/* ===== REGISTRATION ===== */}
                <TouchableOpacity onPress={() => toggleExpand('registration')}>
                    <View style={{ flexDirection: 'row' }} >

                        <Image
                            source={require('../assets/images/checked.png')}
                            style={{ width: 20, height: 20, marginTop: 12 }}
                        />


                        <Text style={styles.link}>Registration</Text>
                        <Image
                            source={require('../assets/images/arrow (1).png')}
                            style={{ height: 22, width: 20, margin: 10, marginLeft: 82, transform: [{ rotate: expanded === 'registration' ? '90deg' : '0deg' }], }}
                        />
                    </View>
                </TouchableOpacity>

                {expanded === 'registration' && (
                    <View style={styles.subMenu}>
                        <TouchableOpacity onPress={() => goTo('Registration')}>
                            <View style={{ flexDirection:'row',marginTop:5 }} >
                                <Text style={styles.dot} >•</Text>
                            <Text style={styles.subLink}>Registration Online</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}

                {/* ===== FEE ===== */}
                <TouchableOpacity onPress={() => toggleExpand('fee')}>

                    <View style={{ flexDirection: 'row' }} >
                    <Image
                        source={require('../assets/images/hand.png')}
                        style={{ width: 20, height: 20, marginTop: 12 }}
                    />
                        <Text style={styles.link}>Fee</Text>
                        <Image
                            source={require('../assets/images/arrow (1).png')}
                            style={{ height: 22, width: 20, margin: 10, marginLeft: 160, transform: [{ rotate: expanded === 'fee' ? '90deg' : '0deg' }], }}
                        />
                    </View>
                </TouchableOpacity>

                {expanded === 'fee' && (
                    <View style={styles.subMenu}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('CurrentVoucher', { regNo });
                            closeSidebar();
                            setExpanded(null);
                        }}>
                            <View style={{ flexDirection: 'row'}} >
                                <Text style={styles.dot} >•</Text>
                                <Text style={styles.subLink}>Generate Current Fee{'\n'} Voucher</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}

                {/* ===== EXAM ===== */}
                <TouchableOpacity onPress={() => toggleExpand('exam')}>
                    <View style={{ flexDirection: 'row' }} >

                        <Image
                            source={require('../assets/images/exam.png')}
                            style={{ width: 20, height: 20, marginTop: 12 }}
                        />

                        <Text style={styles.link}>Exam</Text>
                        <Image
                            source={require('../assets/images/arrow (1).png')}
                            style={{ height: 22, width: 20, margin: 10, marginLeft: 142, transform: [{ rotate: expanded === 'exam' ? '90deg' : '0deg' }], }}
                        />
                    </View>
                </TouchableOpacity>

                {expanded === 'exam' && (
                    <View style={styles.subMenu}>
                        <TouchableOpacity
                         onPress={() => {
                            navigation.navigate('Transcript', { regNo });
                            closeSidebar();
                            setExpanded(null);
                        }}

                            >
                            <View style={{ flexDirection: 'row', marginTop: 20 }} >
                                <Text style={styles.dot} >•</Text>
                                <Text style={styles.subLink}>Print Unofficial Transcript</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Assessment', { regNo });
                            closeSidebar();
                            setExpanded(null);
                        }}>
                            <View style={{ marginTop: 25, flexDirection: 'row' }}>
                                <Text style={styles.dot}>•</Text>
                                <Text style={styles.subLink}>Assesstment Result</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Admit_Card', { regNo });
                            closeSidebar();
                            setExpanded(null);
                        }}
                            >
                            <View style={{ marginTop: 25, flexDirection: 'row'}}>
                                <Text style={styles.dot}>•</Text>
                                <Text style={styles.subLink}>Print Admit Card</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}

            </View>
        </Animated.View>
    );
}
