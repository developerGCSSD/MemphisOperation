import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/homeScreen';
import Assignment from './src/screens/assignment';
import AssignmentDetails from './src/screens/assignmentDetails';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerStyle: {backgroundColor: '#307BA1'}}}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerTintColor: 'white'}}
        />
        <Stack.Screen
          name="Assignment"
          component={Assignment}
          options={{headerTintColor: 'white'}}
        />
        <Stack.Screen
          name="AssignmentDetails"
          component={AssignmentDetails}
          options={{headerTintColor: 'white'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
