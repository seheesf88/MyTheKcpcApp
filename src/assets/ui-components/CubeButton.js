import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function CubeButton(props) {
  const img = false;

  return (
    <Pressable style={styles.button} onPress={props.onPress}>
      {
        img ?
        <Text>true</Text>
        :
        null
      }
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginVertical: 6,
    marginHorizontal: 6,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'red',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
