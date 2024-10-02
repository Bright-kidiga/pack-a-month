import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ForgotPassword = ({ navigation }) => {
    const [selectedOption, setSelectedOption] = useState(null); // 'email' or 'phone'
    const [inputValue, setInputValue] = useState('');

    const handleOptionChange = (option) => {
        setSelectedOption(option);
        setInputValue(''); // Reset input when option changes
    };

    return (
        <View style={styles.container}>
            {/* Back Button */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <FontAwesome name="arrow-left" size={24} color="#F065A6" />
            </TouchableOpacity>

            {/* Title */}
            <Text style={styles.title}>Forgot Password</Text>

            {/* Description */}
            <Text style={styles.description}>
                Enter your email or phone number to receive a reset link. Check your spam folder if you don’t see it.
            </Text>

            {/* Option Selection */}
            <View style={styles.optionContainer}>
                <TouchableOpacity onPress={() => handleOptionChange('email')} style={styles.option}>
                    <FontAwesome name={selectedOption === 'email' ? 'dot-circle-o' : 'circle-o'} size={24} color="#F065A6" />
                    <Text style={styles.optionText}>Email</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleOptionChange('phone')} style={styles.option}>
                    <FontAwesome name={selectedOption === 'phone' ? 'dot-circle-o' : 'circle-o'} size={24} color="#F065A6" />
                    <Text style={styles.optionText}>Phone Number</Text>
                </TouchableOpacity>
            </View>

            {/* Email Input */}
            <View style={styles.box}>
                <View style={styles.iconContainer}>
                    <View style={styles.circle}>
                        <FontAwesome name="envelope" size={20} color="black" />
                    </View>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.boxTitle}>Email</Text>
                    <TextInput
                        placeholder="example@email.com"
                        value={selectedOption === 'email' ? inputValue : ''}
                        onChangeText={setInputValue}
                        editable={selectedOption === 'email'}
                        style={styles.input}
                    />
                </View>
            </View>

            {/* Phone Number Input */}
            <View style={styles.box}>
                <View style={styles.iconContainer}>
                    <View style={styles.circle}>
                        <FontAwesome name="phone" size={20} color="black" />
                    </View>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.boxTitle}>Phone Number</Text>
                    <TextInput
                        placeholder="+254 712 345 678"
                        value={selectedOption === 'phone' ? inputValue : ''}
                        onChangeText={setInputValue}
                        editable={selectedOption === 'phone'}
                        style={styles.input}
                    />
                </View>
            </View>

            {/* Continue Button */}
            <TouchableOpacity style={styles.button} onPress={() => {/* Handle continue action */}}>
                <Text style={styles.buttonText}>CONTINUE</Text>
            </TouchableOpacity>
        </View>
    );
};

ForgotPassword.propTypes = {
    navigation: PropTypes.object,
};

ForgotPassword.defaultProps = {};

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
    optionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
        width: '100%',
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    optionText: {
        marginLeft: 10,
        fontSize: 16,
        color: '#F065A6',
    },
    box: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#F065A6',
        borderRadius: 20,
        padding: 15,
        width: '100%',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 90,
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    circle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'lightgrey',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    boxTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#F065A6',
    },
    input: {
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

export default ForgotPassword;
