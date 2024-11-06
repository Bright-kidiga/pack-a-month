import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Splashscreen = () => {
    return (
        <View style={styles.container}>
            {/* Title */}
            <Text style={styles.title}>A PACK A MONTH</Text>

            {/* Logo */}
            <Image
                source={require('../../../assets/favicon.png')} // Update the path to your logo
                style={styles.logo}
            />

            {/* Tagline */}
            <Text style={styles.tagline}>Shielding the Future</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F6D5DA', // Updated background color
    },
    logo: {
        margin: 8,
    },
    title: {
        fontSize: 30,
        fontWeight: 950,
        color: '#F065A6', // Font color
        marginBottom: 10,
    },
    tagline: {
        fontSize: 25,
        fontWeight: 800,
        color: '#F065A6', // Font color
    },
});

export default Splashscreen;
