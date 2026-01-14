import { View, Text, TextInput, ScrollView, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useEffect, useState } from 'react';

export default function TeacherAssessment() {

    const [students, setStudents] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState('');
    const [studentData, setStudentData] = useState(null);

    // Courses info for UI
    const courses = [
        { key: 'course1', name: 'Computer Organization & Assembly Language' },
        { key: 'course2', name: 'Data Structures & Algorithms' },
        { key: 'course3', name: 'Discrete Structures' },
        { key: 'course4', name: 'Mobile Application Development' },
        { key: 'course5', name: 'Expository Writing' },
        { key: 'course6', name: 'COAL Lab' },
        { key: 'course7', name: 'DSA Lab' },
        { key: 'course8', name: 'MAD Lab' },
    ];

    // Fetch students
    useEffect(() => {
        fetch('http://192.168.1.107:5000/user')
            .then(res => res.json())
            .then(data => {
                console.log('Fetched students:', data);
                setStudents(data);
            })
            .catch(console.log);
    }, []);

    // Select student
    const onStudentSelect = (studentId) => {
        console.log('Selected student ID:', studentId);
        if (!studentId) return;

        setSelectedStudent(studentId);

        fetch(`http://192.168.1.107:5000/user/${encodeURIComponent(studentId)}`)
            .then(res => res.json())
            .then(data => {
                console.log('Student data fetched:', data);
                setStudentData(data);
            })
            .catch(console.log);
    };

    // Helper to get the marks value for each course
    const getMarksValue = (courseKey) => {
        return studentData[`${courseKey}midmarks`] ?? '';
    };

    // Update the marks for a course
    const updateMarks = (courseKey, value) => {
        const dbField = `${courseKey}midmarks`;  // Update the midmarks field for each course
        setStudentData(prev => ({
            ...prev,
            [dbField]: value
        }));
    };

    // Save marks to backend
    const saveMarks = () => {
        const payload = {};

        courses.forEach(course => {
            payload[`${course.key}midmarks`] =
                Number(studentData[`${course.key}midmarks`]) || 0;
        });

        console.log('Payload:', payload);

        fetch(`http://192.168.1.113:5000/user/${encodeURIComponent(selectedStudent)}/marks`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        })
            .then(async res => {
                if (res.ok) {
                    Alert.alert('Success', 'Marks updated successfully');
                } else {
                    const error = await res.text();
                    console.log(error);
                    Alert.alert('Error', error);
                }
            })
            .catch(() => Alert.alert('Network Error'));
    };


    return (
        <ScrollView>

            {/* STUDENT DROPDOWN */}
            <View style={{ margin: 15, backgroundColor: 'white', borderRadius: 5 }}>
                <Picker selectedValue={selectedStudent} onValueChange={onStudentSelect}>
                    <Picker.Item label="Select Student" value="" />
                    {students.map(s => (
                        <Picker.Item
                            key={s.id}
                            label={`${s.registrationNo} - ${s.name}`}
                            value={s.registrationNo}
                        />
                    ))}
                </Picker>
            </View>

            {/* COURSE BLOCKS */}
            {studentData && courses.map(course => (
                <View
                    key={course.key}
                    style={{
                        backgroundColor: 'rgba(210,210,210,1)',
                        margin: 15,
                        padding: 15,
                        borderRadius: 5
                    }}
                >
                    <Text style={{ textAlign: 'center', fontSize: 15 }}>
                        {course.name}
                    </Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>

                        {/* MARKS */}
                        <View>
                            <Text>Marks</Text>
                            <TextInput
                                keyboardType="numeric"
                                value={String(getMarksValue(course.key))}
                                onChangeText={text => updateMarks(course.key, text)}
                                style={{ backgroundColor: 'white', width: 70, height: 40, textAlign: 'center' }}
                            />
                        </View>

                    </View>
                </View>
            ))}

            {/* SAVE BUTTON */}
            {studentData && (
                <View style={{ margin: 20 }}>
                    <Button title="Save Marks" onPress={saveMarks} />
                </View>
            )}

        </ScrollView>
    );
}
