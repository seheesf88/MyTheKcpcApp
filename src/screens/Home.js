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
      <Text>Welcome {user.displayName} </Text>
      <View style={styles.row}>
        <CubeButton title='주보' onPress={() => navigation.navigate('Content')} />
        <CubeButton title='사진' onPress={() => navigation.navigate('Gallery')} />
      </View>
      <View style={styles.row}>
        <CubeButton title='무제' onPress={() => navigation.navigate('Content')} />
        <CubeButton title='무제' onPress={() => navigation.navigate('Content')} />
      </View>
      <FormButton
        buttonTitle="Log out"
        style={styles.logOutBtn}
        onPress={() => logout()}
      />
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
  },
  logOutBtn: {
    width: '50%',
    backgroundColor: '#808080',
  }
});
