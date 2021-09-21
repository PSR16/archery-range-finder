import React, {useState, useEffect} from 'react';
import { Pressable, Button, View, Text, SafeAreaView, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from "@env";

const Submit = () => {
    const [rangeName, setRangeName] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
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
    ];

    const amenities = [
        {
            key: 'bathroom',
            text: 'Bathrooms'
        },
        {
            key: 'equipment',
            text: 'Equipment Rental'
        }
    ];

    const handleValueChange = () => {
        console.log(rangeName)
        console.log(email)
        console.log(phone)
        console.log(address)
        console.log(website)
      }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Submit a Range</Text>
            <TextInput 
                name="range"
                style={styles.input}
                placeholder="Range Name"
                onChangeText={val => setRangeName(val)}
            />
            <TextInput 
                name="website"
                style={styles.input}
                placeholder="Website"
                onChangeText={val => setWebsite(val)}
            />
            <TextInput 
                name="email"
                style={styles.input}
                placeholder="Contact Email"
                onChangeText={val => setEmail(val)}
            />
            <TextInput 
                name="phone"
                style={styles.input}
                placeholder="Phone"
                onChangeText={val => setPhone(val)}
            />
            <TextInput 
                name="address"
                style={styles.input}
                placeholder="Address"
                onChangeText={val => setAddress(val)}
            />
                
            <Text style={{fontSize: 20, padding: 10}}>Access</Text>
            <View style={{flexDirection: 'row', margin: 10}}>
                {accessOptions.map(item => {
                    return(
                        <View key={item.key} style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.circle} />
                            <Text style={styles.options}>
                                {item.text}
                            </Text>
                        </View>);
                    })
                }
            </View>
            <Text style={{fontSize: 20, padding: 10}}>Amenities</Text>
            <View style={{flexDirection: 'row', margin: 10}}>
                {amenities.map(item => {
                    return(
                        <View key={item.key} style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.checkBox}/>
                            <Text style={styles.options}>
                                {item.text}
                            </Text>
                        </View>);
                    })
                }
            </View>
            <Button 
                onPress={handleValueChange}
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
        padding: 8,
        width: '80%',
        borderRadius: 20,
        margin: 8
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
    checkedCircle: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#794F9B',
    },
    options: {
        fontSize: 17
    }
});

export default Submit;