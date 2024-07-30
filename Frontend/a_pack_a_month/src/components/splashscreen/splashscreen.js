import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const splashscreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Splash Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

splashscreen.propTypes = {};

splashscreen.defaultProps = {};

export default splashscreen;
