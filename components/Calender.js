import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient

const CalendarComponent = () => {
  return (
    <View style={styles.container}>
      {/* Apply LinearGradient as the border */}
      <LinearGradient
        colors={['#20A64B', '#FFDD00']} // Gradient colors
        style={styles.gradientBorder} // Style for gradient border
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.innerContainer}>
          <Calendar
            style={styles.calendar}
            current={'2024-11-01'}
            minDate={'2024-01-01'}
            maxDate={'2024-12-31'}
            onDayPress={(day) => {
              console.log('selected day', day);
            }}
            markedDates={{
              '2024-11-10': { selected: true, marked: true, selectedColor: '#20A64B' },
              '2024-11-11': { marked: true },
              '2024-11-12': { marked: true, dotColor: 'yellow', activeOpacity: 0 },
            }}
            monthFormat={'MMMM,yyyy'}
            theme={{
              backgroundColor: '#20A64B',
              calendarBackground: '#20252C',
              textSectionTitleColor: '#b6c1cd',
              selectedDayBackgroundColor: '#20A64B',
              selectedDayTextColor: 'white',
              todayTextColor: '#20A64B',
              todayButtonFontWeight: 800,
              dayTextColor: 'white',
              textDisabledColor: '#d9e1e8',
              dotColor: 'yellow',
              selectedDotColor: 'white',
              arrowColor: '#20A64B',
              arrowStyle: '',
              monthTextColor: 'white',
              textDayFontFamily: 'Outfit',
              textMonthFontFamily: 'Outfit',
              textDayHeaderFontFamily: 'Outfit',
            }}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    marginBottom: 20,
    marginTop: 10,
    // flex: 1, // Ensures the container takes full available height
  },
  gradientBorder: {
    borderWidth: 3, // Adjust the thickness of the gradient border
    borderRadius: 20, // Rounded corners for the border
    padding: 5, // Padding inside the gradient border to make space for the content
  },
  innerContainer: {
    backgroundColor: '#20252C', // The background color for the calendar content
    borderRadius: 20, // Match the border radius of the gradient border
  },
  calendar: {
    borderRadius: 20, // Ensure the calendar has rounded corners too
  },
});

export default CalendarComponent;
