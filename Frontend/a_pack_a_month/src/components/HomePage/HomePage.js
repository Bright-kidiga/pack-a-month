import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // For icons

const HomePage = () => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>A Pack a Month</Text>
                <TouchableOpacity style={styles.profileButton}>
                    <FontAwesome name="user" size={24} color="#F065A6" />
                </TouchableOpacity>
            </View>

            {/* Period Tracker Card */}
            <View style={styles.trackerCard}>
                <Text style={styles.cardTitle}>Your Cycle Tracker</Text>
                <Text style={styles.cardDescription}>
                    Current Cycle: 28 days (Next period due: 15th Oct)
                </Text>
            </View>

            {/* Calendar View */}
            <Text style={styles.sectionTitle}>Calendar</Text>
            <View style={styles.calendarContainer}>
                {/* Placeholder for calendar */}
                <Text style={styles.calendarText}>[Calendar Component Here]</Text>
            </View>

            {/* Reminders Section */}
            <Text style={styles.sectionTitle}>Set Reminders</Text>
            <View style={styles.reminderContainer}>
                <TouchableOpacity style={styles.reminderButton}>
                    <Text style={styles.reminderText}>Add Reminder</Text>
                </TouchableOpacity>
            </View>

            {/* Resources Section */}
            <Text style={styles.sectionTitle}>Resources</Text>
            <ScrollView style={styles.resourcesContainer}>
                <Text style={styles.resourceText}>- Understanding Your Cycle</Text>
                <Text style={styles.resourceText}>- Tips for Managing Symptoms</Text>
                <Text style={styles.resourceText}>- FAQs About Menstruation</Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#F065A6',
    },
    profileButton: {
        padding: 10,
    },
    trackerCard: {
        padding: 20,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        marginBottom: 20,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    cardDescription: {
        fontSize: 16,
        marginTop: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    calendarContainer: {
        padding: 20,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        marginBottom: 20,
        alignItems: 'center',
    },
    calendarText: {
        fontSize: 16,
        color: '#777',
    },
    reminderContainer: {
        marginBottom: 20,
    },
    reminderButton: {
        backgroundColor: '#F065A6',
        borderRadius: 20,
        padding: 15,
        alignItems: 'center',
    },
    reminderText: {
        color: '#fff',
        fontSize: 16,
    },
    resourcesContainer: {
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        padding: 15,
    },
    resourceText: {
        fontSize: 14,
        marginVertical: 5,
    },
});

export default HomePage;
