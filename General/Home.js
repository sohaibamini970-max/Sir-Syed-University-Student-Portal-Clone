import React from 'react'
import{useEffect,useState} from 'react'
import {View , Text , Image,ScrollView, ActivityIndicator} from 'react-native'

export default function Home({  route }){
  const { regNo } = route.params;
   const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // update every second

    return () => clearInterval(timer); // cleanup when component unmounts
  }, []);



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

    return (
        <>
    <ScrollView style={{ backgroundColor: 'rgba(189, 189, 189, 1)' }}>
       {loading ? (
      <ActivityIndicator size="large" />
          ) : user ? (
      <View style={{ flex: 1 }}>

        {/* Dashboard Title */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'white',
            height: 50,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontFamily: 'Arial',
              fontWeight: 'bold',
              fontSize: 16,
              marginLeft: 15,
            }}
          >
            Dashboard
          </Text>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 170,
              borderColor: 'red',
            }}
          >
            <Text style={{ fontWeight: '800', color: 'gray' }}>
              My ID: {user.registrationNo}
            </Text>
          </View>

          <View
            style={{
              backgroundColor: 'rgba(128, 128, 128, 0.5)',
              height: 25,
              width: 90,
              marginLeft: 40,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
            }}
          >
                    <Text style={{ color: 'rgba(13, 110, 255, 1)' }}>{currentDate.toLocaleDateString('en-GB', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',

                    })}</Text>
          </View>
        </View>

        {/* My Stats */}
        <View style={{ backgroundColor: 'white', marginTop: 20 }}>
          <View
            style={{
              backgroundColor: 'rgba(201, 83, 83, 1)',
              width: '100%',
              height: 40,
            }}
          >
            <Text
              style={{
                color: 'white',
                fontFamily: 'Arial',
                fontWeight: 'bold',
                margin: 10,
                paddingLeft: 10,
              }}
            >
              MY STATS
            </Text>
          </View>

          {/* Stat Cards */}
          <View
            style={{
              height: 120,
              width: 330,
              margin: 30,
              marginBottom: 5,
              paddingLeft: 10,
              backgroundColor: 'rgba(172, 157, 109, 1)',
              borderRadius: 10,
            }}
          >
            <View style={{ margin: 10 }}>
              <Image
                source={require('../assets/images/analytic.png')}
                style={{ height: 50, width: 50 }}
              />
              <Text
                style={{
                  color: 'rgba(0, 0, 0, 1)',
                  fontSize: 20,
                  fontWeight: '600',
                  marginBottom: 50,
                }}
              >
                Current Balance {'\n'}({user.currentbalance})
              </Text>
            </View>
          </View>

          <View
            style={{
              height: 120,
              width: 330,
              margin: 30,
              marginBottom: 5,
              paddingLeft: 10,
              backgroundColor: 'rgba(186, 212, 233, 1)',
              borderRadius: 10,
            }}
          >
            <View style={{ margin: 10 }}>
              <Image
                source={require('../assets/images/gpa.png')}
                style={{ width: 50, height: 50 }}
              />
              <Text style={{ fontSize: 20, fontWeight: '600',color:'black' }}>
                        CGPA{'\n'}({((parseFloat(user.firstsemesgpa) + parseFloat(user.secondsemesgpa)) / 2).toFixed(2)})
              </Text>
            </View>
          </View>

          <View
            style={{
              height: 120,
              width: 330,
              margin: 30,
              marginBottom: 5,
              paddingLeft: 10,
              backgroundColor: 'rgba(213, 156, 156, 1)',
              borderRadius: 10,
            }}
          >
            <View style={{ margin: 10 }}>
              <Image
                source={require('../assets/images/layers.png')}
                style={{ width: 40, height: 40 }}
              />
              <Text style={{ fontSize: 20, fontWeight: '600' }}>
                Registered Courses {'\n'} ({user.registeredcourses})
              </Text>
            </View>
          </View>

          <View
            style={{
              height: 120,
              width: 330,
              margin: 30,
              paddingLeft: 10,
              backgroundColor: 'rgba(169, 215, 221, 1)',
              borderRadius: 10,
            }}
          >
            <View style={{ margin: 10 }}>
              <Image
                source={require('../assets/images/checklist.png')}
                style={{ width: 50, height: 50 }}
              />
              <Text style={{ fontSize: 20, fontWeight: '600' }}>
                Average Attendance {'\n'} ()
              </Text>
            </View>
          </View>
        </View>

        {/* My Courses */}
        <View style={{ backgroundColor: 'white', marginTop: 40 }}>
          <View style={{ margin: 20 }}>
            <Text
              style={{ fontSize: 20, fontFamily: 'Arial', fontWeight: 'bold' }}
            >
              My Courses
            </Text>
            <Text
              style={{
                color: 'rgba(63, 57, 57, 1)',
                fontFamily: 'Arial',
                fontWeight: 'bold',
              }}
            >
              Fall 2025
            </Text>
          </View>

          {/* Example course */}
          <View style={{ marginLeft: 20, marginBottom: 20 }}>
            <Text
              style={{
                color: 'rgba(63, 57, 57, 1)',
                fontSize: 17,
                fontFamily: 'Arial',
                fontWeight: 'bold',
              }}
            >
              {user.Course1}
            </Text>

            <Text style={{ color: 'rgba(151, 151, 151, 1)', fontSize: 15 }}>
             Timings: {user.Course1time}
            </Text>

        <View style={{flexDirection:'row'}} >

            <View style={{width:100,flexDirection:'row',justifyContent:'center'}} >
            <Text style={{ marginTop: 5, fontSize: 15, fontWeight: 'bold' }}>
              100% 
            </Text>
            </View>

            <View style={{ width: 160, flexDirection: 'row', justifyContent: 'center' }} >
            <Text style={{ marginTop: 5, fontSize: 15, fontWeight: 'bold' }}>
               {user.coalteacher}
            </Text>
            </View>

            <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
            <Text style={{ marginTop: 5, fontSize: 15, fontWeight: 'bold' }}>
                          {user.Course1room}
            </Text>
            </View>

        </View>

          </View>
          <View style={{ marginLeft: 20, marginBottom: 20 }}>
            <Text
              style={{
                color: 'rgba(63, 57, 57, 1)',
                fontSize: 17,
                fontFamily: 'Arial',
                fontWeight: 'bold',
              }}
            >
               {user.Course2}
            </Text>

            <Text style={{ color: 'rgba(151, 151, 151, 1)', fontSize: 15 }}>
                     Timings: {user.Course2time}
            </Text>

        <View style={{flexDirection:'row'}} >

            <View style={{width:100,flexDirection:'row',justifyContent:'center'}} >
            <Text style={{ marginTop: 5, fontSize: 15, fontWeight: 'bold' }}>
              100% 
            </Text>
            </View>

            <View style={{ width: 160, flexDirection: 'row', justifyContent: 'center' }} >
            <Text style={{ marginTop: 5, fontSize: 15, fontWeight: 'bold' }}>
               {user.dsaTeacher}
            </Text>
            </View>

            <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
            <Text style={{ marginTop: 5, fontSize: 15, fontWeight: 'bold' }}>
                          {user.Course2room}
            </Text>
            </View>

        </View>

          </View>
          <View style={{ marginLeft: 20, marginBottom: 20 }}>
            <Text
              style={{
                color: 'rgba(63, 57, 57, 1)',
                fontSize: 17,
                fontFamily: 'Arial',
                fontWeight: 'bold',
              }}
            >
              {user.Course3}
            </Text>

            <Text style={{ color: 'rgba(151, 151, 151, 1)', fontSize: 15 }}>
                    Timings: {user.Course3time}
            </Text>

        <View style={{flexDirection:'row'}} >

            <View style={{width:100,flexDirection:'row',justifyContent:'center'}} >
            <Text style={{ marginTop: 5, fontSize: 15, fontWeight: 'bold' }}>
              100% 
            </Text>
            </View>

            <View style={{ width: 160, flexDirection: 'row', justifyContent: 'center' }} >
            <Text style={{ marginTop: 5, fontSize: 15, fontWeight: 'bold' }}>
               {user.discreteteacher}
            </Text>
            </View>

            <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
            <Text style={{ marginTop: 5, fontSize: 15, fontWeight: 'bold' }}>
                          {user.Course3room}
            </Text>
            </View>

        </View>

          </View>
          <View style={{ marginLeft: 20, marginBottom: 20 }}>
            <Text
              style={{
                color: 'rgba(63, 57, 57, 1)',
                fontSize: 17,
                fontFamily: 'Arial',
                fontWeight: 'bold',
              }}
            >
              {user.Course4}
            </Text>

            <Text style={{ color: 'rgba(151, 151, 151, 1)', fontSize: 15 }}>
                      Timings: {user.Course4time}
            </Text>

        <View style={{flexDirection:'row'}} >

            <View style={{width:100,flexDirection:'row',justifyContent:'center'}} >
            <Text style={{ marginTop: 5, fontSize: 15, fontWeight: 'bold' }}>
              100% 
            </Text>
            </View>

            <View style={{ width: 160, flexDirection: 'row', justifyContent: 'center' }} >
            <Text style={{ marginTop: 5, fontSize: 15, fontWeight: 'bold' }}>
               {user.madteacher}
            </Text>
            </View>

            <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
            <Text style={{ marginTop: 5, fontSize: 15, fontWeight: 'bold' }}>
                          {user.Course4room}
            </Text>
            </View>

        </View>

          </View>
          <View style={{ marginLeft: 20, marginBottom: 20 }}>
            <Text
              style={{
                color: 'rgba(63, 57, 57, 1)',
                fontSize: 17,
                fontFamily: 'Arial',
                fontWeight: 'bold',
              }}
            >
              {user.Course5}
            </Text>

            <Text style={{ color: 'rgba(151, 151, 151, 1)', fontSize: 15 }}>
                      Timings: {user.Course5time}
            </Text>

        <View style={{flexDirection:'row'}} >

            <View style={{width:100,flexDirection:'row',justifyContent:'center'}} >
            <Text style={{ marginTop: 5, fontSize: 15, fontWeight: 'bold' }}>
              100% 
            </Text>
            </View>

            <View style={{ width: 160, flexDirection: 'row', justifyContent: 'center' }} >
            <Text style={{ marginTop: 5, fontSize: 15, fontWeight: 'bold' }}>
               {user.expoteacher}
            </Text>
            </View>

            <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
            <Text style={{ marginTop: 5, fontSize: 15, fontWeight: 'bold' }}>
                          {user.Course5room}
            </Text>
            </View>

        </View>

          </View>
          <View style={{ marginLeft: 20, marginBottom: 20 }}>
            <Text
              style={{
                color: 'rgba(63, 57, 57, 1)',
                fontSize: 17,
                fontFamily: 'Arial',
                fontWeight: 'bold',
              }}
            >
            {user.Course6}
            </Text>

            <Text style={{ color: 'rgba(151, 151, 151, 1)', fontSize: 15 }}>
                    Timings: {user.Course6time}
            </Text>

        <View style={{flexDirection:'row'}} >

            <View style={{width:100,flexDirection:'row',justifyContent:'center'}} >
            <Text style={{ marginTop: 5, fontSize: 15, fontWeight: 'bold' }}>
              100% 
            </Text>
            </View>

            <View style={{ width: 160, flexDirection: 'row', justifyContent: 'center' }} >
            <Text style={{ marginTop: 5, fontSize: 15, fontWeight: 'bold' }}>
              {user.coalLabTeacher}
            </Text>
            </View>

            <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
            <Text style={{ marginTop: 5, fontSize: 15, fontWeight: 'bold' }}>
                          {user.Couse6room}
            </Text>
            </View>

        </View>

          </View>
          <View style={{ marginLeft: 20, marginBottom: 20 }}>
            <Text
              style={{
                color: 'rgba(63, 57, 57, 1)',
                fontSize: 17,
                fontFamily: 'Arial',
                fontWeight: 'bold',
              }}
            >
              {user.Course7}
            </Text>

            <Text style={{ color: 'rgba(151, 151, 151, 1)', fontSize: 15 }}>
                      Timings: {user.Course7time}
            </Text>

        <View style={{flexDirection:'row'}} >

            <View style={{width:100,flexDirection:'row',justifyContent:'center'}} >
            <Text style={{ marginTop: 5, fontSize: 15, fontWeight: 'bold' }}>
              100% 
            </Text>
            </View>

            <View style={{ width: 160, flexDirection: 'row', justifyContent: 'center' }} >
            <Text style={{ marginTop: 5, fontSize: 15, fontWeight: 'bold' }}>
               {user.dsaLabTeacher}
            </Text>
            </View>

            <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
            <Text style={{ marginTop: 5, fontSize: 15, fontWeight: 'bold' }}>
                          {user.Couse7room}
            </Text>
            </View>

        </View>

          </View>
          <View style={{ marginLeft: 20, marginBottom: 20 }}>
            <Text
              style={{
                color: 'rgba(63, 57, 57, 1)',
                fontSize: 17,
                fontFamily: 'Arial',
                fontWeight: 'bold',
              }}
            >
              {user.Course8}
            </Text>

            <Text style={{ color: 'rgba(151, 151, 151, 1)', fontSize: 15 }}>
                     Timings: {user.Course8time}
            </Text>

        <View style={{flexDirection:'row'}} >

            <View style={{width:100,flexDirection:'row',justifyContent:'center'}} >
            <Text style={{ marginTop: 5, fontSize: 15, fontWeight: 'bold' }}>
              100% 
            </Text>
            </View>

            <View style={{ width: 160, flexDirection: 'row', justifyContent: 'center' }} >
            <Text style={{ marginTop: 5, fontSize: 15, fontWeight: 'bold' }}>
               {user.madLabTeacher}
            </Text>
            </View>

            <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
            <Text style={{ marginTop: 5, fontSize: 15, fontWeight: 'bold' }}>
                          {user.Course8room}
            </Text>
            </View>

        </View>

          </View>

        </View>

        {/* Overview */}
        <View style={{ marginTop: 40, backgroundColor: 'white', padding: 20 }}>
          <Text style={{ fontWeight: '700', fontSize: 20 }}>My Overview</Text>

          {/* Overview rows */}
          <View style={{ flexDirection: 'row', marginTop: 20, alignItems: 'center' }}>
            <View
              style={{
                backgroundColor: 'rgba(28, 51, 126, 1)',
                padding: 10,
                borderRadius: 5,
              }}
            >
              <Image
                source={require('../assets/images/profile.png')}
                style={{ height: 52, width: 50 }}
              />
            </View>
            <View style={{ marginLeft: 15 }}>
              <Text style={{ fontFamily: 'Arial', fontWeight: '700', fontSize: 15 }}>
                Name
              </Text>
              <Text
                style={{ marginTop: 5, fontWeight: '900', fontSize: 15, color: 'rgba(193, 182, 182, 1)' }}
              >
              {user.name}
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 20, alignItems: 'center' }}>
            <View
              style={{
                backgroundColor: 'rgba(217, 213, 213, 1)',
                padding: 10,
                borderRadius: 5,
              }}
            >
              <Image
                source={require('../assets/images/enrollment.png')}
                style={{ height: 52, width: 50 }}
              />
            </View>
            <View style={{ marginLeft: 15 }}>
              <Text style={{ fontFamily: 'Arial', fontWeight: '700', fontSize: 15 }}>
                {user.registrationNo}
              </Text>
              <Text
                style={{ marginTop: 5, fontWeight: '900', fontSize: 15, color: 'rgba(193, 182, 182, 1)' }}
              >
                {user.id}
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 20, alignItems: 'center' }}>
            <View
              style={{
                backgroundColor: 'rgba(84, 180, 202, 1)',
                padding: 10,
                borderRadius: 5,
              }}
            >
              <Image
                source={require('../assets/images/curriculum.png')}
                style={{ height: 72, width: 50 }}
              />
            </View>
            <View style={{ marginLeft: 15 }}>
              <Text style={{ fontFamily: 'Arial', fontWeight: '700', fontSize: 15 }}>
                Program Structure
              </Text>
              <Text
                style={{ marginTop: 5, fontWeight: '900', fontSize: 15, color: 'rgba(193, 182, 182, 1)' }}
              >
                {user.program}
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 20, alignItems: 'center' }}>
            <View
              style={{
                backgroundColor: 'rgba(95, 98, 184, 1)',
                padding: 10,
                borderRadius: 5,
              }}
            >
              <Image
                source={require('../assets/images/checklist.png')}
                style={{ height: 52, width: 50 }}
              />
            </View>
            <View style={{ marginLeft: 15 }}>
              <Text style={{ fontFamily: 'Arial', fontWeight: '700', fontSize: 15 }}>
                Current Session
              </Text>
              <Text
                style={{ marginTop: 5, fontWeight: '900', fontSize: 15, color: 'rgba(193, 182, 182, 1)' }}
              >
                2025F
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 20, alignItems: 'center' }}>
            <View
              style={{
                backgroundColor: 'rgba(201, 201, 128, 1)',
                padding: 10,
                borderRadius: 5,
              }}
            >
              <Image
                source={require('../assets/images/circle.png')}
                style={{ height: 52, width: 50 }}
              />
            </View>
            <View style={{ marginLeft: 15 }}>
              <Text style={{ fontFamily: 'Arial', fontWeight: '700', fontSize: 15 }}>
                Status
              </Text>
              <Text
                style={{ marginTop: 5, fontWeight: '900', fontSize: 15, color: 'rgba(193, 182, 182, 1)' }}
              >
                Active
              </Text>
            </View>
          </View>

          {/* Add other overview rows similarly */}
        </View>
      </View>
      ) : (
                <Text>No user data found</Text>
      )} 
        </ScrollView>
  </>
)
}
