import * as React from 'react';
import {
    View,
    SafeAreaView, Image, StyleSheet, Platform
} from 'react-native';

import Carousel from 'react-native-snap-carousel';

export default class CarouselDetailFlight extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            activeIndex:0,
            carouselItems: [
                {
                    imgSrc: 'https://i.ibb.co/m64v015/newyork.png',
                },
                {
                    imgSrc: 'https://i.ibb.co/m4ZvCMm/newyork2.png',
                },
                {
                    imgSrc: 'https://i.ibb.co/m64v015/newyork.png',
                },
            ]
        }
    }

    _renderItem({item,index}){
        return (
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: item.imgSrc}}/>
            </View>

        )
    }s

    render() {

        return (
            <SafeAreaView style={{flex: 1, backgroundColor:'#fff', paddingTop: 0, }}>
                <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                    <Carousel
                        layout={"default"}
                        // @ts-ignore
                        ref={ref => this.carousel = ref}
                        // @ts-ignore
                        data={this.state.carouselItems}
                        sliderWidth={139}
                        itemWidth={139}
                        loop
                        containerCustomStyle={{marginTop: 20, marginLeft: 30, marginBottom: 15, width: 600}}
                        firstItem={0}
                        inactiveSlideScale={1}
                        inactiveSlideOpacity={100}
                        renderItem={this._renderItem}
                        onSnapToItem = { index => this.setState({activeIndex:index}) } />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        flex: 1,
        marginRight: 10,
        marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
        elevation: 6
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
        borderRadius: 10,
    },
});
