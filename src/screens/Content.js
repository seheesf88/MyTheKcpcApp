import React, { Component } from 'react';
import axios from "axios";
import { SafeAreaView, ScrollView, Text, View, StyleSheet } from 'react-native';
import { documentToJson } from '../services/documentConverter.js'
// import YoutubePlayer from "react-native-youtube-iframe";
import AccordionItem from '../assets/ui-components/AccordionItem';

const baseURL = 'https://firestore.googleapis.com/v1/projects'
const projectName = 'my-the-kcpc-admin-a9030'

class Content extends Component {
  state = {
    contents: [],
    content: {}
  }

  componentDidMount() {
    this.getContent()
  }

  getContent = async() => {
    try {
      const response = await axios.get(`${baseURL}/${projectName}/databases/(default)/documents/contents`);

      const contents = response.data.documents;
      let lastContentValue = contents.reduce((a, b) => {
        return new Date(a.fields.serviceDate.stringValue) > new Date(b.fields.serviceDate.stringValue) ? a : b;
      });
   
      const lastContent = documentToJson(lastContentValue.fields)

      const anthemForFirstServiceHymn = lastContent.anthemForFirstService.hymn
      const anthemForFirstServiceHymnBy = lastContent.anthemForFirstService.hymnBy
      const messageTitle = lastContent.message.title
      const messageScript = lastContent.message.script
      const messageMessageBy = lastContent.message.messageBy
      const openingHymnForMainServiceHymn = lastContent.openingHymnForMainService.hymn
      const openingHymnForMainServiceHymnBy = lastContent.openingHymnForMainService.hymnBy
      const anthemForMainServiceHymn = lastContent.anthemForMainService.hymn
      const anthemForMainServiceHymnBy = lastContent.anthemForMainService.hymnBy

      this.setState({
        contents,
        content: lastContent,
        anthemForFirstServiceHymn,
        anthemForFirstServiceHymnBy,
        messageTitle,
        messageScript,
        messageMessageBy,
        openingHymnForMainServiceHymn,
        openingHymnForMainServiceHymnBy,
        anthemForMainServiceHymn,
        anthemForMainServiceHymnBy
      })
    } catch(err) {
      this.setState({
        content: 'err'
      })
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.contentContainer}>
            <Text style={styles.contentTitle}>주일예배</Text>
            <Text style={styles.serviceDate}>
              {this.state.content.serviceDate}
            </Text>
            {/* <YoutubePlayer
              height={250}
              play={false}
              videoId={this.state.content.youtubeKey}
            /> */}
            <AccordionItem header={'1부 예배'} body={<FirstService data={this.state}/>}/>
            <AccordionItem header={'2부 예배'} body={<MainService data={this.state} />}/>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentTitle: {
    flex: 1,
    marginTop: 16,
    paddingVertical: 8,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  video: {
    flex: 3
  },
  serviceDate: {
    flex: 1,
    textAlign: "right",
    marginRight: 15,
    marginBottom: 2
  },
  contentBox: {
    flex: 5,
    marginHorizontal: 10,
    marginVertical: 5,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 10
  },
  sermonTitle: {
    color: 'red'
  },
  announcement: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 10,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6
  },
  announcementTitle: {
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 10
  }
});

export default Content


export function FirstService(props) {
  return (
    <View>
      <View style={styles.contentBox}>
        <View style={styles.form}>
          <Text>묵도/일어서서</Text>
          <Text>예배로의 부르심</Text>
        </View>
        <View style={styles.form}>
          <Text>신앙고백</Text>
          <Text>사도신경</Text>
        </View>
        <View style={styles.form}>
          <Text>찬송</Text>
          <Text>{props.data.content.openingHymnForFirstService}</Text>
        </View>
        <View style={styles.form}>
          <Text>대표기도</Text>
          <Text>{props.data.content.prayer}</Text>
        </View>
        <View style={styles.form}>
          <Text>찬양</Text>
          <Text>{props.data.anthemForFirstServiceHymn}</Text>
          <Text>{props.data.anthemForFirstServiceHymnBy}</Text>
        </View>
        <View style={styles.form}>
          <Text>설교</Text>
          <Text>{props.data.messageTitle}</Text>
          <Text>{props.data.messageScript}</Text>
          <Text>{props.data.messageMessageBy}</Text>
        </View>
        <View style={styles.form}>
          <Text>헌금</Text>
          <Text>헌금위원: {props.data.content.offertoryBy}</Text>
        </View>
        <View style={styles.form}>
          <Text>광고</Text>
          <Text>{props.data.content.announcementBy}</Text>
        </View>
        <View style={styles.form}>
          <Text>찬양</Text>
          <Text>{props.data.content.doxology}</Text>
        </View>
        <View style={styles.form}>
          <Text>축도</Text>
          <Text>{props.data.content.benedictionBy}</Text>
        </View>
      </View>
    </View>
  )
};

export function MainService(props) {
  return (
    <View style={styles.contentBox}>
      <View style={styles.form}>
        <Text>묵도/일어서서</Text>
        <Text>예배로의 부르심</Text>
      </View>
      <View style={styles.form}>
        <Text>찬양의 시간</Text>
        <Text>{props.data.openingHymnForMainServiceHymn}</Text>
        <Text>{props.data.openingHymnForMainServiceHymnBy}</Text>
      </View>
      <View style={styles.form}>
        <Text>대표기도</Text>
        <Text>{props.data.content.prayer}</Text>
      </View>
      <View style={styles.form}>
        <Text>찬양</Text>
        <Text>{props.data.anthemForMainServiceHymn}</Text>
        <Text>{props.data.anthemForMainServiceHymnBy}</Text>
      </View>
      <View style={styles.form}>
        <Text>설교</Text>
        <Text>{props.data.messageTitle}</Text>
        <Text>{props.data.messageScript}</Text>
        <Text>{props.data.messageMessageBy}</Text>
      </View>
      <View style={styles.form}>
        <Text>헌금</Text>
        <Text>헌금위원: {props.data.content.offertoryBy}</Text>
      </View>
      <View style={styles.form}>
        <Text>광고</Text>
        <Text>{props.data.content.announcementBy}</Text>
      </View>
      <View style={styles.form}>
        <Text>찬양</Text>
        <Text>{props.data.content.doxology}</Text>
      </View>
      <View style={styles.form}>
        <Text>축도</Text>
        <Text>{props.data.content.benedictionBy}</Text>
      </View>
    </View>
  )
}