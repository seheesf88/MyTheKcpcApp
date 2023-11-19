import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

import FormInput from '../assets/ui-components/FormInput';
import FormButton from '../assets/ui-components/FormButton';
import SocialButton from '../assets/ui-components/SocialButton';
import { AuthContext } from '../navigation/AuthProvider';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { login, googleLogin } = useContext(AuthContext)
  
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/imgs/kcpc_logo.png')}
      />

      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Sign In"
        onPress={() => login(email, password)}
      />

      <SocialButton
        buttonTitle="sign in with google"
        btnType="google"
        backgroundColor="#e6eaf4"
        onPress={() =>  googleLogin()}
      />

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Signup')}
      >
        <Text style={styles.navButtonText}>
          Don't have an acount? Create here
        </Text>
      </TouchableOpacity>
    </View>
  )
}
  
export default Login
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5'
  }
})