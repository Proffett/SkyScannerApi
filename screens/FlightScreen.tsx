import * as React from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import CarouselDetailFlight from "../components/Carousel";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {addFavoritesCreator, removeFavoriteCreator} from "../redux/reducer";
import {Divider} from "react-native-elements";


export default function FlightScreen({navigation ,route}) {
  const { id, price, date } = route.params;
  const favorites = useSelector((state: RootState) => state.favorites)
  const dispatch = useDispatch()

  const touchFavorites = (id) => {
    if (favorites.includes(id)) {
      dispatch(removeFavoriteCreator(id))
    } else dispatch(addFavoritesCreator(id))
  }
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/sky.png")} style={{minWidth: "100%"}} />

      <View style={styles.flightContainerInfo}>
        <View style={styles.favorite} >
          <TouchableHighlight onPress={()=> touchFavorites(id)} key={id} >
            {favorites.includes(id) ? <Image source={require("../assets/images/favorRed.png")} /> : <Image source={require("../assets/images/favor.png")} />}
          </TouchableHighlight>
        </View>

        <View style={styles.flightDetails}>
          <Text style={styles.smallText}>{date.slice(0, 10)}</Text>
          <Text style={styles.smallText}>{date.slice(11, 16)}</Text>
        </View>

        <View style={styles.flightDetails}>
          <Text style={styles.title}>SVO</Text>
          <Image source={require("../assets/images/arrow.png")}/>
          <Text style={styles.title}>JFK</Text>
        </View>

        <View style={styles.flightDetails}>
          <Text style={styles.smallText}>Moscow</Text>
          <Text style={styles.smallText}>New York City</Text>
        </View>

        <View style={styles.blueBoard}>

          <View style={styles.flightDetails}>
            <Text style={styles.smallTextWhite}>Price</Text>
            <Text style={styles.smallTextWhite}>Boarding</Text>
          </View>
          <Image style={{position: "absolute"}} source={require("../assets/images/line.png")} />
          <View style={styles.flightDetails}>
            <Text style={styles.bigTextWhite}>{price.toString().slice(0, 2)} {price.toString().slice(2, 10)} Р</Text>
            <Text style={styles.bigTextWhite}>19:20</Text>
          </View>
        </View>

      </View>

      <View style={styles.carousel} >
        <CarouselDetailFlight  />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 0,
    marginVertical: 0,
    marginHorizontal: 0
  },
  flightContainerInfo: {
    flexDirection: "column",
    position: "absolute",
    alignItems: "center",
    width: "100%",
    bottom: 220,
    backgroundColor: '#fff',
    padding: 20,
    zIndex: 3,
    height: 190,
    minWidth: "92%",
    borderRadius: 20,
    marginVertical: 0,
    marginHorizontal: 0
  },
  flightDetails: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  blueBoard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "94%",
    padding: 0,
    bottom: 0,
    marginBottom: 5,
    backgroundColor: "#1157A7",
    borderRadius: 10,
    height: 75,
    zIndex: 5,
    position: "absolute",
    elevation: 7
  },
  favorite: {
    position: "absolute",
    right: 23,
    top: 25
  },
  title: {
    fontSize: 36,
    fontWeight: '100',
  },
  smallText: {
    fontSize: 13,
    fontWeight: '100',
    color: "#878787"
  },

  smallTextWhite: {
    fontSize: 13,
    fontWeight: '100',
    color: "#fff"
  },
  bigTextWhite: {
    fontSize: 20,
    fontWeight: '100',
    color: "#fff"
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  carousel: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    zIndex: 2
  }

});