import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';

export default function Attendance({ route }) {
  const { regNo }  = route.params;
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


  const row = {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 22,
    paddingHorizontal: 20,
  };

  const percent = (att, sch) =>
    sch > 0 ? ((att / sch) * 100).toFixed(1) + '%' : '0%';


  return (
      
      <ScrollView style={{ backgroundColor: '#eee' }}>
 {loading ? (
     <ActivityIndicator size="large" />
                 ) : user ? (
                     <>
      {/* HEADER */}
      <View style={[row, { backgroundColor: '#0066ff' }]}>
        <Text style={{ flex: 3,fontSize:18, color: 'white' }}>Course</Text>
        <Text style={{ flex: 1,fontSize:18, color: 'white', textAlign: 'center' }}>Sch</Text>
        <Text style={{ flex: 1,fontSize:18, color: 'white', textAlign: 'center' }}>Att</Text>
        <Text style={{ flex: 1,fontSize:18, color: 'white', textAlign: 'center' }}>%</Text>
      </View>

      {/* ROW */}
      <View style={[row, { backgroundColor: 'white' }]}>
        <Text style={{ flex: 3 }}>{user.Course1}</Text>
        <Text style={{ flex: 1, textAlign: 'center' }}>{user.course1scheduled}</Text>
        <Text style={{ flex: 1, textAlign: 'center' }}>{user.course1att}</Text>
        <Text style={{ flex: 1, textAlign: 'center' }}>
          {percent(user.course1att, user.course1scheduled)}
        </Text>
      </View>

      <View style={[row, { backgroundColor: '#cac7c7ff' }]}>
        <Text style={{ flex: 3 }}>{user.Course2}</Text>
        <Text style={{ flex: 1, textAlign: 'center' }}>{user.course2scheduled}</Text>
        <Text style={{ flex: 1, textAlign: 'center' }}>{user.course2att}</Text>
        <Text style={{ flex: 1, textAlign: 'center' }}>
          {percent(user.course2att, user.course2scheduled)}
        </Text>
      </View>

      <View style={[row, { backgroundColor: 'white' }]}>
        <Text style={{ flex: 3 }}>{user.Course3}</Text>
        <Text style={{ flex: 1, textAlign: 'center' }}>{user.course3scheduled}</Text>
        <Text style={{ flex: 1, textAlign: 'center' }}>{user.course3att}</Text>
        <Text style={{ flex: 1, textAlign: 'center' }}>
          {percent(user.course3att, user.course3scheduled)}
        </Text>
      </View>

      <View style={[row, { backgroundColor: '#cac7c7ff' }]}>
        <Text style={{ flex: 3 }}>{user.Course4}</Text>
        <Text style={{ flex: 1, textAlign: 'center' }}>{user.course4scheduled}</Text>
        <Text style={{ flex: 1, textAlign: 'center' }}>{user.course4att}</Text>
        <Text style={{ flex: 1, textAlign: 'center' }}>
          {percent(user.course4att, user.course4scheduled)}
        </Text>
      </View>
      <View style={[row, { backgroundColor: 'white' }]}>
        <Text style={{ flex: 3 }}>{user.Course5}</Text>
        <Text style={{ flex: 1, textAlign: 'center' }}>{user.course5scheduled}</Text>
        <Text style={{ flex: 1, textAlign: 'center' }}>{user.course5att}</Text>
        <Text style={{ flex: 1, textAlign: 'center' }}>
          {percent(user.course5att, user.course5scheduled)}
        </Text>
      </View>
      <View style={[row, { backgroundColor: '#cac7c7ff' }]}>
        <Text style={{ flex: 3 }}>{user.Course6}</Text>
        <Text style={{ flex: 1, textAlign: 'center' }}>{user.course6scheduled}</Text>
        <Text style={{ flex: 1, textAlign: 'center' }}>{user.course6att}</Text>
        <Text style={{ flex: 1, textAlign: 'center' }}>
          {percent(user.course6att, user.course6scheduled)}
        </Text>
      </View>
      <View style={[row, { backgroundColor: 'white' }]}>
        <Text style={{ flex: 3 }}>{user.Course7}</Text>
        <Text style={{ flex: 1, textAlign: 'center' }}>{user.course7scheduled}</Text>
        <Text style={{ flex: 1, textAlign: 'center' }}>{user.course7att}</Text>
        <Text style={{ flex: 1, textAlign: 'center' }}>
          {percent(user.course7att, user.course7scheduled)}
        </Text>
      </View>
      <View style={[row, { backgroundColor: '#cac7c7ff' }]}>
        <Text style={{ flex: 3 }}>{user.Course8}</Text>
        <Text style={{ flex: 1, textAlign: 'center' }}>{user.course8scheduled}</Text>
        <Text style={{ flex: 1, textAlign: 'center' }}>{user.course8att}</Text>
        <Text style={{ flex: 1, textAlign: 'center' }}>
          {percent(user.course8att, user.course8scheduled)}
        </Text>
      </View>
 </>
    ) : (
                   <Text>No user data found</Text> 
        )} 
    </ScrollView>
  );
}
