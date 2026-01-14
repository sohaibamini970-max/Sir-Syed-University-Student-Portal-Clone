import { View, Text, TextInput, ScrollView, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useEffect, useState } from 'react';

export default function TeacherAttendance() {

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

  // 🔹 Fetch students
  useEffect(() => {
    fetch('http://192.168.1.107:5000/user')
      .then(res => res.json())
      .then(data => {
        console.log('Fetched students:', data);  // Add this log to see the student data
        setStudents(data);
      })
      .catch(console.log);
  }, []);

  const payload = { ...studentData };

// Convert all course fields to numbers
for (let key in payload) {
  if (key.includes('att') || key.includes('scheduled')) {
    payload[key] = Number(payload[key]) || 0;
  }
}


  // 🔹 Select student
  const onStudentSelect = (studentId) => {
    console.log('Selected student ID:', studentId);  // Add this log
    if (!studentId) return;

    setSelectedStudent(studentId);
    

    fetch(`http://192.168.1.107:5000/user/${encodeURIComponent(studentId)}`)
      .then(res => res.json())
      .then(data => {
        console.log('Student data fetched:', data);  // Log the fetched student data
        setStudentData(data);
      })
      .catch(console.log);
  };


  // 🔹 Helper to get field value based on backend keys
  const getFieldValue = (courseKey, field) => {
    // Map frontend fields to backend keys
    if (field === 'att') return studentData[`${courseKey}att`] ?? '';
    if (field === 'scheduled') return studentData[`${courseKey}scheduled`] ?? '';
  };
 
  // 🔹 Update scheduled / attended
  const updateField = (courseKey, field, value) => {
    const dbField = field === 'att' ? `${courseKey}att` : `${courseKey}scheduled`;
    setStudentData(prev => ({
      ...prev,
      [dbField]: value
    }));
  };

  // 🔹 Save data to backend
  // 🔹 Save data to backend
  const saveAttendance = () => {
    // 1. Create a copy of the data
    const payload = { ...studentData };

    // 2. Convert strings to numbers explicitly before sending
    for (let key in payload) {
      if (key.includes('att') || key.includes('scheduled')) {
        // Convert to Number, default to 0 if NaN
        payload[key] = Number(payload[key]) || 0;
      }
    }

    console.log('Sending payload:', JSON.stringify(payload)); // Debugging log

    fetch(`http://192.168.1.113:5000/user/${encodeURIComponent(selectedStudent)}/attendance`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      // 3. IMPORTANT: Send 'payload', not 'studentData'
      body: JSON.stringify(payload)
    })
      .then(async (res) => {
        // 4. Check if the server actually accepted it
        if (res.ok) {
          Alert.alert('Success', 'Scheduled & Attended updated successfully');
        } else {
          const errorText = await res.text();
          Alert.alert('Error', 'Server rejected the update: ' + errorText);
          console.log('Server Error:', errorText);
        }
      })
      .catch(err => {
        console.log(err);
        Alert.alert('Network Error', 'Could not connect to server');
      });
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
            <View>
              <Text>Scheduled</Text>
              <TextInput
                keyboardType="numeric"
                value={String(getFieldValue(course.key, 'scheduled'))}
                onChangeText={text => updateField(course.key, 'scheduled', text)}
                style={{ backgroundColor: 'white', width: 70, height: 40, textAlign: 'center' }}
              />
            </View>

            <View>
              <Text>Attended</Text>
              <TextInput
                keyboardType="numeric"
                value={String(getFieldValue(course.key, 'att'))}
                onChangeText={text => updateField(course.key, 'att', text)}
                style={{ backgroundColor: 'white', width: 70, height: 40, textAlign: 'center' }}
              />
            </View>
          </View>
        </View>
      ))}

      {/* SAVE BUTTON */}
      {studentData && (
        <View style={{ margin: 20 }}>
          <Button title="Save Attendance" onPress={saveAttendance} />
        </View>
      )}

    </ScrollView>
  );
}

