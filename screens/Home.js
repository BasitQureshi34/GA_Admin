import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Locator from "../assets/SVG/Locator";
import Directions from "../assets/SVG/Directions";
import CalendarComponent from "../components/Calender";

const Home = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>
          Your next pickup for{" "}
          <Text style={styles.highlightedText}>Aanya Sharma</Text> and{" "}
          <Text style={styles.highlightedText}>Anika Sharma</Text> is at 7:25 am
        </Text>
      </View>
      
      <View style={{ flexDirection: "row", flex: 1, alignItems: "center"}}>
        <View>
          <Locator style={styles.locator} />
        </View>
        <View>
          <Text style={{ marginLeft: 36, color: "#FFF", fontFamily: "Outfit" }}>
            Near Hanuman Mandir,{"\n"}Madhya Marg {"\n"}Sector 14, Gurugram
          </Text>
        </View>
        <View>
            <Directions style={{marginLeft:135, marginBottom:30, marginTop:10}}/>
        </View>
        <View style={{position:"absolute", left:330, bottom:5}}>
            <Text style={{fontFamily:'Outfit' , fontWeight:600 , color:"#20A64B"}}>Directions</Text>
        </View>
        
      </View>
      <CalendarComponent/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    paddingVertical: 20,
    backgroundColor: "#12151A",
    width: "100%", // Ensures the view fills the width of the screen
    flex: 1, // Ensures the container can expand to fill available space
    alignSelf: "stretch",
  },
  text: {
    color: "white",
    fontSize: 16,
    fontFamily: "Outfit",
    fontWeight: "600",
    wordWrap: "break-word",
    paddingHorizontal: 10, // Optional padding for text without affecting container edges
  },
  highlightedText: {
    color: "#20A64B",
    fontWeight: "bold",
    
  },
  locator: {
    postion:'absolute',
    left:15,
  },
});

export default Home;
