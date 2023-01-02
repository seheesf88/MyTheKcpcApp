import React from 'react';
import {
  Text, 
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { windowHeight } from '../../utils/Dimentions';

const FormButton = ({ buttonTitle, ...rest }) => {
  return (
    <TouchableOpacity style={styles.button} {...rest}>
      <Text style={styles.text}>
        { buttonTitle }
      </Text>
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,
    backgroundColor: '#2e64e5',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    color: 'white',
  }
});