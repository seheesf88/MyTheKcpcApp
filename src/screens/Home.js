import React, { useContext } from "react";
import { StyleSheet, Text, View } from 'react-native';

import CubeButton from '../assets/ui-components/CubeButton';
import FormButton from '../assets/ui-components/FormButton';
import { AuthContext } from "../navigation/AuthProvider";

export default function Home({ navigation }) {
  const { user, logout } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>The Bridge</Text>
      <Text>Welcome {user.uid} </Text>
      <FormButton
        buttonTitle="Log out"
        onPress={() => logout()}
        />
      <View style={styles.row}>
        <CubeButton title='주보' onPress={() => navigation.navigate('Content')} />
        <CubeButton title='무제' onPress={() => navigation.navigate('Content')} />
      </View>
      <View style={styles.row}>
        <CubeButton title='무제' onPress={() => navigation.navigate('Content')} />
        <CubeButton title='무제' onPress={() => navigation.navigate('Content')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    letterSpacing: 0.25
  }
});
