import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CheckBox } from 'react-native-elements'; // Import CheckBox from react-native-elements
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = ({ onSignup, navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State for password visibility
    const [isAgreed, setIsAgreed] = useState(false); // State for checkbox

    const handleSignup = async () => {
        if (!isAgreed) {
            Alert.alert('Please agree to the Terms and Data Policy.');
            return;
        }

        try {
            const response = await axios.post('http://your-backend-url/signup', {
                username,
                password,
                email,
            });

            if (response.status === 200) {
                console.log('Signup successful:', response.data);
                const { token } = response.data;

                // Store the token securely in AsyncStorage
                await AsyncStorage.setItem('token', token);

                Alert.alert('Signup successful!', 'Token saved.');

                if (onSignup) {
                    onSignup(response.data);  // Call the external signup handler if provided
                }
            }
        } catch (error) {
            console.error('Error during signup:', error);
            Alert.alert('Signup failed', 'Please try again.');
        }
    };

    return (
        <View style={styles.container}>
            {/* Back Button */}
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Icon name="arrow-back" size={30} color="#F065A6" />
            </TouchableOpacity>

            <Text style={styles.title}>Signup,</Text>

            {/* Username Input */}
            <View style={styles.inputContainer}>
                <Text style={styles.placeholder}>Name</Text>
                <TextInput
                    style={styles.input}
                    value={username}
                    onChangeText={setUsername}
                />
            </View>

            {/* Email Input */}
            <View style={styles.inputContainer}>
                <Text style={styles.placeholder}>Email</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            {/* Password Input */}
            <View style={styles.inputContainer}>
                <Text style={styles.placeholder}>Password</Text>
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.passwordInput}
                        placeholder=""
                        secureTextEntry={!showPassword}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.icon}>
                        <Icon name={showPassword ? 'visibility' : 'visibility-off'} size={24} color="#F065A6" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* "I have an account" Text with Login link */}
            <View style={styles.accountContainer}>
                <Text style={styles.accountText}>I have an account...</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}> {/* Navigate to Login */}
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSignup}>
                <Text style={styles.buttonText}>Signup</Text>
            </TouchableOpacity>

            {/* Checkbox for Terms and Data Policy */}
            <View style={styles.termsContainer}>
                <CheckBox
                    checked={isAgreed} // Use 'checked' prop instead of 'value'
                    onPress={() => setIsAgreed(!isAgreed)} // Toggle state on press
                    containerStyle={{ backgroundColor: 'transparent', marginRight: 0 }}
                    uncheckedColor="#F065A6" // Unchecked color
                    checkedColor="#F065A6"   // Checked color
                />
                <Text style={styles.termsText}>
                    I agree to the <Text style={styles.termsLink}>Terms</Text> and <Text style={styles.termsLink}>Data Policy</Text>
                </Text>
            </View>
        </View>
    );
};

// Stylesheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
        paddingTop: 200,
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
        zIndex: 1,
    },
    title: {
        width: '100%',
        fontSize: 28,
        fontWeight: 'bold',
        color: '#F065A6',
        textAlign: 'left',
        marginBottom: 30,
    },
    inputContainer: {
        width: '90%',
        marginBottom: 15,
    },
    placeholder: {
        fontSize: 16,
        fontWeight: '600',
        color: '#F065A6',
        marginBottom: 3,
        textAlign: 'left',
    },
    input: {
        height: 45,
        padding: 10,
        borderWidth: 1.5,
        borderColor: '#F065A6',
        borderRadius: 20,
    },
    icon: {
        paddingHorizontal: 10, // Add padding for better spacing
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: '#F065A6',
        borderRadius: 20,
    },
    passwordInput: {
        flex: 1,
        height: 45,
        padding: 10,
        borderWidth: 0,
    },
    button: {
        backgroundColor: '#F065A6',
        borderRadius: 20,
        width: '90%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,  // Reduced space between input and button
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    accountContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10, // Add padding on top and bottom
    },
    accountText: {
        color: '#F065A6',
        fontSize: 16,
        marginTop: 15,
        marginBottom: 15,
    },
    loginText: {
        color: '#F065A6',
        fontSize: 16,
        fontWeight: 'bold',
    },
    termsContainer: {
        width: '70%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 60,
        marginBottom: 20,
    },
    termsText: {
        color: '#F065A6',
        fontSize: 16,
        marginLeft: 0,
    },
    termsLink: {
        color: '#F065A6',
        fontWeight: 'bold',
    },
});

// PropTypes definition
Signup.propTypes = {
    onSignup: PropTypes.func,
    navigation: PropTypes.object.isRequired, // Ensure navigation is provided
};

// DefaultProps definition
Signup.defaultProps = {
    onSignup: null,
};

export default Signup;
