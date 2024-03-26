import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BackgroundStyle from "../../components/BackgroundStyle/BackgroundStyle";
import InputComponent from "../../components/Input/Input";
import { Button } from "@rneui/base";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";

const Login = ({navigation}) => {
  return (
    <View style={{ flex: 1 }}>
      <BackgroundStyle />
      <View style={styles.container}>
        <Text style={styles.title}>Login here</Text>
        <Text style={styles.text}>Welcome back you’ve</Text>
        <Text style={styles.text}>been missed!</Text>
        <View style={styles.spacer}></View>
        <InputComponent placeholderText={"Email"} />
        <InputComponent placeholderText={"password"} />
        <TouchableOpacity
         onPress={() => Alert.alert(
              "404",
              "This page not available yet",
              [{ text: "OK", onPress: () => console.log("OK Pressed") }],
              { cancelable: false }
            )
          }
         style={{ alignSelf: "flex-end", marginRight: 10 }}
        >
          <Text
            style={{ color: "#1F41BB", fontWeight: "bold", marginBottom: 20 }}
          >
            Forgot your password?
          </Text>
        </TouchableOpacity>
        <Button
          buttonStyle={{ height: 55 }}
          containerStyle={{
            margin: 5,
            width: "95%",
            borderRadius: 5,
            shadowColor: "#00F",
            shadowOffset: {
              width: 0,
              height: 2, 
            },
            shadowOpacity: 1,
            shadowRadius: 10, 
            elevation: 10,
          }}
          disabledStyle={{
            borderWidth: 2,
            borderColor: "#00F",
          }}
          disabledTitleStyle={{ color: "#00F" }}
          linearGradientProps={null}
          iconContainerStyle={{ background: "#000" }}
          loadingProps={{ animating: true }}
          loadingStyle={{}}
          onPress={() => alert(
            "request send to the server"
          )}
          title="Login"
          titleProps={{}}
          titleStyle={{ marginHorizontal: 5 }}
        />
        <TouchableOpacity
         onPress={()=>navigation.navigate('Register')}
        >
          <Text style={{ marginTop: 10, fontSize: 14, fontWeight: 500 }}>
            Create new account
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: "#1F41BB",
            fontSize: 16,
            fontWeight: 700,
            marginTop: 50,
            marginBottom:10
          }}
        >
          Or continue with
        </Text>
        <View style={styles.iconContainer}>
          <View style={styles.iconBox}>
            <FontAwesome name="google" size={24} color="black" />
          </View>
          <View style={styles.iconBox}>
            <FontAwesome5 name="facebook" size={24} color="black" />
          </View>
          <View style={styles.iconBox}>
            <FontAwesome6 name="apple" size={24} color="black" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    alignItems: "center",
  },
  title: {
    marginTop: 70,
    fontSize: 30,
    fontWeight: "bold",
    color: "#1F41BB",
    marginBottom: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
  },
  spacer: {
    height: 70,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconBox: {
    backgroundColor: "#d3d3d3",
    padding:7,
    width:50,
    marginHorizontal:5,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5
  },
});

export default Login;
