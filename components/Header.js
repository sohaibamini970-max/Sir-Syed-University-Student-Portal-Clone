import React from 'react';
import { View, TouchableOpacity,Image } from 'react-native';

export default function Header({ toggleSidebar, toggleRightSidebar }) {
    return (
        <View style={{ backgroundColor: 'white', flexDirection: 'row',height:80 }}>
            <View style={{alignItems:'center',justifyContent:'center'}} >
            <Image
                source={{
                    uri: 'https://www.ssuet.edu.pk/wp-content/uploads/SSUET-Official-Logo.webp'
                }}
                style={{ width: 180, height: 53, marginLeft:20}}
                />
                </View>

            <View style={{ justifyContent: 'center',marginLeft:120,flexDirection:"row",marginTop:8 }} >
                <TouchableOpacity onPress={toggleRightSidebar}>
                    <Image
                        source={require('../assets/images/menu (2).png')}
                        style={{ width: 30, height: 40,marginTop:10 }}
                    />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleSidebar}>
                    <Image
                        source={require('../assets/images/bars.png')}
                        style={{ width: 30, height: 40,marginLeft:18,marginTop:10 }}
                    />
            </TouchableOpacity>

</View>
        </View>
    );
}
