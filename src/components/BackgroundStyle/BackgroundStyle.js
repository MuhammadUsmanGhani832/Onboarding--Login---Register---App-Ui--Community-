import React from 'react'
import { StyleSheet, View } from 'react-native'

const BackgroundStyle = () => {
  return (
    <View>
      <View style={styles.style1}></View>
      <View style={styles.style2}></View>
      <View style={styles.style3}></View>
      <View style={styles.style4}></View>
    </View>
  );
}


const styles = StyleSheet.create({
  style1: {
    position: "absolute",
    backgroundColor: "#ADD8E6",
    height: 635,
    width: 635,
    borderRadius: 635 / 2,
    top: -300,
    left: 95,
  },
  style2: {
    position: "absolute",
    height: 700,
    width: 700,
    borderRadius: 700 / 2,
    top: -300,
    left: 30,
    borderWidth: 3,
    borderColor: "#ADD8E6",
  },
  style3: {
    position: "absolute",
    width: 372,
    height: 372,
    borderWidth: 2,
    top: 500,
    left: -250,
    borderColor: "#ADD8E6",
  },
  style4: {
    position: "absolute",
    width: 372,
    height: 372,
    borderWidth: 2,
    top: 500,
    left: -250,
    borderColor: "#ADD8E6",
    transform: [{ rotate: "35deg" }],
  },
});
export default BackgroundStyle