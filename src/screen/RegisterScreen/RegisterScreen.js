import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BackgroundStyle from '../../components/BackgroundStyle/BackgroundStyle';
import InputBox from '../../components/Input/Input'
import { Button } from '@rneui/base';
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";

const RegisterScreen = ({navigation}) => {
  return (
    <View>
      <BackgroundStyle />
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.text}>
          Create an account so you can explore all the
        </Text>
        <Text style={styles.text}>existing jobs</Text>
        <View style={styles.spacer}></View>

        <InputBox placeholderText={"Email"} />
        <InputBox placeholderText={"Password"} />
        <InputBox placeholderText={"Confirm Password"} />

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
          onPress={() => alert("request send to the server")}
          title="Sign Up"
          titleProps={{}}
          titleStyle={{ marginHorizontal: 5 }}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={{ marginTop: 10, fontSize: 14, fontWeight: 500 }}>
            Already have an account
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: "#1F41BB",
            fontSize: 16,
            fontWeight: 700,
            marginTop: 50,
            marginBottom: 10,
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
}

const styles = StyleSheet.create({
  title: {
    marginTop: 70,
    fontSize: 30,
    fontWeight: "bold",
    color: "#1F41BB",
    marginBottom: 15,
  },
  spacer: {
    height: 70,
  },
  text: {},

  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconBox: {
    backgroundColor: "#d3d3d3",
    padding: 7,
    width: 50,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
});
export default RegisterScreen