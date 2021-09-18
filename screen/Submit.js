import React from 'react';
import { Button, Text, SafeAreaView, TextInput, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from "@env";

const Submit = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Submit a Range</Text>
            <Text style={styles.label}>Range Name</Text>
            <TextInput
                style = {styles.input}
                placeholder="Range Name"
            />
            <Text style={styles.label}>Contact Email</Text>
            <TextInput
                style = {styles.input}
                placeholder="Contact Email"
            />
            <Text style={styles.label}>Website</Text>
            <TextInput
                style = {styles.input}
                placeholder="Website"
            />
            <Text style={styles.label}>Access</Text>
            <TextInput
                style = {styles.input}
                placeholder="Range Access"
            />
            <Text style={styles.label}>Type</Text>
            <TextInput
                style = {styles.input}
                placeholder="Type"
            />
            <Text style={styles.label}>Address</Text>
            <TextInput
                style = {styles.input}
                placeholder="Address"
            />
            <Button 
                title="Submit"
                color="black"
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    label: {
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
    },
    input: {
        fontSize: 20
    }
});

export default Submit;