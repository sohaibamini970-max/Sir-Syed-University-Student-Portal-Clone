import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../General/Home';
import TimeTable from '../General/TimeTable';
import Attendance from '../General/Attendance';
import RoadMap from '../General/RoapMap';
import Pass_Chan from '../General/Pass_Chan';
import Annoucements from '../General/Annoucements';
import MyCourse from '../Course/MyCourse'
import Registration from '../Registration/Registration'
import CurrentVoucher from '../Fee/CurrentVoucher'
import Admit_Card from '../Exam/Admit_Card'
import Assessment from '../Exam/Assessment'
import Transcript from '../Exam/Transcript'

const Stack = createStackNavigator();

export default function StackNavigator({regNo}) {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} initialParams={{ regNo }} />
            <Stack.Screen name="TimeTable" component={TimeTable} />
            <Stack.Screen name="Attendance" component={Attendance} />
            <Stack.Screen name="RoadMap" component={RoadMap} />
            <Stack.Screen name="Pass_Chan" component={Pass_Chan} />
            <Stack.Screen name="Annoucements" component={Annoucements} />
            <Stack.Screen name="MyCourse" component={MyCourse} />
            <Stack.Screen name="Registration" component={Registration} />
            <Stack.Screen name="CurrentVoucher" component={CurrentVoucher} />
            <Stack.Screen name="Transcript" component={Transcript} />
            <Stack.Screen name="Assessment" component={Assessment} />
            <Stack.Screen name="Admit_Card" component={Admit_Card} />
        </Stack.Navigator>
            
    );
}
