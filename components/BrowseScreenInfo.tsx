import React, {useEffect} from 'react';
import { Image, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native';
import { Divider } from 'react-native-elements';
import { Text, View } from './Themed';
import {useDispatch, useSelector} from "react-redux";
import {
  addFavoritesCreator,
  fetchAsyncFlightsCreator,
  removeFavoriteCreator,
} from "../redux/reducer";
import {RootState} from "../redux/store";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {useNavigation} from "@react-navigation/native";
import {faRubleSign} from "@fortawesome/free-solid-svg-icons";
import {MONTH} from "../constants/other";


export default function BrowseScreenInfo() {
  const navigation = useNavigation();
  const flights = useSelector((state: RootState) => state.flights)
  const carriers = useSelector((state: RootState) => state.carriers)
  const favorites = useSelector((state: RootState) => state.favorites)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAsyncFlightsCreator())
  }, [dispatch]);

  const renderFlights = (item, id) => {
      return(
          <TouchableOpacity  onPress={() => navigation.navigate('FlightScreen',
              {id: id, price: item.MinPrice, date: item.QuoteDateTime  })}  key={id}>

            <View style={styles.itemContainer}>
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
                  <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center"}}>
                    <Text style={styles.routeText}>Moscow </Text>
                    <Image source={require("../assets/images/shortLine.png")} />
                    <Image source={require("../assets/images/array2.png")} />
                    <Text style={styles.routeText}> New York</Text>
                  </View>

                  <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center"}}>
                    <Text style={styles.routeDetails} >VKO  </Text>
                    <Image source={require("../assets/images/shortLine.png")} />
                    <Text style={styles.routeDetails}>  {item.QuoteDateTime.slice(8, 10)}  </Text>
                    <Text style={styles.routeDetails}>{MONTH[item.QuoteDateTime.slice(5, 7)]}, </Text>
                    <Text style={styles.routeDetails}>  {item.QuoteDateTime.slice(0, 4)}  </Text>
                    <Image source={require("../assets/images/shortLine.png")} />
                    <Text style={styles.routeDetails}>  {item.QuoteDateTime.slice(11, 16)}</Text>
                  </View>
                  {/*show carrier*/}
                  {carriers && carriers.map((carrier) => {
                    return (carrier.CarrierId == item.OutboundLeg.CarrierIds[0] ?
                        <Text style={styles.routeDetails} key={carrier.CarrierId}>{carrier.Name}</Text> : null)
                  })}
                </View>

                <Divider orientation="horizontal" style={{width: "100%", marginTop: 15}} />

                <View style={{ position: "absolute", bottom: 13, right: 17, flexDirection: 'row', justifyContent: "flex-start", alignItems: "center"}}>
                  <Text style={{fontSize: 11, color: "#6d6d6d", marginRight: 5, fontFamily: "SF-Pro"}} >Price:</Text>
                  <Text style={styles.routeText}>
                    {item.MinPrice.toString().slice(0, 2)} {item.MinPrice.toString().slice(2, 11)}
                  </Text>
                  <FontAwesomeIcon icon={faRubleSign} size={14}  />
                </View>
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
  routeDetails: {
    fontSize: 13,
    fontFamily: "SF-Pro",
    color: "#6d6d6d"
  },
  itemContainer: {
    maxWidth: 335,
    maxHeight: 135,
    alignItems: "center",
    flexWrap: "wrap",
    flex: 1,
    flexDirection: 'row',
    padding: 19,
    marginBottom: 30,
    borderColor: '#eee',
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 6,
    elevation: 6
  },
  columnLeft: {
    width: '30%'
  },
  routeText: {
    fontFamily: 'Abel',
    fontSize: 17
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 20,
    color: '#fff'
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
  title: {
    fontSize: 24
  }
});
