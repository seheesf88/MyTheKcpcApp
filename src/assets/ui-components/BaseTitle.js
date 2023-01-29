import React from 'react';
import {
  Text, 
  StyleSheet
} from 'react-native';

const BaseTitle = (props) => {
  return (
    <Text style={styles.title}>
      { props.text }
    </Text>
  );
};

export default BaseTitle;

const styles = StyleSheet.create({
  title: {
    flex: 1,
    marginTop: 16,
    paddingVertical: 8,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  }
});