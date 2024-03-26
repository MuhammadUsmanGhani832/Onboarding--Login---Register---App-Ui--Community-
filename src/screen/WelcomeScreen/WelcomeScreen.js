import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "@rneui/themed";
import BackgroundStyle from "../../components/BackgroundStyle/BackgroundStyle";

const WelcomeScreen = ({navigation}) => {
  return (
    <View>
      <BackgroundStyle />
      <View style={styles.main}>
        <Image
          source={require("../../Assets/welcome image.png")}
          style={styles.img}
        />
        <Text style={styles.title}>Discover Your</Text>
        <Text style={styles.title}>Dream Job here</Text>
        <Text style={styles.text}>
          Explore all the existing job roles based on your interest and study
          major
        </Text>
        <View style={styles.btnContainer}>
          <Button
            buttonStyle={{
              width: 150,
              borderRadius: 5,
              height: 55,
              display: "inline-block",
            }}
            containerStyle={{ margin: 5 }}
            disabledStyle={{
              borderWidth: 2,
              borderColor: "#00F",
            }}
            disabledTitleStyle={{ color: "#00F" }}
            linearGradientProps={null}
            iconContainerStyle={{ background: "#000" }}
            loadingProps={{ animating: true }}
            loadingStyle={{}}
            onPress={() => navigation.navigate("Login")}
            title="Login"
            titleProps={{}}
            titleStyle={{
              marginHorizontal: 5,
              fontSize: 20,
            }}
          />
          <Button
            buttonStyle={{
              width: 150,
              borderRadius: 5,
              height: 55,
              display: "inline-block",
              backgroundColor: "transparent",
            }}
            containerStyle={{ margin: 5 }}
            disabledStyle={{
              borderWidth: 2,
              borderColor: "none",
            }}
            linearGradientProps={null}
            loadingProps={{ animating: true }}
            loadingStyle={{}}
            onPress={() => navigation.navigate("Register")}
            title="Register"
            titleProps={{}}
            titleStyle={{
              marginHorizontal: 5,
              fontSize: 20,
              color: "black",
            }}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {},
  img: {
    width: 350,
    height: 331.43,
    marginTop: 90,
    marginBottom: 20,
  },
  title: {
    color: "#1F41BB",
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
  },
  text: {
    textAlign: "center",
    marginHorizontal: 20,
    marginTop: 15,
    marginBottom: 15,
  },
  btnContainer: {
    flexDirection: "row",
    alignItems:'center',
    justifyContent:'center',
    paddingTop:15
  }
});
export default WelcomeScreen;
