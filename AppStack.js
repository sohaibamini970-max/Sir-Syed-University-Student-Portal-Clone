import React, { useState, useRef } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RightSidebar from './components/RightSidebar';
import StackNavigator from './navigation/StackNavigator';

export default function AppStack({ loggedInUser,onLogout }) {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [rightSidebarVisible, setRightSidebarVisible] = useState(false);
  const navigationRef = useRef();

  return (
    <View style={{ flex: 1 }} ref={navigationRef}>
      {/* Header */}
      <Header
        toggleSidebar={() => setSidebarVisible(true)}
        toggleRightSidebar={() => setRightSidebarVisible(true)}
      />

      {/* Main Pages */}
      <StackNavigator regNo={loggedInUser.registrationNo} />

      {/* LEFT SIDEBAR OVERLAY */}
      {sidebarVisible && (
        <TouchableWithoutFeedback onPress={() => setSidebarVisible(false)}>
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.2)',
              zIndex: 1,
            }}
          />
        </TouchableWithoutFeedback>
      )}

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
              backgroundColor: 'transparent',
              zIndex: 1,
            }}
          />
        </TouchableWithoutFeedback>
      )}

      {/* Sidebars */}
      <Sidebar
        navigation={navigationRef.current}
        isVisible={sidebarVisible}
        closeSidebar={() => setSidebarVisible(false)}
        regNo={loggedInUser.registrationNo}
      />

      <RightSidebar
        isVisible={rightSidebarVisible}
        closeSidebar={() => setRightSidebarVisible(false)}
        regNo={loggedInUser.registrationNo} // dynamically fetch user data
        onLogout={onLogout}
      />
    </View>
  );
}
