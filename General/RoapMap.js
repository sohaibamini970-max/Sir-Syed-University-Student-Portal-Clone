import { View, Text, ScrollView } from 'react-native';

export default function RoadMap() {

    return (
        <ScrollView style={{}}>

            <View style={{ backgroundColor: 'rgba(226, 224, 224, 1)', marginTop: 20 }} >

                <View style={{ backgroundColor: 'white', height: 50 }} >

                    <View style={{ marginLeft: 20, flexDirection: 'row', margin: 13 }} >

                        <Text style={{ fontSize: 15, color: 'rgba(135, 132, 132, 1)' }} >General</Text>
                        <Text style={{ fontSize: 15, width: 15, marginLeft: 5, color: 'rgba(135, 132, 132, 1)' }} >•</Text>
                        <Text style={{ fontSize: 15, color: 'rgba(0, 119, 255, 1)' }} >Road Map</Text>

                    </View>

            </View>

                <View style={{ marginTop: 20, backgroundColor: 'rgba(255, 255, 255, 1)' }}>


                    <View style={{ margin: 30, borderColor: 'rgba(238, 231, 231, 1)', borderWidth: 1, height: 40 }}>
                        <View style={{flexDirection: 'row',margin:5}} >
                        <Text style={{ fontSize: 15, fontWeight: '800' }}>Registration No:{'\t'}</Text>
                        <Text style={{ fontSize: 15 }}>2024F-BCS-134</Text>
                        </View>
                    </View>

                    <View style={{ margin: 30, flexDirection: 'row', marginTop: -30, borderColor: 'rgba(238, 231, 231, 1)', borderWidth: 1, height: 40}}>
                        <View style={{flexDirection: 'row',margin:5}} >
                        <Text style={{ fontSize: 15, fontWeight: '800' }}>Name:{'\t'}</Text>
                        <Text style={{ fontSize: 15 }}>Muhammad Suhaib</Text>
                        </View>
                    </View>
                    <View style={{ margin: 30, flexDirection: 'row', marginTop: -30, borderColor: 'rgba(238, 231, 231, 1)', borderWidth: 1, height: 40}}>
                        <View style={{flexDirection: 'row',margin:5}} >
                        <Text style={{ fontSize: 15, fontWeight: '800' }}>Program:{'\t'}</Text>
                        <Text style={{ fontSize: 15 }}>(BS) - Computer Science - MOR</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row',margin:5,width:470,marginLeft:0}} >
                    <View style={{ margin: 30, flexDirection: 'row', marginTop: -35, borderColor: 'rgba(238, 231, 231, 1)', borderWidth: 1, height: 40}}>
                        <Text style={{ fontSize: 15, fontWeight: '800',margin:5 }}>Enrollment Session:{'\t'}</Text>
                        <Text style={{ fontSize: 15,margin:5 }}>Fall 2024                                 </Text>
                    </View>
                    </View>

                </View>
                
                {/* Semes01 */}
                <View>

                    <View style={{ backgroundColor: 'rgba(5, 168, 243, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>
                        <Text style={{ fontSize: 20 }}>1st Semester</Text>
                    </View>

                   
                    <View style={{ backgroundColor: 'rgba(5, 168, 243, 1)', marginTop: 3, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{width: 100, flexDirection: 'row', justifyContent:'center'}} >
                            <Text style={{ fontSize: 20}}>Session</Text>
                        </View>

                        <View style={{width:200,flexDirection:'row',justifyContent:'center'}} >
                            <Text style={{ fontSize: 20 }}>Course</Text>
                        </View>

                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 20}}>Status</Text>
                        </View>

                    </View>

                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{width: 100, flexDirection: 'row', justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>2024F</Text>
                        </View>

                        <View style={{width:200,flexDirection:'row',justifyContent:'center',borderColor:'black'}} >
                            <Text style={{ fontSize: 15 }}>Applied Physics</Text>
                        </View>

                        <View style={{ width: 100, flexDirection:'row',justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>Pass</Text>
                        </View>

                    </View>
                    
                    <View style={{ backgroundColor: 'rgba(208, 204, 204, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{width: 100, flexDirection: 'row', justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>2024F</Text>
                        </View>

                        <View style={{width:200,flexDirection:'row',justifyContent:'center',borderColor:'black'}} >
                            <Text style={{ fontSize: 15 }}>Applied Physics Lab</Text>
                        </View>

                        <View style={{ width: 100, flexDirection:'row',justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>Pass</Text>
                        </View>

                    </View>
                    
                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{width: 100, flexDirection: 'row', justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>2024F</Text>
                        </View>

                        <View style={{width:200,flexDirection:'row',justifyContent:'center',borderColor:'black'}} >
                            <Text style={{ fontSize: 15 }}>Linear Algebra</Text>
                        </View>

                        <View style={{ width: 100, flexDirection:'row',justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>Pass</Text>
                        </View>

                    </View>
                    
                    <View style={{ backgroundColor: 'rgba(208, 204, 204, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{width: 100, flexDirection: 'row', justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>2024F</Text>
                        </View>

                        <View style={{width:200,flexDirection:'row',justifyContent:'center',borderColor:'black'}} >
                            <Text style={{ fontSize: 15 }}>Pakistan Studies</Text>
                        </View>

                        <View style={{ width: 100, flexDirection:'row',justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>Pass</Text>
                        </View>

                    </View>

                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>2024F</Text>
                        </View>

                        <View style={{ width: 200, flexDirection: 'row', justifyContent: 'center', borderColor: 'black' }} >
                            <Text style={{ fontSize: 15 }}>Application of Information Technology</Text>
                        </View>

                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>Pass</Text>
                        </View>

                    </View>

                    <View style={{ backgroundColor: 'rgba(208, 204, 204, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>2024F</Text>
                        </View>

                        <View style={{ width: 200, flexDirection: 'row', justifyContent: 'center', borderColor: 'black' }} >
                            <Text style={{ fontSize: 15 }}>Application of Information Technology Lab</Text>
                        </View>

                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>Pass</Text>
                        </View>

                    </View>
                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>2024F</Text>
                        </View>

                        <View style={{ width: 200, flexDirection: 'row', justifyContent: 'center', borderColor: 'black' }} >
                            <Text style={{ fontSize: 15 }}>Programming Fundamentals</Text>
                        </View>

                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>Pass</Text>
                        </View>

                    </View>

                    <View style={{ backgroundColor: 'rgba(208, 204, 204, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>2024F</Text>
                        </View>

                        <View style={{ width: 200, flexDirection: 'row', justifyContent: 'center', borderColor: 'black' }} >
                            <Text style={{ fontSize: 15 }}>Programming Fundamentals Lab</Text>
                        </View>

                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>Pass</Text>
                        </View>

                    </View>

                </View>

                {/* Semes02 */}
                <View style={{marginTop:30}} >

                    <View style={{ backgroundColor: 'rgba(5, 168, 243, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>
                        <Text style={{ fontSize: 20 }}>2nd Semester</Text>
                    </View>

                   
                    <View style={{ backgroundColor: 'rgba(5, 168, 243, 1)', marginTop: 3, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{width: 100, flexDirection: 'row', justifyContent:'center'}} >
                            <Text style={{ fontSize: 20}}>Session</Text>
                        </View>

                        <View style={{width:200,flexDirection:'row',justifyContent:'center'}} >
                            <Text style={{ fontSize: 20 }}>Course</Text>
                        </View>

                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 20}}>Status</Text>
                        </View>

                    </View>

                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{width: 100, flexDirection: 'row', justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>2024F</Text>
                        </View>

                        <View style={{width:200,flexDirection:'row',justifyContent:'center',borderColor:'black'}} >
                            <Text style={{ fontSize: 15 }}>Digital Logic Design</Text>
                        </View>

                        <View style={{ width: 100, flexDirection:'row',justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>Pass</Text>
                        </View>

                    </View>
                    
                    <View style={{ backgroundColor: 'rgba(208, 204, 204, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{width: 100, flexDirection: 'row', justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>2024F</Text>
                        </View>

                        <View style={{width:200,flexDirection:'row',justifyContent:'center',borderColor:'black'}} >
                            <Text style={{ fontSize: 15 }}>Digital Logic Design Lab</Text>
                        </View>

                        <View style={{ width: 100, flexDirection:'row',justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>Pass</Text>
                        </View>

                    </View>
                    
                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{width: 100, flexDirection: 'row', justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>2024F</Text>
                        </View>

                        <View style={{width:200,flexDirection:'row',justifyContent:'center',borderColor:'black'}} >
                            <Text style={{ fontSize: 15 }}>Calculus & Analytical Geometry</Text>
                        </View>

                        <View style={{ width: 100, flexDirection:'row',justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>Pass</Text>
                        </View>

                    </View>
                    
                    <View style={{ backgroundColor: 'rgba(208, 204, 204, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{width: 100, flexDirection: 'row', justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>2024F</Text>
                        </View>

                        <View style={{width:200,flexDirection:'row',justifyContent:'center',borderColor:'black'}} >
                            <Text style={{ fontSize: 15 }}>Object Oriented Programming</Text>
                        </View>

                        <View style={{ width: 100, flexDirection:'row',justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>Pass</Text>
                        </View>

                    </View>

                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>2024F</Text>
                        </View>

                        <View style={{ width: 200, flexDirection: 'row', justifyContent: 'center', borderColor: 'black' }} >
                            <Text style={{ fontSize: 15 }}>Object Oriented Programming Lab</Text>
                        </View>

                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>Pass</Text>
                        </View>

                    </View>

                    <View style={{ backgroundColor: 'rgba(208, 204, 204, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>2024F</Text>
                        </View>

                        <View style={{ width: 200, flexDirection: 'row', justifyContent: 'center', borderColor: 'black' }} >
                            <Text style={{ fontSize: 15 }}>Functional English</Text>
                        </View>

                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>Pass</Text>
                        </View>

                    </View>
                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>2024F</Text>
                        </View>

                        <View style={{ width: 200, flexDirection: 'row', justifyContent: 'center', borderColor: 'black' }} >
                            <Text style={{ fontSize: 15 }}>Organizational Behavior</Text>
                        </View>

                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>Pass</Text>
                        </View>

                    </View>

                </View>
                {/* Semes03 */}
                <View>

                    <View style={{ backgroundColor: 'rgba(5, 168, 243, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>
                        <Text style={{ fontSize: 20 }}>3rd Semester</Text>
                    </View>

                   
                    <View style={{ backgroundColor: 'rgba(5, 168, 243, 1)', marginTop: 3, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{width: 100, flexDirection: 'row', justifyContent:'center'}} >
                            <Text style={{ fontSize: 20}}>Session</Text>
                        </View>

                        <View style={{width:200,flexDirection:'row',justifyContent:'center'}} >
                            <Text style={{ fontSize: 20 }}>Course</Text>
                        </View>

                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 20}}>Status</Text>
                        </View>

                    </View>

                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{width: 100, flexDirection: 'row', justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>2024F</Text>
                        </View>

                        <View style={{width:200,flexDirection:'row',justifyContent:'center',borderColor:'black'}} >
                            <Text style={{ fontSize: 15 }}>Applied Physics</Text>
                        </View>

                        <View style={{ width: 100, flexDirection:'row',justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>ETR</Text>
                        </View>

                    </View>
                    
                    <View style={{ backgroundColor: 'rgba(208, 204, 204, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{width: 100, flexDirection: 'row', justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>2024F</Text>
                        </View>

                        <View style={{width:200,flexDirection:'row',justifyContent:'center',borderColor:'black'}} >
                            <Text style={{ fontSize: 15 }}>Applied Physics Lab</Text>
                        </View>

                        <View style={{ width: 100, flexDirection:'row',justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>ETR</Text>
                        </View>

                    </View>
                    
                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{width: 100, flexDirection: 'row', justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>2024F</Text>
                        </View>

                        <View style={{width:200,flexDirection:'row',justifyContent:'center',borderColor:'black'}} >
                            <Text style={{ fontSize: 15 }}>Linear Algebra</Text>
                        </View>

                        <View style={{ width: 100, flexDirection:'row',justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>ETR</Text>
                        </View>

                    </View>
                    
                    <View style={{ backgroundColor: 'rgba(208, 204, 204, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{width: 100, flexDirection: 'row', justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>2024F</Text>
                        </View>

                        <View style={{width:200,flexDirection:'row',justifyContent:'center',borderColor:'black'}} >
                            <Text style={{ fontSize: 15 }}>Pakistan Studies</Text>
                        </View>

                        <View style={{ width: 100, flexDirection:'row',justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>ETR</Text>
                        </View>

                    </View>

                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>2024F</Text>
                        </View>

                        <View style={{ width: 200, flexDirection: 'row', justifyContent: 'center', borderColor: 'black' }} >
                            <Text style={{ fontSize: 15 }}>Application of Information Technology</Text>
                        </View>

                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>ETR</Text>
                        </View>

                    </View>

                    <View style={{ backgroundColor: 'rgba(208, 204, 204, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>2024F</Text>
                        </View>

                        <View style={{ width: 200, flexDirection: 'row', justifyContent: 'center', borderColor: 'black' }} >
                            <Text style={{ fontSize: 15 }}>Application of Information Technology Lab</Text>
                        </View>

                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>ETR</Text>
                        </View>

                    </View>
                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>2024F</Text>
                        </View>

                        <View style={{ width: 200, flexDirection: 'row', justifyContent: 'center', borderColor: 'black' }} >
                            <Text style={{ fontSize: 15 }}>Programming Fundamentals</Text>
                        </View>

                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>ETR</Text>
                        </View>

                    </View>

                    <View style={{ backgroundColor: 'rgba(208, 204, 204, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>2024F</Text>
                        </View>

                        <View style={{ width: 200, flexDirection: 'row', justifyContent: 'center', borderColor: 'black' }} >
                            <Text style={{ fontSize: 15 }}>Programming Fundamentals Lab</Text>
                        </View>

                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>ETR</Text>
                        </View>

                    </View>

                </View>

                {/* Semes04 */}
                <View style={{marginTop:30}} >

                    <View style={{ backgroundColor: 'rgba(5, 168, 243, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>
                        <Text style={{ fontSize: 20 }}>4th Semester</Text>
                    </View>

                   
                    <View style={{ backgroundColor: 'rgba(5, 168, 243, 1)', marginTop: 3, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{width: 100, flexDirection: 'row', justifyContent:'center'}} >
                            <Text style={{ fontSize: 20}}>Session</Text>
                        </View>

                        <View style={{width:200,flexDirection:'row',justifyContent:'center'}} >
                            <Text style={{ fontSize: 20 }}>Course</Text>
                        </View>

                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 20}}>Status</Text>
                        </View>

                    </View>

                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{width: 100, flexDirection: 'row', justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>2024F</Text>
                        </View>

                        <View style={{width:200,flexDirection:'row',justifyContent:'center',borderColor:'black'}} >
                            <Text style={{ fontSize: 15 }}>Applied Physics</Text>
                        </View>

                        <View style={{ width: 100, flexDirection:'row',justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>Pass</Text>
                        </View>

                    </View>
                    
                    <View style={{ backgroundColor: 'rgba(208, 204, 204, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{width: 100, flexDirection: 'row', justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>2024F</Text>
                        </View>

                        <View style={{width:200,flexDirection:'row',justifyContent:'center',borderColor:'black'}} >
                            <Text style={{ fontSize: 15 }}>Applied Physics Lab</Text>
                        </View>

                        <View style={{ width: 100, flexDirection:'row',justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>Pass</Text>
                        </View>

                    </View>
                    
                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{width: 100, flexDirection: 'row', justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>2024F</Text>
                        </View>

                        <View style={{width:200,flexDirection:'row',justifyContent:'center',borderColor:'black'}} >
                            <Text style={{ fontSize: 15 }}>Linear Algebra</Text>
                        </View>

                        <View style={{ width: 100, flexDirection:'row',justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>Pass</Text>
                        </View>

                    </View>
                    
                    <View style={{ backgroundColor: 'rgba(208, 204, 204, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{width: 100, flexDirection: 'row', justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>2024F</Text>
                        </View>

                        <View style={{width:200,flexDirection:'row',justifyContent:'center',borderColor:'black'}} >
                            <Text style={{ fontSize: 15 }}>Pakistan Studies</Text>
                        </View>

                        <View style={{ width: 100, flexDirection:'row',justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>Pass</Text>
                        </View>

                    </View>

                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>2024F</Text>
                        </View>

                        <View style={{ width: 200, flexDirection: 'row', justifyContent: 'center', borderColor: 'black' }} >
                            <Text style={{ fontSize: 15 }}>Application of Information Technology</Text>
                        </View>

                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>Pass</Text>
                        </View>

                    </View>

                    <View style={{ backgroundColor: 'rgba(208, 204, 204, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>2024F</Text>
                        </View>

                        <View style={{ width: 200, flexDirection: 'row', justifyContent: 'center', borderColor: 'black' }} >
                            <Text style={{ fontSize: 15 }}>Application of Information Technology Lab</Text>
                        </View>

                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>Pass</Text>
                        </View>

                    </View>
                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>2024F</Text>
                        </View>

                        <View style={{ width: 200, flexDirection: 'row', justifyContent: 'center', borderColor: 'black' }} >
                            <Text style={{ fontSize: 15 }}>Programming Fundamentals</Text>
                        </View>

                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>Pass</Text>
                        </View>

                    </View>

                    <View style={{ backgroundColor: 'rgba(208, 204, 204, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>2024F</Text>
                        </View>

                        <View style={{ width: 200, flexDirection: 'row', justifyContent: 'center', borderColor: 'black' }} >
                            <Text style={{ fontSize: 15 }}>Programming Fundamentals Lab</Text>
                        </View>

                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>Pass</Text>
                        </View>

                    </View>

                </View>
                {/* Semes05 */}
                <View>

                    <View style={{ backgroundColor: 'rgba(5, 168, 243, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>
                        <Text style={{ fontSize: 20 }}>5th Semester</Text>
                    </View>

                   
                    <View style={{ backgroundColor: 'rgba(5, 168, 243, 1)', marginTop: 3, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{width: 100, flexDirection: 'row', justifyContent:'center'}} >
                            <Text style={{ fontSize: 20}}>Session</Text>
                        </View>

                        <View style={{width:200,flexDirection:'row',justifyContent:'center'}} >
                            <Text style={{ fontSize: 20 }}>Course</Text>
                        </View>

                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 20}}>Status</Text>
                        </View>

                    </View>

                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{width: 100, flexDirection: 'row', justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>2024F</Text>
                        </View>

                        <View style={{width:200,flexDirection:'row',justifyContent:'center',borderColor:'black'}} >
                            <Text style={{ fontSize: 15 }}>Applied Physics</Text>
                        </View>

                        <View style={{ width: 100, flexDirection:'row',justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>Pass</Text>
                        </View>

                    </View>
                    
                    <View style={{ backgroundColor: 'rgba(208, 204, 204, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{width: 100, flexDirection: 'row', justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>2024F</Text>
                        </View>

                        <View style={{width:200,flexDirection:'row',justifyContent:'center',borderColor:'black'}} >
                            <Text style={{ fontSize: 15 }}>Applied Physics Lab</Text>
                        </View>

                        <View style={{ width: 100, flexDirection:'row',justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>Pass</Text>
                        </View>

                    </View>
                    
                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{width: 100, flexDirection: 'row', justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>2024F</Text>
                        </View>

                        <View style={{width:200,flexDirection:'row',justifyContent:'center',borderColor:'black'}} >
                            <Text style={{ fontSize: 15 }}>Linear Algebra</Text>
                        </View>

                        <View style={{ width: 100, flexDirection:'row',justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>Pass</Text>
                        </View>

                    </View>
                    
                    <View style={{ backgroundColor: 'rgba(208, 204, 204, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{width: 100, flexDirection: 'row', justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>2024F</Text>
                        </View>

                        <View style={{width:200,flexDirection:'row',justifyContent:'center',borderColor:'black'}} >
                            <Text style={{ fontSize: 15 }}>Pakistan Studies</Text>
                        </View>

                        <View style={{ width: 100, flexDirection:'row',justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>Pass</Text>
                        </View>

                    </View>

                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>2024F</Text>
                        </View>

                        <View style={{ width: 200, flexDirection: 'row', justifyContent: 'center', borderColor: 'black' }} >
                            <Text style={{ fontSize: 15 }}>Application of Information Technology</Text>
                        </View>

                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>Pass</Text>
                        </View>

                    </View>

                    <View style={{ backgroundColor: 'rgba(208, 204, 204, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>2024F</Text>
                        </View>

                        <View style={{ width: 200, flexDirection: 'row', justifyContent: 'center', borderColor: 'black' }} >
                            <Text style={{ fontSize: 15 }}>Application of Information Technology Lab</Text>
                        </View>

                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>Pass</Text>
                        </View>

                    </View>
                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>2024F</Text>
                        </View>

                        <View style={{ width: 200, flexDirection: 'row', justifyContent: 'center', borderColor: 'black' }} >
                            <Text style={{ fontSize: 15 }}>Programming Fundamentals</Text>
                        </View>

                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>Pass</Text>
                        </View>

                    </View>

                    <View style={{ backgroundColor: 'rgba(208, 204, 204, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>2024F</Text>
                        </View>

                        <View style={{ width: 200, flexDirection: 'row', justifyContent: 'center', borderColor: 'black' }} >
                            <Text style={{ fontSize: 15 }}>Programming Fundamentals Lab</Text>
                        </View>

                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>Pass</Text>
                        </View>

                    </View>

                </View>

                {/* Semes06 */}
                <View style={{marginTop:30}} >

                    <View style={{ backgroundColor: 'rgba(5, 168, 243, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>
                        <Text style={{ fontSize: 20 }}>6th Semester</Text>
                    </View>

                   
                    <View style={{ backgroundColor: 'rgba(5, 168, 243, 1)', marginTop: 3, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{width: 100, flexDirection: 'row', justifyContent:'center'}} >
                            <Text style={{ fontSize: 20}}>Session</Text>
                        </View>

                        <View style={{width:200,flexDirection:'row',justifyContent:'center'}} >
                            <Text style={{ fontSize: 20 }}>Course</Text>
                        </View>

                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 20}}>Status</Text>
                        </View>

                    </View>

                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{width: 100, flexDirection: 'row', justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>2024F</Text>
                        </View>

                        <View style={{width:200,flexDirection:'row',justifyContent:'center',borderColor:'black'}} >
                            <Text style={{ fontSize: 15 }}>Applied Physics</Text>
                        </View>

                        <View style={{ width: 100, flexDirection:'row',justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>Pass</Text>
                        </View>

                    </View>
                    
                    <View style={{ backgroundColor: 'rgba(208, 204, 204, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{width: 100, flexDirection: 'row', justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>2024F</Text>
                        </View>

                        <View style={{width:200,flexDirection:'row',justifyContent:'center',borderColor:'black'}} >
                            <Text style={{ fontSize: 15 }}>Applied Physics Lab</Text>
                        </View>

                        <View style={{ width: 100, flexDirection:'row',justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>Pass</Text>
                        </View>

                    </View>
                    
                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{width: 100, flexDirection: 'row', justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>2024F</Text>
                        </View>

                        <View style={{width:200,flexDirection:'row',justifyContent:'center',borderColor:'black'}} >
                            <Text style={{ fontSize: 15 }}>Linear Algebra</Text>
                        </View>

                        <View style={{ width: 100, flexDirection:'row',justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>Pass</Text>
                        </View>

                    </View>
                    
                    <View style={{ backgroundColor: 'rgba(208, 204, 204, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{width: 100, flexDirection: 'row', justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>2024F</Text>
                        </View>

                        <View style={{width:200,flexDirection:'row',justifyContent:'center',borderColor:'black'}} >
                            <Text style={{ fontSize: 15 }}>Pakistan Studies</Text>
                        </View>

                        <View style={{ width: 100, flexDirection:'row',justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>Pass</Text>
                        </View>

                    </View>

                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>2024F</Text>
                        </View>

                        <View style={{ width: 200, flexDirection: 'row', justifyContent: 'center', borderColor: 'black' }} >
                            <Text style={{ fontSize: 15 }}>Application of Information Technology</Text>
                        </View>

                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>Pass</Text>
                        </View>

                    </View>

                    <View style={{ backgroundColor: 'rgba(208, 204, 204, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>2024F</Text>
                        </View>

                        <View style={{ width: 200, flexDirection: 'row', justifyContent: 'center', borderColor: 'black' }} >
                            <Text style={{ fontSize: 15 }}>Application of Information Technology Lab</Text>
                        </View>

                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>Pass</Text>
                        </View>

                    </View>
                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>2024F</Text>
                        </View>

                        <View style={{ width: 200, flexDirection: 'row', justifyContent: 'center', borderColor: 'black' }} >
                            <Text style={{ fontSize: 15 }}>Programming Fundamentals</Text>
                        </View>

                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>Pass</Text>
                        </View>

                    </View>

                    <View style={{ backgroundColor: 'rgba(208, 204, 204, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>2024F</Text>
                        </View>

                        <View style={{ width: 200, flexDirection: 'row', justifyContent: 'center', borderColor: 'black' }} >
                            <Text style={{ fontSize: 15 }}>Programming Fundamentals Lab</Text>
                        </View>

                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>Pass</Text>
                        </View>

                    </View>

                </View>
                {/* Semes07 */}
                <View>

                    <View style={{ backgroundColor: 'rgba(5, 168, 243, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>
                        <Text style={{ fontSize: 20 }}>7th Semester</Text>
                    </View>

                   
                    <View style={{ backgroundColor: 'rgba(5, 168, 243, 1)', marginTop: 3, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{width: 100, flexDirection: 'row', justifyContent:'center'}} >
                            <Text style={{ fontSize: 20}}>Session</Text>
                        </View>

                        <View style={{width:200,flexDirection:'row',justifyContent:'center'}} >
                            <Text style={{ fontSize: 20 }}>Course</Text>
                        </View>

                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 20}}>Status</Text>
                        </View>

                    </View>

                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{width: 100, flexDirection: 'row', justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>2024F</Text>
                        </View>

                        <View style={{width:200,flexDirection:'row',justifyContent:'center',borderColor:'black'}} >
                            <Text style={{ fontSize: 15 }}>Applied Physics</Text>
                        </View>

                        <View style={{ width: 100, flexDirection:'row',justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>Pass</Text>
                        </View>

                    </View>
                    
                    <View style={{ backgroundColor: 'rgba(208, 204, 204, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{width: 100, flexDirection: 'row', justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>2024F</Text>
                        </View>

                        <View style={{width:200,flexDirection:'row',justifyContent:'center',borderColor:'black'}} >
                            <Text style={{ fontSize: 15 }}>Applied Physics Lab</Text>
                        </View>

                        <View style={{ width: 100, flexDirection:'row',justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>Pass</Text>
                        </View>

                    </View>
                    
                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{width: 100, flexDirection: 'row', justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>2024F</Text>
                        </View>

                        <View style={{width:200,flexDirection:'row',justifyContent:'center',borderColor:'black'}} >
                            <Text style={{ fontSize: 15 }}>Linear Algebra</Text>
                        </View>

                        <View style={{ width: 100, flexDirection:'row',justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>Pass</Text>
                        </View>

                    </View>
                    
                    <View style={{ backgroundColor: 'rgba(208, 204, 204, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{width: 100, flexDirection: 'row', justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>2024F</Text>
                        </View>

                        <View style={{width:200,flexDirection:'row',justifyContent:'center',borderColor:'black'}} >
                            <Text style={{ fontSize: 15 }}>Pakistan Studies</Text>
                        </View>

                        <View style={{ width: 100, flexDirection:'row',justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>Pass</Text>
                        </View>

                    </View>

                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>2024F</Text>
                        </View>

                        <View style={{ width: 200, flexDirection: 'row', justifyContent: 'center', borderColor: 'black' }} >
                            <Text style={{ fontSize: 15 }}>Application of Information Technology</Text>
                        </View>

                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>Pass</Text>
                        </View>

                    </View>

                    <View style={{ backgroundColor: 'rgba(208, 204, 204, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>2024F</Text>
                        </View>

                        <View style={{ width: 200, flexDirection: 'row', justifyContent: 'center', borderColor: 'black' }} >
                            <Text style={{ fontSize: 15 }}>Application of Information Technology Lab</Text>
                        </View>

                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>Pass</Text>
                        </View>

                    </View>
                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>2024F</Text>
                        </View>

                        <View style={{ width: 200, flexDirection: 'row', justifyContent: 'center', borderColor: 'black' }} >
                            <Text style={{ fontSize: 15 }}>Programming Fundamentals</Text>
                        </View>

                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>Pass</Text>
                        </View>

                    </View>

                    <View style={{ backgroundColor: 'rgba(208, 204, 204, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>2024F</Text>
                        </View>

                        <View style={{ width: 200, flexDirection: 'row', justifyContent: 'center', borderColor: 'black' }} >
                            <Text style={{ fontSize: 15 }}>Programming Fundamentals Lab</Text>
                        </View>

                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>Pass</Text>
                        </View>

                    </View>

                </View>

                {/* Semes08 */}
                <View style={{marginTop:30}} >

                    <View style={{ backgroundColor: 'rgba(5, 168, 243, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>
                        <Text style={{ fontSize: 20 }}>8th Semester</Text>
                    </View>

                   
                    <View style={{ backgroundColor: 'rgba(5, 168, 243, 1)', marginTop: 3, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{width: 100, flexDirection: 'row', justifyContent:'center'}} >
                            <Text style={{ fontSize: 20}}>Session</Text>
                        </View>

                        <View style={{width:200,flexDirection:'row',justifyContent:'center'}} >
                            <Text style={{ fontSize: 20 }}>Course</Text>
                        </View>

                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 20}}>Status</Text>
                        </View>

                    </View>

                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{width: 100, flexDirection: 'row', justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>2024F</Text>
                        </View>

                        <View style={{width:200,flexDirection:'row',justifyContent:'center',borderColor:'black'}} >
                            <Text style={{ fontSize: 15 }}>Applied Physics</Text>
                        </View>

                        <View style={{ width: 100, flexDirection:'row',justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>Pass</Text>
                        </View>

                    </View>
                    
                    <View style={{ backgroundColor: 'rgba(208, 204, 204, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{width: 100, flexDirection: 'row', justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>2024F</Text>
                        </View>

                        <View style={{width:200,flexDirection:'row',justifyContent:'center',borderColor:'black'}} >
                            <Text style={{ fontSize: 15 }}>Applied Physics Lab</Text>
                        </View>

                        <View style={{ width: 100, flexDirection:'row',justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>Pass</Text>
                        </View>

                    </View>
                    
                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{width: 100, flexDirection: 'row', justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>2024F</Text>
                        </View>

                        <View style={{width:200,flexDirection:'row',justifyContent:'center',borderColor:'black'}} >
                            <Text style={{ fontSize: 15 }}>Linear Algebra</Text>
                        </View>

                        <View style={{ width: 100, flexDirection:'row',justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>Pass</Text>
                        </View>

                    </View>
                    
                    <View style={{ backgroundColor: 'rgba(208, 204, 204, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{width: 100, flexDirection: 'row', justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>2024F</Text>
                        </View>

                        <View style={{width:200,flexDirection:'row',justifyContent:'center',borderColor:'black'}} >
                            <Text style={{ fontSize: 15 }}>Pakistan Studies</Text>
                        </View>

                        <View style={{ width: 100, flexDirection:'row',justifyContent:'center'}} >
                            <Text style={{ fontSize: 15}}>Pass</Text>
                        </View>

                    </View>

                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>2024F</Text>
                        </View>

                        <View style={{ width: 200, flexDirection: 'row', justifyContent: 'center', borderColor: 'black' }} >
                            <Text style={{ fontSize: 15 }}>Application of Information Technology</Text>
                        </View>

                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>Pass</Text>
                        </View>

                    </View>

                    <View style={{ backgroundColor: 'rgba(208, 204, 204, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>2024F</Text>
                        </View>

                        <View style={{ width: 200, flexDirection: 'row', justifyContent: 'center', borderColor: 'black' }} >
                            <Text style={{ fontSize: 15 }}>Application of Information Technology Lab</Text>
                        </View>

                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>Pass</Text>
                        </View>

                    </View>
                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>2024F</Text>
                        </View>

                        <View style={{ width: 200, flexDirection: 'row', justifyContent: 'center', borderColor: 'black' }} >
                            <Text style={{ fontSize: 15 }}>Programming Fundamentals</Text>
                        </View>

                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>Pass</Text>
                        </View>

                    </View>

                    <View style={{ backgroundColor: 'rgba(208, 204, 204, 1)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50 }}>


                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>2024F</Text>
                        </View>

                        <View style={{ width: 200, flexDirection: 'row', justifyContent: 'center', borderColor: 'black' }} >
                            <Text style={{ fontSize: 15 }}>Programming Fundamentals Lab</Text>
                        </View>

                        <View style={{ width: 100, flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 15 }}>Pass</Text>
                        </View>

                    </View>

                </View>
                
                {/*COuRSE STATUS*/}
                <View style={{marginTop:50}} >

                    <View style={{ backgroundColor: 'rgba(16, 110, 234, 1)',height:40}} >
                        <Text style={{fontWeight:900 , fontStyle:'bold',color:'white',fontSize:15,margin:10}}>Course Status</Text>
                    </View>

                    <View style={{flexDirection:'row',height:40}} >
                        <View style={{ width:120,borderColor:'rgba(210, 205, 205, 1)' , borderWidth:1 }}>
                            <Text style={{color:'rgba(41, 157, 190, 1)',margin:8}} >PASS</Text>
                        </View>
                        <View style={{ width: 300, borderColor: 'rgba(210, 205, 205, 1)' , borderWidth:1,marginLeft:0 }}>
                            <Text style={{margin:8}} >Pass</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',height:40}} >
                        <View style={{ width:120,borderColor:'rgba(210, 205, 205, 1)' , borderWidth:1 }}>
                            <Text style={{color:'rgba(185, 190, 41, 1)',margin:8}} >IN_PROG</Text>
                        </View>
                        <View style={{ width: 300, borderColor: 'rgba(210, 205, 205, 1)' , borderWidth:1,marginLeft:0 }}>
                            <Text style={{margin:8}} >In progress</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',height:40}} >
                        <View style={{ width:120,borderColor:'rgba(210, 205, 205, 1)' , borderWidth:1 }}>
                            <Text style={{color:'rgba(41, 103, 190, 1)',margin:8}} >ETR</Text>
                        </View>
                        <View style={{ width: 300, borderColor: 'rgba(210, 205, 205, 1)' , borderWidth:1,marginLeft:0 }}>
                            <Text style={{margin:8}} >Eligible To Register</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',height:40}} >
                        <View style={{ width:120,borderColor:'rgba(210, 205, 205, 1)' , borderWidth:1 }}>
                            <Text style={{color:'rgba(135, 29, 29, 1)',margin:8}} >NETR</Text>
                        </View>
                        <View style={{ width: 300, borderColor: 'rgba(210, 205, 205, 1)' , borderWidth:1,marginLeft:0 }}>
                            <Text style={{margin:8}} >Eligible To Register</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',height:40}} >
                        <View style={{ width:120,borderColor:'rgba(210, 205, 205, 1)' , borderWidth:1 }}>
                            <Text style={{color:'rgba(108, 53, 162, 1)',margin:8}} >SUB_PASS</Text>
                        </View>
                        <View style={{ width: 300, borderColor: 'rgba(210, 205, 205, 1)' , borderWidth:1,marginLeft:0 }}>
                            <Text style={{ margin: 8 }} >Substitute Course Pass</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',height:40}} >
                        <View style={{ width:120,borderColor:'rgba(210, 205, 205, 1)' , borderWidth:1 }}>
                            <Text style={{color:'rgba(53, 162, 87, 1)',margin:8}} >SUB_IN_PROG</Text>
                        </View>
                        <View style={{ width: 300, borderColor: 'rgba(210, 205, 205, 1)' , borderWidth:1,marginLeft:0 }}>
                            <Text style={{ margin: 8 }} >Substitute Course In Pass</Text>
                        </View>
                    </View>


                </View>

                {/* CURRENT BALANCE */}
                <View style={{marginTop:50}} >
                    <View style={{}} >
                        <Text style={{fontSize:20}} >CURRENT BALANCE</Text>
                    </View>

                    <View style={{ marginTop: 10, flexDirection: 'row', backgroundColor: 'rgba(16, 110, 234, 1)', height: 40, alignItems: 'center', justifyContent: 'center' }} >
                        <View style={{width:250 ,flexDirection:'row' , alignItems:'center' , justifyContent:'center' }} >
                            <Text style={{color:'white' , fontSize:15,flexDirection:'row' , alignItems:'center' , justifyContent:'center' }} >Discription</Text>
                        </View>

                        <View style={{width:200 ,flexDirection:'row' , alignItems:'center' , justifyContent:'center' }} >
                            <Text style={{color:'white' , fontSize:15,flexDirection:'row' , alignItems:'center' , justifyContent:'center' }} >Amount</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', backgroundColor: 'rgba(255, 255, 255, 1)', height: 40, alignItems: 'center', justifyContent: 'center' }} >
                        <View style={{width:250 ,flexDirection:'row' , alignItems:'center' , justifyContent:'center' }} >
                            <Text style={{color:'black' , fontSize:15,flexDirection:'row' , alignItems:'center' , justifyContent:'center' }} >Current Amount</Text>
                        </View>

                        <View style={{width:200 ,flexDirection:'row' , alignItems:'center' , justifyContent:'center' }} >
                            <Text style={{color:'black' , fontSize:15,flexDirection:'row' , alignItems:'center' , justifyContent:'center' }} >148700</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', backgroundColor: 'rgba(208, 211, 215, 1)', height: 40, alignItems: 'center', justifyContent: 'center' }} >
                        <View style={{width:250 ,flexDirection:'row' , alignItems:'center' , justifyContent:'center' }} >
                            <Text style={{color:'black' , fontSize:15,flexDirection:'row' , alignItems:'center' , justifyContent:'center' }} >Loan/Deferment Amount</Text>
                        </View>

                        <View style={{width:200 ,flexDirection:'row' , alignItems:'center' , justifyContent:'center' }} >
                            <Text style={{color:'black' , fontSize:15,flexDirection:'row' , alignItems:'center' , justifyContent:'center' }} >0</Text>
                        </View>
                    </View>

                </View>

                <View style={{marginTop: 20, height: 40, backgroundColor: 'rgba(16, 110, 234, 1)',justifyContent:'center' , alignItems:'center'}} >
                    <Text style={{color:'white' , fontSize:15}}> GPA/CGPA SUMMARY</Text>
                </View>

                <View style={{ }} >

                    <View style={{ marginTop: 10, flexDirection: 'row', backgroundColor: 'rgba(16, 110, 234, 1)', height: 40}} >

                        <View style={{ width: 130, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                            <Text style={{ color: 'white', fontSize: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >SESSION</Text>
                        </View>

                        <View style={{ width: 120, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                            <Text style={{ color: 'white', fontSize: 15}} >NO OF COURCES</Text>
                        </View>
                        <View style={{ width: 80, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                            <Text style={{ color: 'white', fontSize: 15}} >GPA</Text>
                        </View>
                        <View style={{ width: 80, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                            <Text style={{ color: 'white', fontSize: 15}} >CGPA</Text>
                        </View>

                    </View>
                    <View style={{flexDirection: 'row', backgroundColor: 'rgba(255, 255, 255, 1)', height: 40}} >

                        <View style={{ width: 130, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                            <Text style={{ color: 'black', fontSize: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >2024 FALL</Text>
                        </View>

                        <View style={{ width: 120, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                            <Text style={{ color: 'black', fontSize: 15}} >8</Text>
                        </View>
                        <View style={{ width: 80, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                            <Text style={{ color: 'black', fontSize: 15}} >3.72</Text>
                        </View>
                        <View style={{ width: 80, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                            <Text style={{ color: 'black', fontSize: 15}} >3.72</Text>
                        </View>

                    </View>
                    <View style={{flexDirection: 'row', backgroundColor: 'rgba(229, 227, 227, 1)', height: 40}} >

                        <View style={{ width: 130, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                            <Text style={{ color: 'black', fontSize: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >2025 SPRING</Text>
                        </View>

                        <View style={{ width: 120, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                            <Text style={{ color: 'black', fontSize: 15}} >7</Text>
                        </View>
                        <View style={{ width: 80, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                            <Text style={{ color: 'black', fontSize: 15}} >3.78</Text>
                        </View>
                        <View style={{ width: 80, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                            <Text style={{ color: 'black', fontSize: 15}} >3.75</Text>
                        </View>

                    </View>

                   </View>




            </View>
        </ScrollView>
    )
}