import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Verification = ({ navigation }) => {
    const [code, setCode] = useState('');

    const handleVerifyCode = () => {
        // Handle verification logic here
        console.log("Verification code entered:", code);
    };

    return (
        <View style={styles.container}>
            {/* Back Button */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <FontAwesome name="arrow-left" size={24} color="#F065A6" />
            </TouchableOpacity>

            {/* Title */}
            <Text style={styles.title}>Enter Verification Code</Text>

            {/* Description */}
            <Text style={styles.description}>
                Enter the verification code that has been sent to your email or phone number. If you don't see it in your inbox, please check your spam folder.
            </Text>

            {/* Input for Verification Code */}
            <TextInput
                placeholder="Verification Code"
                style={styles.inputBox}
                value={code}
                onChangeText={setCode}
                keyboardType="numeric"
            />

            {/* Confirm Button */}
            <TouchableOpacity style={styles.button} onPress={handleVerifyCode}>
                <Text style={styles.buttonText}>VERIFY CODE</Text>
            </TouchableOpacity>
        </View>
    );
};

Verification.propTypes = {
    navigation: PropTypes.object,
};

Verification.defaultProps = {};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#F065A6',
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 30,
        color: '#000',
    },
    inputBox: {
        width: '100%',
        borderWidth: 2,
        borderColor: '#F065A6',
        borderRadius: 20,
        padding: 15,
        marginBottom: 20,
        fontSize: 16,
        color: '#000',
    },
    button: {
        backgroundColor: '#F065A6',
        borderRadius: 20,
        padding: 15,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});

export default Verification;
