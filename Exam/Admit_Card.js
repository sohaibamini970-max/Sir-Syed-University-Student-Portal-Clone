import React, { useRef, useState,useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert, ScrollView,ActivityIndicator } from 'react-native';
import ViewShot from 'react-native-view-shot';
import RNFS from 'react-native-fs';
import Share from 'react-native-share';

export default function Admit_Card({route}) {
    const voucherRef = useRef();
    const [showVoucher, setShowVoucher] = useState(false);

     const { regNo } = route.params;
       const [user, setUser] = useState(null);
        const [loading, setLoading] = useState(true);
    
       useEffect(() => {
              if (!regNo) return;
      
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
          }, [regNo]);

    const generateVoucher = () => {
        setShowVoucher(true); // Show the voucher on screen
    };

    const downloadVoucher = async () => {
        try {
            const uri = await voucherRef.current.capture();
            const filePath = `${RNFS.DownloadDirectoryPath}/Voucher_${Date.now()}.png`;
            await RNFS.copyFile(uri, filePath);

            Alert.alert("Voucher Saved!", `Saved at ${filePath}`);
            await Share.open({ url: `file://${filePath}` });
        } catch (error) {
            console.log("Error saving voucher:", error);
            Alert.alert("Error", "Could not save voucher.");
        }
    };

    return (
        <ScrollView contentContainerStyle={{ backgroundColor: 'rgba(226,224,224,1)', flexGrow: 1, paddingTop: 20, alignItems: 'center' }}>
{loading ? (
    <ActivityIndicator size="large" />
          ) : user ? (
            <>
            <View style={{ backgroundColor: 'white', height: 50, width: '100%' }}>
                <View style={{ marginLeft: 20, flexDirection: 'row', margin: 13 }}>
                    <Text style={{ fontSize: 15, color: 'rgba(135,132,132,1)' }}>Fee</Text>
                    <Text style={{ fontSize: 15, width: 15, marginLeft: 5, color: 'rgba(135,132,132,1)' }}>•</Text>
                    <Text style={{ fontSize: 15, color: 'rgba(0,119,255,1)' }}>Print Admit Card</Text>
                </View>
            </View>

            {/* Current Voucher Info */}
            <View style={{ marginTop: 30, backgroundColor: 'white', padding: 20, width: '100%' }}>
                <Text style={{ fontSize: 20, fontWeight: '900' }}>Current Admit Card</Text>
                <TouchableOpacity
                    onPress={generateVoucher}
                    style={{
                        marginTop: 20,
                        backgroundColor: 'rgba(23,114,234,1)',
                        width: 300,
                        height: 40,
                        borderRadius: 5,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: '900' }}>Generate Current Admit Card</Text>
                </TouchableOpacity>
            </View>

            {/* Voucher Preview */}
            {showVoucher && (
                <ViewShot ref={voucherRef} options={{ format: 'png', quality: 1 }} style={{ marginTop: 20 }}>
                    <View style={{
                        padding: 20,
                        borderWidth: 1,
                        borderColor: '#ccc',
                        borderRadius: 5,
                        backgroundColor: 'white',
                        width: 400
                    }}>
                        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>SSUET</Text>
                        <Text style={{ fontSize: 18, marginVertical: 5 }}>Current Admit Card</Text>
                        <Text>Student Name: {user.name}</Text>
                        <Text>Semester: Fall 2025</Text>
                        <Text>Program: {user.program}</Text>
                        <Text>Exam Type: Mid Term</Text>
                        
                        <View style={{ marginTop:20,flexDirection:'row',marginLeft:-10,borderColor:'black',borderWidth:1,width:390,height:50,alignItems:'center',justifyContent:'center' }}>
                            <Text style={{ marginLeft: 5, fontSize: 15, width: 80,justifyContent:'center' }}>Course</Text>
                            <Text style={{ marginLeft:10,fontSize:15,width:50,justifyContent:'center' }}>Date</Text>
                            <Text style={{ marginLeft: 20, fontSize: 15, width: 60, textAlign:'center' }}>Room{'\n'}No</Text>
                            <Text style={{ marginLeft:30,fontSize:15,width:60,justifyContent:'center', }}>Time</Text>
                            <Text style={{ marginLeft:10,fontSize:15,width:60,justifyContent:'center' }}>Seat No</Text>
                        </View>
                        <View style={{flexDirection:'row',marginLeft:-10,width:390,height:150,alignItems:'center',justifyContent:'center' }}>
                            <Text style={{ fontSize: 12, width: 80,justifyContent:'flex-start' }}>Computer Organization & Assembly Language</Text>
                            <Text style={{ marginLeft: 10, fontSize: 12, width: 65, justifyContent: 'center' }}>12-2-25</Text>
                            <Text style={{ marginLeft:10,fontSize:12,width:60,textAlign:'center' }}>Hs-12</Text>
                            <Text style={{ marginLeft:20,fontSize:12,width:70,justifyContent:'center' }}>12:00-2:00</Text>
                            <Text style={{ marginLeft:10,fontSize:12,width:40,justifyContent:'center' }}>R1-C5</Text>
                        </View>
                        <View style={{marginTop:-50,flexDirection:'row',marginLeft:-10,width:390,height:150,alignItems:'center',justifyContent:'center' }}>
                            <Text style={{ fontSize: 12, width: 80,justifyContent:'flex-start' }}>Data Structure & Algorithms</Text>
                            <Text style={{ marginLeft: 10, fontSize: 12, width: 65, justifyContent: 'center' }}>13-2-25</Text>
                            <Text style={{ marginLeft:10,fontSize:12,width:60,textAlign:'center' }}>Ht-10</Text>
                            <Text style={{ marginLeft:20,fontSize:12,width:70,justifyContent:'center' }}>12:00-2:00</Text>
                            <Text style={{ marginLeft:10,fontSize:12,width:40,justifyContent:'center' }}>R1-C5</Text>
                        </View>
                        <View style={{marginTop:-50,flexDirection:'row',marginLeft:-10,width:390,height:150,alignItems:'center',justifyContent:'center' }}>
                            <Text style={{ fontSize: 12, width: 80,justifyContent:'flex-start' }}>Discrete Structures</Text>
                            <Text style={{ marginLeft: 10, fontSize: 12, width: 65, justifyContent: 'center' }}>14-2-25</Text>
                            <Text style={{ marginLeft:10,fontSize:12,width:60,textAlign:'center' }}>Hs-13</Text>
                            <Text style={{ marginLeft:20,fontSize:12,width:70,justifyContent:'center' }}>12:00-2:00</Text>
                            <Text style={{ marginLeft:10,fontSize:12,width:40,justifyContent:'center' }}>R1-C5</Text>
                        </View>
                        <View style={{marginTop:-50,flexDirection:'row',marginLeft:-10,width:390,height:150,alignItems:'center',justifyContent:'center' }}>
                            <Text style={{ fontSize: 12, width: 80,justifyContent:'flex-start' }}>Expository Writing</Text>
                            <Text style={{ marginLeft: 10, fontSize: 12, width: 65, justifyContent: 'center' }}>15-2-25</Text>
                            <Text style={{ marginLeft:10,fontSize:12,width:60,textAlign:'center' }}>Hs-11</Text>
                            <Text style={{ marginLeft:20,fontSize:12,width:70,justifyContent:'center' }}>8:00-10:00</Text>
                            <Text style={{ marginLeft:10,fontSize:12,width:40,justifyContent:'center' }}>R1-C5</Text>
                        </View>
                        <View style={{marginTop:-50,flexDirection:'row',marginLeft:-10,width:390,height:150,alignItems:'center',justifyContent:'center' }}>
                            <Text style={{ fontSize: 12, width: 80,justifyContent:'flex-start' }}>Mobile App Development</Text>
                            <Text style={{ marginLeft: 10, fontSize: 12, width: 65, justifyContent: 'center' }}>16-2-25</Text>
                            <Text style={{ marginLeft:10,fontSize:12,width:60,textAlign:'center' }}>Ht-12</Text>
                            <Text style={{ marginLeft:20,fontSize:12,width:70,justifyContent:'center' }}>2:00-4:00</Text>
                            <Text style={{ marginLeft:10,fontSize:12,width:40,justifyContent:'center' }}>R1-C5</Text>
                        </View>
                    </View>
                </ViewShot>
            )}

            {/* Download button */}
            {showVoucher && (
                <TouchableOpacity
                    onPress={downloadVoucher}
                    style={{
                        marginTop: 20,
                        backgroundColor: '#176EEA',
                        padding: 15,
                        borderRadius: 5
                    }}
                >
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Download Voucher</Text>
                </TouchableOpacity>
            )}
            </>
            ) : (
                <Text>No user data found</Text>
            )} 
            </ScrollView>
    );
}
