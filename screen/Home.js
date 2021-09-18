import React from 'react';
import { Image, View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Images from '../assets/index';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const Home = () => {
    return(
        <SafeAreaView styles={styles.container}>
            <Image
                style={styles.image}
                source={Images.main}
            />
            <Text style={styles.title}>Archery Range Finder</Text>
            <GooglePlacesAutocomplete

            />
            <Image
                style={styles.image}
                source={Images.main}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        padding: 10
    },
    image: {
        width: '100%',
        height: 200
    }
});

export default Home;