import React, {useState} from 'react';
import {Button, Image, StyleSheet} from 'react-native';
import { Divider } from 'react-native-elements';
import { Text, View } from './Themed';
import skyScannerApi from "../service/SkyScannerApi";


export default function EditScreenInfo({ path }: { path: string }) {
  const [flights, setFlights] = useState([])
  const getDay = new Date()
  const date = getDay.getFullYear() + '-' + '0'+(getDay.getMonth()+1) + '-' + getDay.getDate()
  let data = []
  let newData = []

  const Item = (item, index) => {
      return(
          <View style={{marginBottom: 30}} key={index}>
            <View style={{display: 'flex',  flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image style={{position: "relative"}} source={require("../assets/images/Ellipse.png")} />
              <Image style={{position: "absolute", zIndex: 1, left: 15, top: 12}} source={require("../assets/images/Vector.png")} />
              <Text>Moscow - New-York</Text>
              <Text style={{fontSize: 12}} >{item.QuoteDateTime}</Text>
            </View>

            <Divider orientation="vertical" />

            <View style={{display: 'flex',  flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 12}} >Price:</Text>
              <Text style={{fontSize: 20}}>{item.MinPrice} P</Text>
            </View>

          </View>
      )
  }

  const getData = async () => skyScannerApi.getData(date).then((res) => {

    setFlights([...Object.values(res['Quotes'])]);
    console.log(data.length)

    newData = data.map(({MinPrice, QuoteDateTime, QuoteId}, i) => {
      return newData.push( {MinPrice, QuoteDateTime, QuoteId} )
    })
    console.log(flights)
  })

  return (
    <View>
      <Button title={'GetData'} onPress={getData}/>

      <View style={styles.getStartedContainer}>
        <View>
          {flights ? flights.map((item, i) => Item(item, i)) : <Text>Не найдено</Text>}
        </View>

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
