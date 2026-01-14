import { View, Text } from 'react-native';

export default function Annoucemnets() {

    return (

            <View style={{ backgroundColor: 'rgba(226, 224, 224, 1)', marginTop: 20 }} >

                <View style={{ backgroundColor: 'white', height: 50 }} >

                    <View style={{ marginLeft: 20, flexDirection: 'row', margin: 13 }} >

                        <Text style={{ fontSize: 15, color: 'rgba(135, 132, 132, 1)' }} >General</Text>
                        <Text style={{ fontSize: 15, width: 15, marginLeft: 5, color: 'rgba(135, 132, 132, 1)' }} >•</Text>
                        <Text style={{ fontSize: 15, color: 'rgba(0, 119, 255, 1)' }} >Annoucements</Text>

                    </View>

            </View>

            <View style={{ background:'rgba(255, 255, 255, 1)'}}>


            <View style={{marginTop:20 , backgroundColor:'rgba(15, 123, 225, 1)', flexDirection:'row' ,justifyContent:'center' , height:30}} >  
                <Text style={{color:'white' , fontSize:20,fontWeight:'900'}} >Annoucements</Text>
            </View>

            <View style={{ backgroundColor: 'white', height: 30, flexDirection: 'row', justifyContent: 'center',alignItems:'center' }}>
                <Text>Assalam o Alikum</Text>
            </View>

            <View style={{ backgroundColor: 'white', height: 30, flexDirection: 'row', justifyContent: 'center',alignItems:'center' }}>
                <Text>Check your registererd Courses in the left menu</Text>
            </View>
            <View style={{ backgroundColor: 'white', height: 30, flexDirection: 'row', justifyContent: 'center',alignItems:'center' }}>
                <Text>Attendance Alert:</Text>
            </View>
            <View style={{ backgroundColor: 'white', height: 100, width:410  , flexDirection: 'row', justifyContent: 'center',alignItems:'center' }}>
                    <Text style={{width:380}} >F25-Entire session attendance is expected to be locked soon within a week or two</Text>
            </View>
            <View style={{ backgroundColor: 'white', height: 100, width:410  , flexDirection: 'row', justifyContent: 'center',alignItems:'center' }}>
                    <Text style={{ width: 380 }} >so Kindly get apply all the pending attendances of all students including Late Admissions, or Regular Additional registered students a</Text>
            </View>
            <View style={{ backgroundColor: 'white', height: 100, width:410  , flexDirection: 'row', justifyContent: 'center',alignItems:'center' }}>
                    <Text style={{ width: 380 }} >(to avoid students to be listed into SOA or WU list. else they would suffer many semesters together) </Text>
            </View>
            <View style={{ backgroundColor: 'white', height: 100, width:410  , flexDirection: 'row', justifyContent: 'center',alignItems:'center' }}>
                    <Text style={{ width: 380 }} >Best Regards </Text>
            </View>
            <View style={{ backgroundColor: 'white', height: 100, width:410  , flexDirection: 'row', justifyContent: 'center',alignItems:'center' }}>
                    <Text style={{ width: 380 }} >MIS,SSUET </Text>
            </View>

            </View>
            </View>
    )
}