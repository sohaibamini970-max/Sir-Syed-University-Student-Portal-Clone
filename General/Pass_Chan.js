import { View, Text, TextInput,TouchableOpacity,Alert } from 'react-native';
import {useState} from 'react'

export default function Pass_Chan({route}) {

    const { regNo } = route.params;

    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSave = async () => {
        if (!newPassword || !confirmPassword) {
            Alert.alert('Error', 'Please fill both fields');
            return;
        }

        if (newPassword !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match');
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(`http://192.168.1.107:5000/user/${regNo}/change-password`, {
                method: 'PUT', // Use PUT or PATCH
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ password: newPassword }),
            });

            const data = await response.json();

            if (response.ok) {
                Alert.alert('Success', 'Password updated successfully');
                setNewPassword('');
                setConfirmPassword('');
            } else {
                Alert.alert('Error', data.message || 'Failed to update password');
            }
        } catch (err) {
            console.log(err);
            Alert.alert('Error', 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (

            <View style={{ backgroundColor: 'rgba(226, 224, 224, 1)', marginTop: 20 }} >

                <View style={{ backgroundColor: 'white', height: 50 }} >

                    <View style={{ marginLeft: 20, flexDirection: 'row', margin: 13 }} >

                        <Text style={{ fontSize: 15, color: 'rgba(135, 132, 132, 1)' }} >General</Text>
                        <Text style={{ fontSize: 15, width: 15, marginLeft: 5, color: 'rgba(135, 132, 132, 1)' }} >•</Text>
                        <Text style={{ fontSize: 15, color: 'rgba(0, 119, 255, 1)' }} >Chnage Password</Text>

                    </View>

            </View>
                  
            <View style={{marginTop:40,backgroundColor:'white'}} >
                <View style={{margin:20}} >
                    <Text>Enter The New Password</Text>
                    <TextInput
                        value={newPassword}
                        onChangeText={setNewPassword}
                        placeholder="Enter Password"
                        style={{ width: 350, marginTop: 15, height: 40, color: 'black', borderColor: 'rgba(225, 219, 219, 1)',borderWidth:1}}
                    />
                </View>
                <View style={{margin:20}} >
                    <Text>Confirm The New Password</Text>
                    <TextInput
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        placeholder="Confirm Password"
                        style={{width:350 , marginTop:15 ,height:40,color:'black',borderColor:'rgba(225, 219, 219, 1)' , borderWidth:1,borderRadius:5}}
                    />
                </View>
                <View style={{margin:20}} >
                    <TouchableOpacity
                     onPress={handleSave}
                        disabled={loading} style={{ backgroundColor:'rgba(47, 129, 223, 1)',width:80,height:50,flexDirection:'row',borderRadius:5,alignItems:'center',justifyContent:'center' }}>
                        <Text style={{ color: 'white', fontWeight: '900' }} >{loading ? 'Saving...' : 'Save'}</Text>
                   </TouchableOpacity>
                </View>
            </View>

            </View>
            )
            }