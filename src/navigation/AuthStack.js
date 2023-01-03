import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import Login from '../screens/Login'
import Signup from '../screens/Signup'
import { Platform } from 'react-native';

const Stack = createStackNavigator();

const AuthStack = () => {

  useEffect(() => {
    let webId = ''
    if (Platform.OS === 'android') {
      webId = '178742944673-fdcskg5ds5qvghhabo07e8ob3g9a78eb.apps.googleusercontent.com';
    } else {
      webId = '178742944673-hmlfj44cd8gc19b64e1k3jiu69htir14.apps.googleusercontent.com';
    }

    GoogleSignin.configure({
      webClientId: webId
    });
  });

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default AuthStack;
