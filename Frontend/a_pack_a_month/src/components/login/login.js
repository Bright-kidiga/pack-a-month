import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FontAwesome } from 'react-native-vector-icons';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

    const handleLogin = async () => {
        try {
            const response = await fetch('http://your-backend-url/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            console.log('Login successful:', data);

            // Store the token securely in AsyncStorage
            await AsyncStorage.setItem('token', data.token);
            await AsyncStorage.setItem('expiresIn', data.expiresIn.toString());

            Alert.alert('Login Success', `Token saved successfully`);

        } catch (error) {
            console.error('Error during login:', error);
            Alert.alert('Login Failed', error.message);
        }
    };

    // Dummy Google login handler
    const handleGoogleLogin = () => {
        Alert.alert('Google Login', 'Google login button pressed');
    };

    // Dummy Apple login handler
    const handleAppleLogin = () => {
        Alert.alert('Apple Login', 'Apple login button pressed');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome back,</Text>

            {/* Username Input */}
            <View style={styles.inputContainer}>
                <Text style={styles.placeholder}>Username</Text>
                <TextInput
                    style={styles.input}
                    value={username}
                    onChangeText={setUsername}
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

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>

            <View style={styles.link}>
                <Text style={styles.text}>Don't have an account?</Text>
                <Text style={styles.signup}>Sign up</Text>
            </View>

            {/* Divider with "or" in the center */}
            <View style={styles.dividerContainer}>
                <View style={styles.line} />
                <Text style={styles.orText}>or</Text>
                <View style={styles.line} />
            </View>

            {/* Google and Apple Login Buttons */}
            <View style={styles.socialLoginContainer}>
                <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#DB4437' }]} onPress={handleGoogleLogin}>
                    <FontAwesome name="google" size={20} color="#fff" />
                    <Text style={styles.socialButtonText}>Login with Google</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#000' }]} onPress={handleAppleLogin}>
                    <FontAwesome name="apple" size={20} color="#fff" />
                    <Text style={styles.socialButtonText}>Login with Apple</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',  // Aligns the content at the top
        alignItems: 'center',
        padding: 20,
        paddingTop: 200,  // Adjust this padding to reduce top space
    },
    title: {
        width: '100%',
        fontSize: 28,
        fontWeight: 'bold',
        color: '#F065A6',
        textAlign: 'left',
        marginBottom: 10,  // Reduced space between title and input
    },
    inputContainer: {
        width: '90%',
        marginBottom: 15,  // Reduced space between inputs
    },
    placeholder: {
        fontSize: 16,
        fontWeight: '600',
        color: '#F065A6', // Placeholder color
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
    icon: {
        paddingHorizontal: 10, // Add padding for better spacing
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
    link: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10,  // Reduced space between button and link
    },
    signup: {
        fontWeight: 'bold',
        color: '#F065A6',
        paddingTop: 15,
        paddingLeft: 6,
    },
    text: {
        color: '#F065A6',
        paddingTop: 15,
        paddingLeft: 6,
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        marginVertical: 20, // Reduced space between form and social login buttons
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#ddd',
    },
    orText: {
        marginHorizontal: 10,
        color: '#888',
        fontSize: 16,
    },
    socialLoginContainer: {
        position: 'absolute', // Positioned at the bottom
        bottom: 40, // Adjust as necessary
        width: '100%',
        alignItems: 'center',
    },
    socialButton: {
        width: '70%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
    },
    socialButtonText: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 10,
    },
});

export default Login;
