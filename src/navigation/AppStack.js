import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Content from '../screens/Content';
import Gallery from '../screens/Gallery';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Content" component={Content} />
      <Stack.Screen name="Gallery" component={Gallery} />
    </Stack.Navigator>
  );
};

export default AppStack;