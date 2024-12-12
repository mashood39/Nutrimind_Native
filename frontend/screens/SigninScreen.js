import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SigninScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.mainArea}>
                <Text style={styles.welcomeText}>Welcome to NutriMind</Text>
                <Text style={styles.numberText}>Enter your mobile number</Text>

                <View style={styles.numberInputContainer}>
                    <TextInput
                        style={styles.numberInput}
                        keyboardType="numeric"
                    />
                </View>

                <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('Otp')}>
                    <Text style={styles.buttonText}>Generate OTP</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#fff',
    },
    mainArea: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#ece7e7',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 40,
        borderRadius: 10,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    numberText: {
        fontSize: 16,
        marginBottom: 20,
    },
    numberInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    numberInput: {
        height: 50,
        width: '80%',
        borderWidth: 1,
        borderColor: '#ccc',
        textAlign: 'center',
        marginHorizontal: 5,
        backgroundColor: '#ccc',
        borderRadius: 10,

    },
    Button: {
        width: '80%',
        backgroundColor: '#87cefa',
        padding: 15,
        borderRadius: 10,
    },
    buttonText: {
        // color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
});

export default SigninScreen;