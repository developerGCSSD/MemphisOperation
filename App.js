import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider, useDispatch} from 'react-redux';
import {store} from './src/redux/store/store';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HeaderRightIcon from './src/components/rightHeaderIcon';
import HomeScreen from './src/screens/homeScreen';
import Assignment from './src/screens/assignment';
import AssignmentDetails from './src/screens/assignmentDetails';
import LoginScreen from './src/screens/login';
import PaymentScreen from './src/screens/payment';

import {retrieveUser} from './src/storage/loginAuth';
import {logout, setUserFromStorage} from './src/redux/reducers/auth';

const Stack = createStackNavigator();

function RootNavigation({headerRightComponent}) {
  const [initialRoute, setInitialRoute] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkUser = async () => {
      const user = await retrieveUser(); // your method to get user data from AsyncStorage
      if (user && user.token) {
        console.log('user', user);
        dispatch(setUserFromStorage(user)); // put user in Redux
        setInitialRoute('Home');
      } else {
        console.log('adaddas');
        setInitialRoute('Login');
      }
    };

    checkUser();
  }, [dispatch]);

  if (initialRoute === null) {
    return null;
  }
  return (
    <Stack.Navigator
      initialRouteName={initialRoute}
      screenOptions={{headerStyle: {backgroundColor: '#307BA1'}}}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTintColor: 'white',
          headerLeft: () => null,
          headerRight: () => headerRightComponent,
        }}
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
      <Stack.Screen
        name="Payment"
        component={PaymentScreen}
        options={{headerTintColor: 'white', headerBackTitle: 'Back'}}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigation headerRightComponent={<HeaderRightIcon />} />
      </NavigationContainer>
    </Provider>
  );
}
