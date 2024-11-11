import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import SvgComponent1 from '../assets/SVG/MainIcon';
import ProfileIcon from '../assets/SVG/ProfileIcon';

const Layout1 = ({ children, tabs }) => {
  return (
    <SafeAreaView edges={['top']} style={{ backgroundColor: "#20252C", flex: 1 }}>
      <ScrollView style={{ paddingHorizontal: 0, marginHorizontal: 0 }}>
        {/* Header layout */}
        <View style={styles.headerContainer}>
          <SvgComponent1 style={styles.icon} />
          <Text style={styles.greetingText}>Good{"\n"}Morning</Text>
          <ProfileIcon style={styles.profileIcon} />
          <Text style={styles.profileText}>Profile</Text>
        </View>

        {/* Tabs section */}
        <View style={styles.tabsContainer}>
          {tabs}
        </View>

        {/* Main content */}
        <View style={[styles.contentContainer, { paddingHorizontal: 0 }]}>
          {children}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginLeft: 15,
  },
  greetingText: {
    marginLeft: 12,
    marginTop: 8,
    fontFamily: "Outfit",
    fontWeight: "600",
    fontSize: 18,
    color: "white",
  },
  profileIcon: {
    position: "absolute",
    left: 350,
    top: 10,
  },
  profileText: {
    fontFamily: "Outfit",
    position: "absolute",
    left: 350,
    top: 50,
    color: "white",
    fontWeight: "600",
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5,
  },
  contentContainer: {
    flex: 1, // Takes up remaining space
    justifyContent: 'flex-start', // Ensures Home sticks to the top within this container
    paddingHorizontal: 0,
    paddingVertical: 5,
  },
});

export default Layout1;
