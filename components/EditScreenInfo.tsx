import React from 'react';
import {Button, StyleSheet} from 'react-native';

import { Text, View } from './Themed';
import skyScannerApi from "../service/SkyScannerApi";


export default function EditScreenInfo({ path }: { path: string }) {
  const getDay = new Date()
  const date = getDay.getFullYear() + '-' + '0'+(getDay.getMonth()+1) + '-' + getDay.getDate()
  let data = {}

  const getData = () => skyScannerApi.getData(`${date}`).then((res) => {
    console.log(res)
    console.log(data)
  })


  const Item = ({ title }) => (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
  );



  return (
    <View>
      <Button title={'GetData'} onPress={getData}/>
      <View style={styles.getStartedContainer}>

       <Text>s</Text>

      </View>


    </View>
  );
}


const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  title: {
    fontSize: 24
  }
});
