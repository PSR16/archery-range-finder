import React, {useState } from 'react';
import { Button, View, Text, SafeAreaView, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const SubmitRange = ({navigation}) => {
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
            key: 'member',
            text: 'Member-Only'
        },
        {
            key: 'public',
            text: 'Public'
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
        },
        {
            key: 'shop',
            text: 'Retail Shop'
        },
        {
            key: 'clubhouse',
            text: 'Clubhouse'
        }
    ];
    
    const handleValueChange = () => {
        let rangeSubmission = {
            "name": rangeName,
            "email": email,
            "website": website,
            "phone": phone,
            "address": address
        }
    }

    return(
        <SafeAreaView style={styles.container}>
            <Button title="Go back" onPress={() => navigation.goBack()} />
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
            <View style={{flexWrap: 'wrap',  flexShrink: 1, flexDirection: 'row', paddingLeft: 20, paddingRight: 15}}>
            {accessOptions.map(item => {
                    return(
                        <BouncyCheckbox 
                            key={item.key}
                            size={20} 
                            text={item.text}
                            style={styles.checkbox}
                            iconStyle={{ borderColor: "green" }}
                            textStyle={{
                                textDecorationLine: "none"
                           }}
                        />
                        );
                    })
                }
            </View>
            <Text style={{fontSize: 20, padding: 10}}>Amenities</Text>
            <View style={{flexWrap: 'wrap',  flexShrink: 1, flexDirection: 'row', paddingLeft: 20, paddingRight: 15}}>
                {amenities.map(item => {
                    return(
                        <BouncyCheckbox 
                            key={item.key}
                            size={20} 
                            text={item.text}
                            style={styles.checkbox}
                            iconStyle={{ borderColor: "green" }}
                            textStyle={{
                                textDecorationLine: "none"
                           }}
                        />
                        );
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
    checkbox: {
        padding: 10
    }
});

export default SubmitRange;