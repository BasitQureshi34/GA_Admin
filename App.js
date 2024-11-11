import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Home from './screens/Home';
import About from './screens/About';
import Map from './screens/Map';
import Layout1 from './screens/Layout1';

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [selectedTab, setSelectedTab] = useState('Home');
  const [fontLoaded, setFontLoaded] = useState(false);

  // Load fonts and hide the splash screen after loading
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        Outfit: require('./assets/fonts/Outfit-Regular.ttf'),
      });
      setFontLoaded(true);
      await SplashScreen.hideAsync(); // Hide the splash screen once fonts are loaded
    };

    loadFonts();
  }, []);

  if (!fontLoaded) {
    return null; // Don't render anything until fonts are loaded
  }

  const renderContent = () => {
    switch (selectedTab) {
      case 'Home':
        return <Home />;
      case 'About':
        return <About />;
      case 'Map':
        return <Map />;
      default:
        return null;
    }
  };

  const TabButtons = (
    <View style={styles.tabContainer}>
      <TouchableOpacity
        style={[styles.tabButton, selectedTab === 'Home' && styles.activeTab]}
        onPress={() => setSelectedTab('Home')}
      >
        <Text style={styles.tabText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tabButton, selectedTab === 'About' && styles.activeTab]}
        onPress={() => setSelectedTab('About')}
      >
        <Text style={styles.tabText}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tabButton, selectedTab === 'Map' && styles.activeTab]}
        onPress={() => setSelectedTab('Map')}
      >
        <Text style={styles.tabText}>Map</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <Layout1 tabs={TabButtons}>
      {renderContent()}
    </Layout1>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    marginLeft:-235
  },
  tabButton: {
    widht:60,
    height:40,
    paddingVertical: 10,
    
    paddingHorizontal:10,
    backgroundColor: '#20252C',
    
  },
  activeTab: {
    borderBottomColor:"#20A64B",
    borderBottomWidth:3
  },
  tabText: {
    fontFamily: "Outfit",
    color: '#fff',
    fontSize: 16,
    fontWeight:'600'
  },
});
