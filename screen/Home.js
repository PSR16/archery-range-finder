import React from 'react';
import { Image, Button, View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Images from '../assets/index';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from "@env";

const Home = () => {
    return(
        <SafeAreaView styles={styles.container}>
            <View>
                <Image
                    style={styles.image}
                    source={Images.main}
                />
                <Text style={styles.title}>Archery Range Finder</Text>
                
                <GooglePlacesAutocomplete
                    styles={{
                        container: {
                            flex: 0,
                            padding: 20
                        }
                    }}
                    placeholder='Search'
                    nearbyPlacesAPI='GooglePlacesSearch'
                    query={{
                        key: GOOGLE_API_KEY,
                        language: 'en'
                    }}
                    onPress={(data, details = null) => {
                        console.log(data, details);
                    }}
                    debounce={200}
                    enablePoweredByContainer={false}
                />
                <Text style={styles.text}>Or</Text>
                <Button
                    title="Submit a Range"
                    color="black"
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        fontSize: 18
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