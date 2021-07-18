import React, {useEffect} from 'react';
import {Image, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native';
import { Divider } from 'react-native-elements';
import { Text, View } from './Themed';
import {useDispatch, useSelector} from "react-redux";
import {
  addFavoritesCreator,
  fetchAsyncFlightsCreator,
  removeFavoriteCreator,
} from "../redux/reducer";
import {RootState} from "../redux/store";


export default function BrowseScreenInfo() {
  const flights = useSelector((state: RootState) => state.flights)
  const carriers = useSelector((state: RootState) => state.carriers)
  const favorites = useSelector((state: RootState) => state.favorites)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAsyncFlightsCreator())
  }, [dispatch]);

  // const getDay = new Date()
  // const date = getDay.getFullYear() + '-' + '0'+(getDay.getMonth()+1) + '-' + getDay.getDate()
  let data = []
  let newData = []

  const nextScreen = (id) => console.log(id)

  const renderFlights = (item, id) => {
      return(
          <TouchableOpacity onPress={(id) => nextScreen(id)} style={{maxWidth: 335, maxHeight: 135, alignItems: "center", flexWrap: "wrap", display: "flex", flexDirection: 'row',  padding: 19, marginBottom: 30, borderColor: '#eee', borderStyle: "solid", borderWidth: 1, borderRadius: 6}} key={id}>
            <View style={{position: "absolute", right: 13, top: 15}} >
              <TouchableHighlight onPress={()=> touchFavorites(id)} >
                {favorites.includes(id) ? <Image source={require("../assets/images/favorRed.png")} /> : <Image source={require("../assets/images/favor.png")} />}
              </TouchableHighlight>
            </View>

            <View style={{marginRight: 30}}>
              <Image style={{position: "relative"}} source={require("../assets/images/Ellipse.png")} />
              <Image style={{position: "absolute", zIndex: 1, left: 15, top: 12}} source={require("../assets/images/Vector.png")} />
            </View>

            <View>
              <Text style={{fontSize: 17}}>Moscow - New York</Text>

              <Text style={{fontSize: 13,  color: "#6d6d6d"}} >VKO - {item.QuoteDateTime.slice(0, 10)} - {item.QuoteDateTime.slice(11, 16)}</Text>

              {/*show carrier*/}
              {carriers && carriers.map((carrier) => {
                return (carrier.CarrierId == item.OutboundLeg.CarrierIds[0] ? <Text key={carrier.CarrierId}>{carrier.Name}</Text> : null)
              })}
            </View>

            <Divider orientation="horizontal" style={{width: "100%", marginTop: 15}} />

            <View style={{display: 'flex', flexDirection: 'row', justifyContent: "flex-end", alignItems: "center"}}>
              <Text style={{fontSize: 11, color: "#6d6d6d", marginRight: 5}} >Price:</Text>
              <Text style={{fontSize: 17}}>{item.MinPrice} P</Text>
            </View>

          </TouchableOpacity>
      )
  }

  const touchFavorites = (id) => {
    if (favorites.includes(id)) {
      dispatch(removeFavoriteCreator(id))
    } else dispatch(addFavoritesCreator(id))
  }

  return (
    <View>
      <View style={styles.getStartedContainer}>
          {flights ? flights.map((item) => renderFlights(item, item.QuoteId)) : <Text>Не найдено</Text>}
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  columnLeft: {
    width: '30%'
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 5,
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
