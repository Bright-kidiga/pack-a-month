import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

// Sample data for the carousel
const carouselItems = [
    {
        title: 'Feature 1',
        description: 'Description for feature 1 of Pack a Month.',
    },
    {
        title: 'Feature 2',
        description: 'Description for feature 2 of Pack a Month.',
    },
    {
        title: 'Feature 3',
        description: 'Description for feature 3 of Pack a Month.',
    },
];

const StartPage = ({ navigation }) => {
    const { width: viewportWidth } = Dimensions.get('window');

    const renderItem = ({ item }) => (
        <View style={styles.carouselItem}>
            <Text style={styles.carouselTitle}>{item.title}</Text>
            <Text style={styles.carouselDescription}>{item.description}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Carousel */}
            <Carousel
                data={carouselItems}
                renderItem={renderItem}
                sliderWidth={viewportWidth}
                itemWidth={viewportWidth - 60}
                layout={"default"} // Layout type
            />

            {/* Buttons */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

StartPage.propTypes = {
    navigation: PropTypes.object.isRequired, // Ensure navigation prop is provided
};

StartPage.defaultProps = {};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    carouselItem: {
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#f9f9f9', // Add background color to distinguish carousel items
        borderRadius: 10,
    },
    carouselTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    carouselDescription: {
        fontSize: 16,
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#F065A6',
        borderRadius: 20,
        padding: 15,
        width: '45%', // Adjust width as needed
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default StartPage;
