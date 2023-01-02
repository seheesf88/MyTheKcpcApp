import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function AccordionItem(props) {
  const [showBody, setShowBody] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setShowBody(!showBody)}>
        <View style={styles.header}>
          <Text style={styles.title}>{props.header}</Text>
        </View>
      </TouchableOpacity>
      { showBody && (<View>
        {props.body}
      </View>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    margin: '1%',
    padding: '2%',
    overflow: 'hidden'
  },

  header: {
    backgroundColor: '#4c4e59b5',
    padding: '3%'
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  }
});
