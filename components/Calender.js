import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

const CustomCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  const renderDays = () => {
    const days = [];
    const daysInCurrentMonth = daysInMonth(currentMonth, currentYear);
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    // Add empty slots for days of previous month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<View style={styles.day} key={`empty-${i}`} />);
    }

    // Add days of current month
    for (let day = 1; day <= daysInCurrentMonth; day++) {
      days.push(
        <TouchableOpacity key={day} style={styles.day}>
          <Text style={styles.dayText}>{day}</Text>
        </TouchableOpacity>
      );
    }

    return days;
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#20A64B", "#FFDD00"]}
        style={styles.gradientBorder}
      >
        <View style={styles.calendarContainer}>
          {/* Header with month navigation */}
          <View style={styles.header}>
            <TouchableOpacity onPress={goToPreviousMonth}>
              <Text style={styles.navText}>Prev</Text>
            </TouchableOpacity>
            <Text style={styles.monthText}>{`${currentDate.toLocaleString(
              "default",
              {
                month: "long",
              }
            )} ${currentYear}`}</Text>
            <TouchableOpacity onPress={goToNextMonth}>
              <Text style={styles.navText}>Next</Text>
            </TouchableOpacity>
          </View>

          {/* Weekday headers */}
          <View style={styles.weekHeader}>
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
              (day, index) => (
                <Text key={index} style={styles.weekDayText}>
                  {day}
                </Text>
              )
            )}
          </View>

          {/* Days */}
          <View style={styles.daysContainer}>{renderDays()}</View>
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
  },
  gradientBorder: {
    borderWidth: 3,
    borderRadius: 20,
    padding: 5,
  },
  calendarContainer: {
    backgroundColor: "#20252C",
    borderRadius: 20,
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  navText: {
    color: "white",
    fontSize: 16,
  },
  monthText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  weekHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  weekDayText: {
    color: "#b6c1cd",
    fontSize: 14,
    textAlign: "center",
    width: "14.28%",
  },
  daysContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  day: {
    width: "14.28%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dayText: {
    color: "white",
    fontSize: 16,
  },
});

export default CustomCalendar;
