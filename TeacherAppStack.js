import React, { useState, useRef } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import Header from './components/Header';
import TeacherSidebar from './components/TeacherSidebar';
import RightSidebar from './components/RightSidebar';
import TeacherStackNavigator from './navigation/TeacherStackNavigator';

export default function TeacherAppStack({ loggedInUser, onLogout }) {
    const [sidebarVisible, setSidebarVisible] = useState(false);
      const [rightSidebarVisible, setRightSidebarVisible] = useState(false);
    const navigationRef = useRef();

    return (
        <View style={{ flex: 1 }} ref={navigationRef}>
            <Header toggleSidebar={() => setSidebarVisible(true)}
                toggleRightSidebar={() => setRightSidebarVisible(true)} />

            {/* Teacher Pages */}
            <TeacherStackNavigator teacherId={loggedInUser.registrationNo} />

            {sidebarVisible && (
                <TouchableWithoutFeedback onPress={() => setSidebarVisible(false)}>
                    <View style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0,0,0,0.2)',
                    }} />
                </TouchableWithoutFeedback>
            )}

            <TeacherSidebar
                navigation={navigationRef.current}
                isVisible={sidebarVisible}
                closeSidebar={() => setSidebarVisible(false)}
                regNo={loggedInUser.registrationNo}
            />

            {/* RIGHT SIDEBAR OVERLAY */}
            {rightSidebarVisible && (
                <TouchableWithoutFeedback onPress={() => setRightSidebarVisible(false)}>
                    <View
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0,0,0,0.2)',
                            zIndex: 5,
                        }}
                    />
                </TouchableWithoutFeedback>
            )}


             <RightSidebar
                    isVisible={rightSidebarVisible}
                    closeSidebar={() => setRightSidebarVisible(false)}
                    regNo={loggedInUser.registrationNo} // dynamically fetch user data
                    onLogout={onLogout}
             />
        </View>
    );
}
