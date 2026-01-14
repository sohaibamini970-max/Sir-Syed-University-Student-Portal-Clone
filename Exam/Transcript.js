import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert, ScrollView, ActivityIndicator, Image } from 'react-native';
import ViewShot from 'react-native-view-shot';
import RNFS from 'react-native-fs';
import Share from 'react-native-share';

export default function Transcript({ route }) {
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

    const courses1 = user
        ? [
            { name: user.semester1course1, credithour: 3, marks: 100, achievedmarks: user.semester1course1marks },
            { name: user.semester1course2, credithour: 3, marks: 100, achievedmarks: user.semester1course2marks },
            { name: user.semester1course3, credithour: 3, marks: 100, achievedmarks: user.semester1course3marks },
            { name: user.semester1course4, credithour: 2, marks: 100, achievedmarks: user.semester1course4marks },
            { name: user.semester1course5, credithour: 3, marks: 100, achievedmarks: user.semester1course5marks },
            { name: user.semester1course6, credithour: 1, marks: 50, achievedmarks: user.semester1course6marks },
            { name: user.semester1course7, credithour: 1, marks: 50, achievedmarks: user.semester1course7marks },
            { name: user.semester1course8, credithour: 1, marks: 50, achievedmarks: user.semester1course8marks },
        ]
        : [];
    const courses2 = user
        ? [
            { name: user.semester2course1, credithour: 3, marks: 100, achievedmarks: user.semester2course1marks },
            { name: user.semester2course2, credithour: 2, marks: 100, achievedmarks: user.semester2course2marks },
            { name: user.semester2course3, credithour: 2, marks: 100, achievedmarks: user.semester2course3marks },
            { name: user.semester2course4, credithour: 3, marks: 100, achievedmarks: user.semester2course4marks },
            { name: user.semester2course5, credithour: 3, marks: 100, achievedmarks: user.semester2course5marks },
            { name: user.semester2course6, credithour: 1, marks: 50, achievedmarks: user.semester2course6marks },
            { name: user.semester2course7, credithour: 1, marks: 50, achievedmarks: user.semester2course7marks },
        ]
        : [];

    const courseGPAs1 = courses1.map(course => {
        // Handle for 1 credit hour
        if (course.credithour === 1) {
            if (course.achievedmarks >= 43) return 4;
            if (course.achievedmarks >= 40) return 3.66;
            if(course.achievedmarks  >=36) return 3;
            return 2.5;
        }

        // Handle for 2 or 3 credit hours
        if (course.achievedmarks >= 86) return 4;
        if (course.achievedmarks >= 80) return 3.66;
        if (course.achievedmarks >= 75) return 3.33;
        if (course.achievedmarks >= 70) return 3;
        return 2.5; // Marks < 70
    });
    const courseGPAs2 = courses1.map(course => {
        // Handle for 1 credit hour
        if (course.credithour === 1) {
            if (course.achievedmarks >= 43) return 4;
            if (course.achievedmarks >= 40) return 3.66;
            if(course.achievedmarks  >=36) return 3;
            return 2.5;
        }

        // Handle for 2 or 3 credit hours
        if (course.achievedmarks >= 86) return 4;
        if (course.achievedmarks >= 80) return 3.66;
        if (course.achievedmarks >= 75) return 3.33;
        if (course.achievedmarks >= 70) return 3;
        return 2.5; // Marks < 70
    });

    // Calculate the total GPA and CGPA
    const totalGPA1 = courseGPAs1.reduce((acc, gpa) => acc + gpa, 0);
    const gpa1 = totalGPA1 / courseGPAs1.length; // GPA is the average of the course GPAs
    const cgpa1 = gpa1; // Assuming CGPA is the same as GPA in this example
    const totalGPA2 = courseGPAs2.reduce((acc, gpa) => acc + gpa, 0);
    const gpa2 = totalGPA2 / courseGPAs2.length; // GPA is the average of the course GPAs
    const cgpa2 = gpa2; // Assuming CGPA is the same as GPA in this example

    const getGrade = (course) => {
        const marks = course.achievedmarks;
        const ch = course.credithour;

        if (ch === 1) {
            if (marks >= 43) return 'A';
            if (marks >= 40) return 'A-';
            if (marks >= 36) return 'B';
            if (marks >= 30) return 'B-';
            if (marks >= 25) return 'C';
            return 'F'; // marks <= 24
        }

        if (ch === 2 || ch === 3) {
            if (marks >= 86) return 'A';
            if (marks >= 80) return 'A-';
            if (marks >= 75) return 'B';
            if (marks >= 70) return 'B-';
            return 'C';
        }

        return '';
    };


    return (
        <ScrollView contentContainerStyle={{ backgroundColor: 'rgba(226,224,224,1)', flexGrow: 1, paddingTop: 20, alignItems: 'center' }}>
            {loading ? (
                <ActivityIndicator size="large" />
            ) : user ? (
                <>

                    <View style={{ backgroundColor: 'rgba(226, 224, 224, 1)', marginTop: 20,width:'100%' }} >

                        <View style={{ backgroundColor: 'white', height: 50 }} >

                            <View style={{ marginLeft: 20, flexDirection: 'row', margin: 13 }} >

                                <Text style={{ fontSize: 15, color: 'rgba(135, 132, 132, 1)' }} >Exam</Text>
                                <Text style={{ fontSize: 15, width: 15, marginLeft: 5, color: 'rgba(135, 132, 132, 1)' }} >•</Text>
                                <Text style={{ fontSize: 15, color: 'rgba(0, 119, 255, 1)' }} >Print Unofficial Transcript</Text>

                            </View>

                        </View>


                        <View style={{ marginTop: 30, backgroundColor: 'white', height: 200 }}>
                            <View style={{ margin: 20 }}>

                                <View style={{}}>
                                    <Text style={{ fontSize: 20, fontWeight: '900' }}>Program</Text>
                                </View>

                                <View style={{ borderColor: 'rgba(206, 201, 201, 1)', borderRadius: 5, borderWidth: 1, width: 300, height: 30, flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ marginLeft: 10, color: 'rgba(135, 133, 133, 1)' }}>(BS) - Computer Science - MOR</Text>
                                </View>
                                <View style={{ marginTop: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>

                                    <TouchableOpacity
                                        style={{ backgroundColor: 'rgba(23, 114, 234, 1)', marginRight: 30, width: 100, height: 50, borderRadius: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
                                        onPress={generateVoucher}
                                    >
                                        <Text style={{ color: 'white', fontSize: 15, fontWeight: '900' }}>Print</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{ backgroundColor: 'rgba(23, 114, 234, 1)', width: 150, height: 50, borderRadius: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ color: 'white', fontSize: 15, fontWeight: '900' }}>Print Backside</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>

                        </View>

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
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{}}>


                                        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Transcript</Text>
                                        <Text style={{ fontWeight: 'bold' }} >Student Name: {user.name}</Text>
                                        <Text style={{ fontWeight: 'bold' }} >Roll No: {user.registrationNo}</Text>
                                        <Text style={{ fontWeight: 'bold' }} >Batch: {user.batch}</Text>
                                        <Text style={{ fontWeight: 'bold' }} >Enrollment No: {user.id}</Text>
                                        <Text style={{ fontWeight: 'bold' }} >Program: {user.program}</Text>
                                    </View>
                                    <View style={{}}>

                                        <Image
                                            source={{ uri: user.profilepic }}
                                            style={{ width: 100, height: 100, marginBottom: 20 }}
                                        />
                                    </View>

                                </View>

                                <View style={{ marginTop:10 }}>
                                    <Text style={{ textAlign:'center',fontSize:20,fontWeight:'bold' }}>Semester 1st</Text>
                                </View>

                                <View style={{ marginTop: 20, flexDirection: 'row', marginLeft: -10, borderColor: 'black', borderWidth: 1, width: 380, height: 50, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 15, width: 115, textAlign: 'center' }}>Course</Text>
                                    <Text style={{ fontSize: 15, width: 70, textAlign: 'center' }}>Credit{'\n'} Hour</Text>
                                    <Text style={{ fontSize: 15, width: 80, textAlign: 'center' }}>Marks</Text>
                                    <Text style={{ fontSize: 15, width: 70, textAlign: 'center' }}>Grade</Text>
                                    <Text style={{ fontSize: 15, width: 70, textAlign: 'center' }}>GPs</Text>
                                </View>

                                {courses1.map((course, index) => (
                                    <View
                                        key={index}
                                        style={{
                                            marginTop: index === 0 ? 0 : -50,
                                            flexDirection: 'row',
                                            marginLeft: -10,
                                            width: 390,
                                            height: 150,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Text style={{ fontSize: 15, width: 110, textAlign: 'center' }}>
                                            {course.name}
                                        </Text>

                                        <Text style={{ fontSize: 15, width: 60, textAlign: 'center' }}>
                                            {course.credithour}
                                        </Text>

                                        <Text style={{ fontSize: 15, width: 80, textAlign: 'center' }}>
                                            {course.marks}
                                        </Text>

                                        <Text style={{ fontSize: 15, width: 70, textAlign: 'center' }}>
                                            {getGrade(course)}
                                        </Text>

                                        <Text style={{ fontSize: 15, width: 70, textAlign: 'center' }}>
                                            {
                                                course.credithour === 1
                                                    ? course.achievedmarks >= 43
                                                        ? '4'
                                                        : course.achievedmarks >= 40
                                                            ? '3.66'
                                                            : '2.5'
                                                    : course.credithour === 2 || course.credithour === 3
                                                        ? course.achievedmarks >= 86
                                                            ? '4'
                                                            : course.achievedmarks >= 80
                                                                ? '3.66'
                                                                : course.achievedmarks >= 75
                                                                    ? '3.33'
                                                                    : course.achievedmarks >= 70
                                                                        ? '3'
                                                                        : '2.5'
                                                        : ''
                                            }
                                        </Text>
                                    </View>
                                ))}

                                <View style={{ borderBottomWidth: 1, borderWidth: 1, borderBottomColor: 'black', width: 390, marginLeft: -17, marginTop: -40 }}>

                                </View>


                                <View style={{ flexDirection: 'row', marginTop: 20 }}>


                                    <View style={{ width: 150 }}>
                                        <Text style={{}}>Maximum Marks </Text>
                                        <Text style={{}}>Obtained Marks</Text>
                                    </View>

                                    <View style={{ width: 100 }}>
                                        <Text style={{}}>650</Text>
                                        <Text style={{}}> {
                                            (parseInt(user.semester1course1marks) || 0) +
                                            (parseInt(user.semester1course2marks) || 0) +
                                            (parseInt(user.semester1course3marks) || 0) +
                                            (parseInt(user.semester1course4marks) || 0) +
                                            (parseInt(user.semester1course5marks) || 0) +
                                            (parseInt(user.semester1course6marks) || 0) +
                                            (parseInt(user.semester1course7marks) || 0) +
                                            (parseInt(user.semester1course8marks) || 0)
                                        }</Text>
                                    </View>

                                    <View style={{ width: 150 }}>
                                        <Text style={{}}>GPA:  {gpa1.toFixed(2)}</Text>
                                        <Text style={{}}>CGPA: {cgpa1.toFixed(2)}</Text>
                                    </View>

                                </View>

                                  <View style={{ borderBottomWidth: 1, borderWidth: 1, borderBottomColor: 'black', width: 390, marginLeft: -17,marginTop:15 }}></View>

                                    <View style={{ marginTop: 20 }}>
                                        <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>2nd Semester</Text>
                                    </View>

                                    <View style={{ marginTop: 30, flexDirection: 'row', marginLeft: -10, borderColor: 'black', borderWidth: 1, width: 380, height: 50, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 15, width: 115, textAlign: 'center' }}>Course</Text>
                                        <Text style={{ fontSize: 15, width: 70, textAlign: 'center' }}>Credit{'\n'} Hour</Text>
                                        <Text style={{ fontSize: 15, width: 80, textAlign: 'center' }}>Marks</Text>
                                        <Text style={{ fontSize: 15, width: 70, textAlign: 'center' }}>Grade</Text>
                                        <Text style={{ fontSize: 15, width: 70, textAlign: 'center' }}>GPs</Text>
                                    </View>

                                    {courses2.map((course, index) => (
                                        <View
                                            key={index}
                                            style={{
                                                marginTop: index === 0 ? 0 : -50,
                                                flexDirection: 'row',
                                                marginLeft: -10,
                                                width: 390,
                                                height: 150,
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <Text style={{ fontSize: 15, width: 110, textAlign: 'center' }}>
                                                {course.name}
                                            </Text>

                                            <Text style={{ fontSize: 15, width: 60, textAlign: 'center' }}>
                                                {course.credithour}
                                            </Text>

                                            <Text style={{ fontSize: 15, width: 80, textAlign: 'center' }}>
                                                {course.marks}
                                            </Text>

                                            <Text style={{ fontSize: 15, width: 70, textAlign: 'center' }}>
                                                {getGrade(course)}
                                            </Text>

                                            <Text style={{ fontSize: 15, width: 70, textAlign: 'center' }}>
                                                {
                                                    course.credithour === 1
                                                        ? course.achievedmarks >= 43
                                                            ? '4'
                                                            : course.achievedmarks >= 40
                                                                ? '3.66'
                                                                : '2.5'
                                                        : course.credithour === 2 || course.credithour === 3
                                                            ? course.achievedmarks >= 86
                                                                ? '4'
                                                                : course.achievedmarks >= 80
                                                                    ? '3.66'
                                                                    : course.achievedmarks >= 75
                                                                        ? '3.33'
                                                                        : course.achievedmarks >= 70
                                                                            ? '3'
                                                                            : '2.5'
                                                            : ''
                                                }
                                            </Text>
                                        </View>
                                    ))}

                                    <View style={{ borderBottomWidth: 1, borderWidth: 1, borderBottomColor: 'black', width: 390, marginLeft: -17, marginTop: -40 }}>

                                    </View>


                                    <View style={{ flexDirection: 'row', marginTop: 20 }}>


                                        <View style={{ width: 150 }}>
                                            <Text style={{}}>Maximum Marks </Text>
                                            <Text style={{}}>Obtained Marks</Text>
                                        </View>

                                        <View style={{ width: 100 }}>
                                            <Text style={{}}>600</Text>
                                            <Text style={{}}> {
                                                (parseInt(user.semester2course1marks) || 0) +
                                                (parseInt(user.semester2course2marks) || 0) +
                                                (parseInt(user.semester2course3marks) || 0) +
                                                (parseInt(user.semester2course4marks) || 0) +
                                                (parseInt(user.semester2course5marks) || 0) +
                                                (parseInt(user.semester2course6marks) || 0) +
                                                (parseInt(user.semester2course7marks) || 0) 
                                            }</Text>
                                        </View>

                                        <View style={{ width: 150 }}>
                                            <Text style={{}}>GPA:  {gpa2.toFixed(2)}</Text>
                                            <Text style={{}}> CGPA: {(parseFloat(gpa1.toFixed(2)) + parseFloat(gpa2.toFixed(2))).toFixed(2) / 2}</Text>
                                        </View>

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
    )
}