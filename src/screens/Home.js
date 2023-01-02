import React from "react";
import { StyleSheet, Text, View } from 'react-native';

import CubeButton from '../ui-components/CubeButton';
// import { AuthContext } from "../navigation/AuthProvider";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>The Bridge</Text>
      <View style={styles.row}>
        <CubeButton title='주보' onPress={() => navigation.navigate('Content')} />
        <CubeButton title='노트' onPress={() => navigation.navigate('Content')} />
      </View>
      <View style={styles.row}>
        <CubeButton title='소그룹' onPress={() => navigation.navigate('Content')} />
        <CubeButton title='상담' onPress={() => navigation.navigate('Content')} />
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
