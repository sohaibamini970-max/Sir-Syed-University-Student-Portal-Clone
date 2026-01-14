import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TeacherHome from '../TeacherScreens/TeacherHome';
import TeacherTimeTable from '../TeacherScreens/TeacherTimeTable';
import TeacherAttendance from '../TeacherScreens/TeacherAttendance';
import TeacherAssessment from '../TeacherScreens/TeacherAssessment';

const Stack = createStackNavigator();

export default function StackNavigator({regNo}) {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="TeacherHome" component={TeacherHome} initialParams={{ regNo }} />
            <Stack.Screen name="TeacherTimeTable" component={TeacherTimeTable} />
            <Stack.Screen name="TeacherAttendance" component={TeacherAttendance} />
            <Stack.Screen name="TeacherAssessment" component={TeacherAssessment} />
        </Stack.Navigator>
    );
}
