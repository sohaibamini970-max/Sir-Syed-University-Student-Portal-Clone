import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Assessment({ route }) {

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
                setLoading(false);
            });
    }, [regNo]);

    const assessmentsData = useMemo(() => {
        if (!user) return {};

        return {
            coal: [
                { type: 'Mid Term', teacher: user.coalteacher, marks: user.course1midmarks },
                { type: 'Assignment 1', teacher: user.coalteacher, marks: user.Course1asg1marks },
                { type: 'Assignment 2', teacher: user.coalteacher, marks: user.Course1asg2marks },
                { type: 'Assignment 3', teacher: user.coalteacher, marks: user.Course1asg3marks },
            ],
            dsa: [
                { type: 'Mid Term', teacher: user.dsaTeacher, marks: user.course2midmarks },
                { type: 'Assignment 1', teacher: user.dsaTeacher, marks: user.Course2asg1marks },
                { type: 'Assignment 2', teacher: user.dsaTeacher, marks: user.Course2asg2marks },
                { type: 'Assignment 3', teacher: user.dsaTeacher, marks: user.Course2asg3marks },
            ],
            ds: [
                { type: 'Mid Term', teacher: user.discreteteacher, marks: user.course3midmarks },
                { type: 'Assignment 1', teacher: user.discreteteacher, marks: user.Course3asg1marks },
                { type: 'Assignment 2', teacher: user.discreteteacher, marks: user.Course3asg2marks },
                { type: 'Assignment 3', teacher: user.discreteteacher, marks: user.Course3asg3marks },
            ],
            mad: [
                { type: 'Mid Term', teacher: user.madteacher, marks: user.course4midmarks },
                { type: 'Assignment 1', teacher: user.madteacher, marks: user.Course4asg1marks },
                { type: 'Assignment 2', teacher: user.madteacher, marks: user.Course4asg2marks },
            ],
            exp: [
                { type: 'Mid Term', teacher: user.expoteacher, marks: user.course5midmarks },
                { type: 'Assignment 1', teacher: user.expoteacher, marks: user.Course5asg1marks },
                { type: 'Assignment 2', teacher: user.expoteacher, marks: user.Course5asg2marks },
                { type: 'Assignment 3', teacher: user.expoteacher, marks: user.Course5asg3marks },
            ],
            coalLab: [
                { type: 'Lab', teacher: user.coalLabTeacher, marks: user.course6marks },
            ],
            dsaLab: [
                { type: 'Lab', teacher: user.dsaLabTeacher, marks: user.course7marks },
            ],
            madLab: [
                { type: 'Lab', teacher: user.madLabTeacher, marks: user.course8marks },
            ],
            pf: [
                { type: 'Mid Term', teacher: "Abdul Khalique", marks: 23 },
                { type: 'Assignment 1', teacher: "Abdul Khalique", marks: 3 },
                { type: 'Assignment 2', teacher: "Abdul Khalique", marks: 3 },
                { type: 'Assignment 3', teacher: "Abdul Khalique", marks: 3 },
                { type: 'Quiz 1', teacher: "Abdul Khalique", marks: 4 },
                { type: 'Quiz 2', teacher: "Abdul Khalique", marks: 3 },
                { type: 'Quiz 3', teacher: "Abdul Khalique", marks: 3 },
            ],
            aict: [
                { type: 'Mid Term', teacher: "Sunya Baig", marks: 19 },
                { type: 'Assignment 1', teacher: "Sunya Baig", marks: 5 },
                { type: 'Assignment 2', teacher: "Sunya Baig", marks: 5 },
                { type: 'Quiz 1', teacher: "Sunya Baig", marks: 4 },
                { type: 'Quiz 2', teacher: "Sunya Baig", marks: 3 },
            ],
            pst: [
                { type: 'Mid Term', teacher: "Arshad Nadeem", marks: 26 },
                { type: 'Assignment 1', teacher: "Arshad Nadeem", marks: 3 },
                { type: 'Assignment 2', teacher: "Arshad Nadeem", marks: 3 },
                { type: 'Assignment 3', teacher: "Arshad Nadeem", marks: 3 },
                { type: 'Quiz 1', teacher: "Arshad Nadeem", marks: 4 },
                { type: 'Quiz 2', teacher: "Arshad Nadeem", marks: 3 },
                { type: 'Quiz 3', teacher: "Arshad Nadeem", marks: 3 },
            ],
            phy: [
                { type: 'Mid Term', teacher: "Shafiq ur Rehman", marks: 22 },
                { type: 'Assignment 1', teacher: "Shafiq ur Rehman", marks: 3 },
                { type: 'Assignment 2', teacher: "Shafiq ur Rehman", marks: 3 },
                { type: 'Assignment 3', teacher: "Shafiq ur Rehman", marks: 3 },
                { type: 'Quiz 1', teacher: "Shafiq ur Rehman", marks: 4 },
                { type: 'Quiz 2', teacher: "Shafiq ur Rehman", marks: 3 },
                { type: 'Quiz 3', teacher: "Shafiq ur Rehman", marks: 3 },
            ],
            la: [
                { type: 'Mid Term', teacher: "Dr Maqsood Server", marks: 23 },
                { type: 'Assignment 1', teacher: "Dr Maqsood Server", marks: 3 },
                { type: 'Assignment 2', teacher: "Dr Maqsood Server", marks: 3 },
                { type: 'Assignment 3', teacher: "Dr Maqsood Server", marks: 3 },
                { type: 'Quiz 1', teacher: "Dr Maqsood Server", marks: 4 },
                { type: 'Quiz 2', teacher: "Dr Maqsood Server", marks: 3 },
                { type: 'Quiz 3', teacher: "Dr Maqsood Server", marks: 3 },
            ],
            oop: [
                { type: 'Mid Term', teacher: "Sana Ejaz", marks: 28 },
                { type: 'Assignment 1', teacher: "Sana Ejaz", marks: 3 },
                { type: 'Assignment 2', teacher: "Sana Ejaz", marks: 3 },
                { type: 'Assignment 3', teacher: "Sana Ejaz", marks: 3 },
                { type: 'Quiz 1', teacher: "Sana Ejaz", marks: 4 },
                { type: 'Quiz 2', teacher: "Sana Ejaz", marks: 3 },
                { type: 'Quiz 3', teacher: "Sana Ejaz", marks: 3 },
            ],
            ca: [
                { type: 'Mid Term', teacher: "Dr Maqsood Sarvar", marks: 30 },
                { type: 'Assignment 1', teacher: "Dr Maqsood Server", marks: 3 },
                { type: 'Assignment 2', teacher: "Dr Maqsood Server", marks: 3 },
                { type: 'Assignment 3', teacher: "Dr Maqsood Server", marks: 3 },
                { type: 'Quiz 1', teacher: "Dr Maqsood Server", marks: 4 },
                { type: 'Quiz 2', teacher: "Dr Maqsood Server", marks: 3 },
                { type: 'Quiz 3', teacher: "Dr Maqsood Server", marks: 3 },
            ],
            ob: [
                { type: 'Mid Term', teacher: "Shahbaz Haider", marks: 25 },
                { type: 'Assignment 1', teacher: "Shahbaz Haider", marks: 5 },
                { type: 'Assignment 2', teacher: "Shahbaz Haider", marks: 5 },
                { type: 'Quiz 1', teacher: "Shahbaz Haider", marks: 5 },
                { type: 'Quiz 2', teacher: "Shahbaz Haider", marks: 5 },
            ],
            fe: [
                { type: 'Mid Term', teacher: "Syed Sohail", marks: 23 },
                { type: 'Assignment 1', teacher: "Syed Sohail", marks: 3 },
                { type: 'Assignment 2', teacher: "Syed Sohail", marks: 3 },
                { type: 'Assignment 3', teacher: "Syed Sohail", marks: 3 },
                { type: 'Quiz 1', teacher: "Syed Sohail", marks: 4 },
                { type: 'Quiz 2', teacher: "Syed Sohail", marks: 3 },
                { type: 'Quiz 3', teacher: "Syed Sohail", marks: 3 },
            ],
            dld: [
                { type: 'Mid Term', teacher: "Dr Chandallal Karnani", marks: 23 },
                { type: 'Assignment 1', teacher: "Dr Chandallal Karnani", marks: 5 },
                { type: 'Assignment 2', teacher: "Dr Chandallal Karnani", marks: 5 },
                { type: 'Quiz 1', teacher: "Dr Chandallal Karnani", marks: 5 },
                { type: 'Quiz 2', teacher: "Dr Chandallal Karnani", marks: 5 },
            ],
            dldlab: [
                { type: 'Mid Term', teacher: "Fazal Karim", marks: 45 },
            ],
            ooplab: [
                { type: 'Mid Term', teacher: "Abdul Khalique", marks: 45 },
            ],
        };
    }, [user]);

    const coursesPerSession = useMemo(() => ({
        fall2025: [
            { label: 'Computer Organization & Assembly Language', value: 'coal' },
            { label: 'Data Structure & Algorithms', value: 'dsa' },
            { label: 'Discrete Structures', value: 'ds' },
            { label: 'Mobile Application Development', value: 'mad' },
            { label: 'Expository Writing', value: 'exp' },
            { label: 'Computer Organization Lab', value: 'coalLab' },
            { label: 'Data Structure Lab', value: 'dsaLab' },
            { label: 'MAD Lab', value: 'madLab' },
        ],
        fall2024: [
            { label: 'Application of Information Technology', value: 'aict' },
            { label: 'Linear Algebra', value: 'la' },
            { label: 'Applied Physics', value: 'phy' },
            { label: 'Pakistan Studies', value: 'pst' },
            { label: 'Programming Fundamentals', value: 'pf' },
            { label: 'Application of Information TechnologyLab', value: 'aictLab' },
            { label: 'Applied Physics Lab', value: 'apLab' },
            { label: 'Programming Fundamentals Lab', value: 'pfLab' },
        ],
        spring2024: [
            { label: 'Calculus & Analytical Geometry', value: 'ca' },
            { label: 'Object Oriented Programming', value: 'oop' },
            { label: 'Digital Logic Design', value: 'dld' },
            { label: 'Organiztional Behaviour', value: 'ob' },
            { label: 'Functional English', value: 'fe' },
            { label: 'Object Oriented Programming lab', value: 'ooplab' },
            { label: 'Digital Logic Design Lab', value: 'dldlab' },
        ],
    }), []);

    const [openSession, setOpenSession] = useState(false);
    const [session, setSession] = useState(null);
    const [sessionItems, setSessionItems] = useState([
        { label: 'Fall 2025', value: 'fall2025' },
        { label: 'Spring 2024', value: 'spring2024' },
        { label: 'Fall 2024', value: 'fall2024' },
    ]);

    const [openCourse, setOpenCourse] = useState(false);
    const [course, setCourse] = useState(null);
    const [courseItems, setCourseItems] = useState([]);
    const [assessmentDetails, setAssessmentDetails] = useState([]);

    // Update courses when session changes
    useEffect(() => {
        if (session) {
            setCourseItems(coursesPerSession[session] || []);
            setCourse(null);
            setAssessmentDetails([]);
        }
    }, [session, coursesPerSession]);

    // ✅ Fixed update assessment details when course changes
    useEffect(() => {
        if (course && user) {
            const data = assessmentsData[course]?.map(item => ({
                type: item.type ?? 'N/A',
                teacher: item.teacher ?? 'N/A',
                marks: item.marks ?? 0,
            })) || [];
            setAssessmentDetails(data);
        } else {
            setAssessmentDetails([]);
        }
    }, [course, user, assessmentsData]);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#1070D3" />
                <Text style={{ marginTop: 10 }}>Loading student data...</Text>
            </View>
        );
    }


    return (

        
        <View style={{ flex: 1, backgroundColor: '#E2E0E0', padding: 20 }}>
            <Text style={{ fontSize: 15, marginBottom: 10 }}>Session:</Text>
            <View style={{ zIndex: 2000 }}>
                <DropDownPicker
                    open={openSession}
                    value={session}
                    items={sessionItems}
                    setOpen={setOpenSession}
                    setValue={setSession}
                    setItems={setSessionItems}
                    placeholder="- Select -"
                    onOpen={() => setOpenCourse(false)}
                    style={{ borderColor: '#ccc', height: 45 }}
                    dropDownContainerStyle={{ borderColor: '#ccc' }}
                />
            </View>

            <Text style={{ fontSize: 15, marginVertical: 20 }}>Course:</Text>
            <View style={{ zIndex: 1000 }}>
                <DropDownPicker
                    open={openCourse}
                    value={course}
                    items={courseItems}
                    setOpen={setOpenCourse}
                    setValue={setCourse}
                    setItems={setCourseItems}
                    placeholder="- Select -"
                    onOpen={() => setOpenSession(false)}
                    style={{ borderColor: '#ccc', height: 45 }}
                    dropDownContainerStyle={{ borderColor: '#ccc' }}
                />
            </View>

            {assessmentDetails.length > 0 && (
                <View style={{ marginTop: 20 }}>
                    <View style={{ flexDirection: 'row', backgroundColor: '#1070D3', height: 40, alignItems: 'center' }}>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontSize: 12 }}>Assessment Type</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontSize: 12 }}>Teacher</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontSize: 12 }}>Total Marks</Text>
                        </View>
                    </View>

                    {assessmentDetails.map((item, index) => (
                        <View
                            key={index}
                            style={{
                                flexDirection: 'row',
                                height: 40,
                                alignItems: 'center',
                                borderWidth: 1,
                                borderColor: '#B6B0B0',
                                backgroundColor: 'white',
                            }}
                        >
                            <View style={{ flex: 1, alignItems: 'center' }}>
                                <Text style={{ color: 'black', fontSize: 12 }}>{item.type}</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: 'center' }}>
                                <Text style={{ color: 'black', fontSize: 12 }}>{item.teacher}</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: 'center' }}>
                                <Text style={{ color: 'black', fontSize: 12 }}>{item.marks}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            )}
        </View>
    );
}
