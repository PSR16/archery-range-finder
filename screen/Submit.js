import React, {useState} from 'react';
import { Pressable, Button, View, Text, SafeAreaView, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from "@env";
import {Picker} from '@react-native-picker/picker';

const Submit = () => {
    const accessOptions = [
        {
            key: 'out',
            text: 'Outdoor'
        },
        {
            key: 'in',
            text: 'Indoor'
        },
        {
            key:'both',
            text: 'Both'
        }
    ]
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Submit a Range</Text>
        
            <TextInput
                style = {styles.input}
                placeholder="Range Name"
            />
           
            <TextInput
                style = {styles.input}
                placeholder="Contact Email"
            />
         
            <TextInput
                style = {styles.input}
                placeholder="Website"
            />
           
            <TextInput
                style = {styles.input}
                placeholder="Phone"
            />
            <TextInput
                style = {styles.input}
                placeholder="Address"
            />
            <Text style={{fontSize: 20, padding: 10}}>Access</Text>
            {accessOptions.map(item => {
                return(
                    <View key={item.key} style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.circle}/>
                        <Text style={styles.options}>
                            {item.text}
                        </Text>
                    </View>);
            })}
            <Text style={{fontSize: 20}}>Amenities</Text>
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
    title: {
        textAlign: 'center',
        fontSize: 30,
        margin: 30
    },
    input: {
        fontSize: 20,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        width: '80%',
        borderRadius: 20,
        margin: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        margin: 3
    },
    circle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ACACAC',
        alignItems: 'center',
        justifyContent: 'center',
    },
    options: {
        fontSize: 17
    }
});

export default Submit;