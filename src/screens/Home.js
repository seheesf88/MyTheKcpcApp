import React, { useContext } from "react";
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import CubeButton from '../assets/ui-components/CubeButton';
import FormButton from '../assets/ui-components/FormButton';
import { AuthContext } from "../navigation/AuthProvider";

export default function Home({ navigation }) {
  const { user, logout } = useContext(AuthContext)

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>The Bridge</Text>
      <Text>Welcome {user.displayName} </Text>
      <View style={styles.row}>
        <CubeButton title='Content' onPress={() => navigation.navigate('Content')} />
        <CubeButton title='Gallery' onPress={() => navigation.navigate('Gallery')} />
      </View>
      <View style={styles.row}>
        <CubeButton title='Profile' onPress={() => navigation.navigate('Profile')} />
        <CubeButton title='무제' onPress={() => navigation.navigate('Content')} />
      </View>
      <FormButton
        buttonTitle="Log out"
        style={styles.logOutBtn}
        onPress={() => logout()}
      />
    </SafeAreaView>
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
