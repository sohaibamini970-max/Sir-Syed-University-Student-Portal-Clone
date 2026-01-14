import { View, Text, ActivityIndicator } from 'react-native';
import React, {useState,useEffect} from 'react'

export default function TimeTable({ route }){

     const { regNo } = route.params;
       const [user, setUser] = useState(null);
        const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        if (!regNo) return;

        const fetchUser = async () => {
            try {
                setLoading(true);
                const res = await fetch(`http://192.168.1.107:5000/user/${regNo}`);
                const data = await res.json();
                setUser(data);
            } catch (err) {
                console.log("FETCH ERROR:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [regNo]);


    return(
        <View style={{ backgroundColor: 'rgba(235, 233, 233, 1)' }}>
        {loading ? (
             <ActivityIndicator size="large" />
                 ) : user ? (
            <>
          
            <View style={{ backgroundColor: 'white', height: 50 }} >

                <View style={{ marginLeft: 20, flexDirection: 'row', margin: 13 }} >

                    <Text style={{ fontSize: 15, color: 'rgba(135, 132, 132, 1)' }} >General</Text>
                    <Text style={{ fontSize: 15, width: 15, marginLeft: 5, color: 'rgba(135, 132, 132, 1)' }} >•</Text>
                    <Text style={{ fontSize: 15, color: 'rgba(0, 119, 255, 1)' }} >TimeTable</Text>

                </View>

            </View>

    <View style={{}}>

                <View style={{ backgroundColor: 'rgba(0, 102, 255, 1)', height: 50, flexDirection: 'row', alignItems: 'center' }}>

            <View style={{ width: 70, marginLeft: 10 }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Cource Title</Text>
            </View>
            <View style={{ width: 60, marginLeft: 10 }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Mon</Text>
            </View>
            <View style={{ width: 60, marginLeft: 10 }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Tue</Text>
            </View>
            <View style={{ width: 60, marginLeft: 10 }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Wed</Text>
            </View>
            <View style={{ width: 60, marginLeft: 10 }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Thu</Text>
            </View>
            <View style={{ width: 60, marginLeft: 10 }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Fri</Text>
            </View>

        </View>

        <View style={{ height: 42, flexDirection: 'row', alignItems: 'center' }}>

            <View style={{ marginLeft: 10 }}>
                <Text style={{ width: 65, fontSize: 10 }}>{user.Course3}</Text>
            </View>
            <View style={{ marginLeft: 10 }}>
                <Text style={{ width: 65, fontSize: 10 }}>9:30-11:30</Text>
            </View>
            <View style={{ marginLeft: 10 }}>
                <Text style={{ width: 65 }}></Text>
            </View>
            <View style={{ marginLeft: 10 }}>
                <Text style={{ width: 65 }}></Text>
            </View>
            <View style={{ marginLeft: 10 }}>
                <Text style={{ width: 35 }}></Text>
            </View>
            <View style={{ marginRight: 50 }}>
                <Text style={{ width: 65, fontSize: 10 }}>10:30-11:30</Text>
            </View>

        </View>
        <View style={{ height: 70, flexDirection: 'row', alignItems: 'center' }}>

            <View style={{ marginLeft: 10 }}>
                <Text style={{ width: 65, fontSize: 10 }}>{user.Course2}</Text>
            </View>
            <View style={{ marginLeft: 10 }}>
                <Text style={{ width: 65 }}></Text>
            </View>
            <View style={{ marginLeft: 10 }}>
                <Text style={{ width: 65 }}></Text>
            </View>
            <View style={{ marginLeft: 10 }}>
                <Text style={{ width: 65 }}></Text>
            </View>
            <View style={{ marginRight: 10 }}>
                <Text style={{ width: 35, fontSize: 10 }}>8:30-10:30</Text>
            </View>
            <View style={{ marginRight: 50 }}>
                <Text style={{ width: 65, fontSize: 10 }}>11:30-12:30</Text>
            </View>

        </View>

        <View style={{ height: 80, flexDirection: 'row', alignItems: 'center' }}>

            <View style={{ marginLeft: 10 }}>
                <Text style={{ width: 65, fontSize: 10 }}>{user.Course7}</Text>
            </View>
            <View style={{ marginLeft: 10 }}>
                <Text style={{ width: 65 }}></Text>
            </View>
            <View style={{ marginLeft: 10 }}>
                <Text style={{ width: 65 }}></Text>
            </View>
            <View style={{ marginLeft: 10 }}>
                <Text style={{ width: 65 }}></Text>
            </View>
            <View style={{ marginRight: 10 }}>
                <Text style={{ width: 35, fontSize: 10 }}>11:30-2:30</Text>
            </View>
            <View style={{ marginRight: 50 }}>
                <Text style={{ width: 65, fontSize: 10 }}></Text>
            </View>

        </View>
        <View style={{ height: 80, flexDirection: 'row', alignItems: 'center' }}>

            <View style={{ marginLeft: 10 }}>
                <Text style={{ width: 65, fontSize: 10 }}>{user.Course1}</Text>
            </View>
            <View style={{ marginLeft: 10 }}>
                <Text style={{ width: 65, fontSize: 10 }}>11:30-1:30</Text>
            </View>
            <View style={{ marginLeft: 10 }}>
                <Text style={{ width: 65 }}></Text>
            </View>
            <View style={{ marginLeft: 10 }}>
                <Text style={{ width: 65 }}></Text>
            </View>
            <View style={{ marginRight: 10 }}>
                <Text style={{ width: 35, fontSize: 10 }}></Text>
            </View>
            <View style={{ marginRight: 50 }}>
                <Text style={{ width: 65, fontSize: 10 }}>10:30-11:30</Text>
            </View>

        </View>
        <View style={{ height: 80, flexDirection: 'row', alignItems: 'center' }}>

            <View style={{ marginLeft: 10 }}>
                <Text style={{ width: 65, fontSize: 10 }}>{user.Course6}</Text>
            </View>
            <View style={{ marginLeft: 10 }}>
                <Text style={{ width: 65 }}></Text>
            </View>
            <View style={{ marginLeft: 10 }}>
                <Text style={{ width: 65 }}></Text>
            </View>
            <View style={{ marginLeft: 10 }}>
                <Text style={{ width: 65, fontSize: 10 }}>2:30-5:30</Text>
            </View>
            <View style={{ marginRight: 10 }}>
                <Text style={{ width: 35, fontSize: 10 }}></Text>
            </View>
            <View style={{ marginRight: 50 }}>
                <Text style={{ width: 65, fontSize: 10 }}></Text>
            </View>

        </View>
        <View style={{ height: 80, flexDirection: 'row', alignItems: 'center' }}>

            <View style={{ marginLeft: 10 }}>
                <Text style={{ width: 65, fontSize: 10 }}>{user.Course5}</Text>
            </View>
            <View style={{ marginLeft: 10 }}>
                <Text style={{ width: 65 }}></Text>
            </View>
            <View style={{ marginLeft: 10 }}>
                <Text style={{ width: 65, fontSize: 10 }}>9:30-10:30</Text>
            </View>
            <View style={{ marginLeft: 10 }}>
                <Text style={{ width: 65, fontSize: 10 }}>10:30-11:30</Text>
            </View>
            <View style={{ marginRight: 10 }}>
                <Text style={{ width: 35, fontSize: 10 }}></Text>
            </View>
            <View style={{ marginRight: 50 }}>
                <Text style={{ width: 65, fontSize: 10 }}>9:30-10:30</Text>
            </View>

        </View>
        <View style={{ height: 80, flexDirection: 'row', alignItems: 'center' }}>

            <View style={{ marginLeft: 10 }}>
                <Text style={{ width: 65, fontSize: 10 }}>{user.Course4}</Text>
            </View>
            <View style={{ marginLeft: 10 }}>
                <Text style={{ width: 65, fontSize: 10 }}>8:30-9:30</Text>
            </View>
            <View style={{ marginLeft: 10 }}>
                <Text style={{ width: 65, fontSize: 10 }}>8:30-9:30</Text>
            </View>
            <View style={{ marginLeft: 10 }}>
                <Text style={{ width: 65, fontSize: 10 }}></Text>
            </View>
            <View style={{ marginRight: 10 }}>
                <Text style={{ width: 35, fontSize: 10 }}></Text>
            </View>
            <View style={{ marginRight: 50 }}>
                <Text style={{ width: 65, fontSize: 10 }}></Text>
            </View>

        </View>
        <View style={{ height: 120, flexDirection: 'row', alignItems: 'center' }}>

            <View style={{ marginLeft: 10 }}>
                <Text style={{ width: 65, fontSize: 10 }}>{user.Course8}</Text>
            </View>
            <View style={{ marginLeft: 10 }}>
                <Text style={{ width: 65, fontSize: 10 }}></Text>
            </View>
            <View style={{ marginLeft: 10 }}>
                <Text style={{ width: 65, fontSize: 10 }}>11:30-2:30</Text>
            </View>
            <View style={{ marginLeft: 10 }}>
                <Text style={{ width: 65, fontSize: 10 }}></Text>
            </View>
            <View style={{ marginRight: 10 }}>
                <Text style={{ width: 35, fontSize: 10 }}></Text>
            </View>
            <View style={{ marginRight: 50 }}>
                <Text style={{ width: 65, fontSize: 10 }}></Text>
            </View>

        </View>
    </View>
    </>
    ) : (
                   <Text>No user data found</Text> 
        )} 
</View>
)
}