import React, {useContext} from 'react';
import { SafeAreaView, ScrollView, Text, View, StyleSheet, Modal, Pressable } from 'react-native';
import BaseTitle from '../assets/ui-components/BaseTitle';
import { AuthContext } from "../navigation/AuthProvider";

export default function Profile ({ navigation }) {
  const { user } = useContext(AuthContext)

  const userInfo = [
    { label: 'Name:', value: user.displayName },
    { label: 'Email:', value: user.email }
  ]

  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollView}>
        <BaseTitle text={'Profile'} />
        <View style={styles.container}>
          {userInfo.map((ele, idx) => {
            return (
              <View key={idx} style={styles.row}>
                <Text style={styles.label}>
                  {ele.label}
                </Text>
                <Text>
                  {ele.value}
                </Text>
              </View>
            )
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  }
});
