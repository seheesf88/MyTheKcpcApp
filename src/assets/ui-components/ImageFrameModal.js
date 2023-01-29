import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { windowWidth } from '../../utils/Dimentions';

export default function ImageFrame(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.frame}>
        <Image
          source={{uri: props.imgSrc}}
          style={styles.img}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  frame: {
    marginRight: 4,
    marginBottom: 4
  },
  img: {
    width: (windowWidth - 64),
    height: (windowWidth - 20),
    borderRadius: 15
  },
});
