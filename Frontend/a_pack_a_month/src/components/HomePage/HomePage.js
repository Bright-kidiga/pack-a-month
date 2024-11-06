import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Platform } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // For icons
import { Calendar } from 'react-native-calendars'; // Calendar import
import DateTimePicker from '@react-native-community/datetimepicker'; // Date picker import
import axios from 'axios'; // For API calls

const HomePage = () => {
    const [startDate, setStartDate] = useState(new Date()); // Default to today's date
    const [cycleDetails, setCycleDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showPicker, setShowPicker] = useState(false); // State to control DateTimePicker visibility

    useEffect(() => {
        // Function to fetch cycle details from the backend when startDate changes
        const fetchCycleDetails = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`http://<your-backend-url>/api/cycle/calculate?startDate=${startDate.toISOString().split('T')[0]}`);
                setCycleDetails(response.data);
            } catch (error) {
                console.error('Error fetching cycle details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCycleDetails();
    }, [startDate]); // Re-fetch when startDate changes

    // Function to handle date change from DateTimePicker
    const onDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || startDate;
        setShowPicker(Platform.OS === 'ios' ? true : false); // For iOS, keep the picker open, else close it
        setStartDate(currentDate); // Update start date
    };

    const today = new Date().toISOString().split('T')[0]; // Get today's date

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
                {loading ? (
                    <Text style={styles.cardDescription}>Loading...</Text>
                ) : (
                    <Text style={styles.cardDescription}>
                        Current Cycle: {cycleDetails?.cycleLength} days (Next period due: {cycleDetails?.nextPeriodDate})
                    </Text>
                )}
            </View>

            {/* Start Date Picker */}
            <Text style={styles.sectionTitle}>Select Start Date</Text>
            <View style={styles.datePickerContainer}>
                <TouchableOpacity style={styles.datePickerButton} onPress={() => setShowPicker(true)}>
                    <Text style={styles.datePickerText}>
                        {startDate.toISOString().split('T')[0]}
                    </Text>
                </TouchableOpacity>
            </View>

            {/* DateTimePicker for selecting date */}
            {showPicker && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={startDate}
                    mode="date"
                    display="default"
                    onChange={onDateChange}
                />
            )}

            {/* Calendar View */}
            <Text style={styles.sectionTitle}>Calendar</Text>
            <View style={styles.calendarContainer}>
                <Calendar
                    current={today}
                    onDayPress={(day) => {
                        console.log('selected day', day);
                    }}
                    markedDates={{
                        '2024-10-15': { selected: true, marked: true, selectedColor: '#F065A6' },
                    }}
                    theme={{
                        todayTextColor: '#F065A6',
                        arrowColor: '#F065A6',
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        width: '100%'
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
    datePickerContainer: {
        marginBottom: 20,
    },
    datePickerButton: {
        padding: 15,
        backgroundColor: '#F065A6',
        borderRadius: 20,
        alignItems: 'center',
    },
    datePickerText: {
        color: '#fff',
        fontSize: 16,
    },
    calendarContainer: {
        padding: 20,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        marginBottom: 20,
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
