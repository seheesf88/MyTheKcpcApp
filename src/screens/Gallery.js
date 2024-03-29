import React, {useState} from 'react';
import axios from "axios";
import { SafeAreaView, ScrollView, Text, View, StyleSheet, Modal, Pressable } from 'react-native';
import BaseTitle from '../assets/ui-components/BaseTitle';
import ImageFrame from '../assets/ui-components/ImageFrame';
import ImageFrameModal from '../assets/ui-components/ImageFrameModal';

const baseURL = 'https://firestore.googleapis.com/v1/projects'
const projectName = 'my-the-kcpc-admin-a9030'

export default function Gallery ({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [imgItem, setImgItem] = useState('');

  const onPressHandler = (item) => {
    setModalVisible(!modalVisible)
    setImgItem(item)
  }

  let testData = [
    {id: 1, img: 'https://reactjs.org/logo-og.png', title: 'test1'},
    {id: 2, img: 'https://reactjs.org/logo-og.png', title: 'test2'},
    {id: 3, img: 'https://reactjs.org/logo-og.png', title: 'test3'},
    {id: 4, img: 'https://reactjs.org/logo-og.png', title: 'test4'},
    {id: 5, img: 'https://reactjs.org/logo-og.png', title: 'test5'},
    {id: 6, img: 'https://reactjs.org/logo-og.png', title: 'test6'},
    {id: 7, img: 'https://reactjs.org/logo-og.png', title: 'test7'},
    {id: 8, img: 'https://reactjs.org/logo-og.png', title: 'test8'},
    {id: 9, img: 'https://reactjs.org/logo-og.png', title: 'test9'}
  ]
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <BaseTitle text={'Gallery'} />
        <View style={styles.gallery}>
          { testData.map( item => (
            <ImageFrame
              key={item.id}
              imgSrc={item.img}
              onPress={onPressHandler.bind(this, item)}
            />))
          }
        </View>
      
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <ImageFrameModal
                imgSrc={imgItem.img}
                imgTitle={imgItem.title}
                onPress={() => setModalVisible(!modalVisible)} 
              />
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  gallery: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 20
  },
  centeredView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
