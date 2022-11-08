import { StatusBar } from "react-native";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";



import { useNavigation } from '@react-navigation/native';


export default function Login() {

  const navigation = useNavigation(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const NotIdPw = () =>
    Alert.alert("아이디 및 비밀번호를 입력해주세요","" , [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  const NotPage = () =>
    Alert.alert("아직 페이지가 안만들어졌습니다.","" , [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);


  //만약 email이랑 password가 빈칸이면 nextBtn이 0이다.

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/logo.png")} />

      <StatusBar style="auto" />
      <View
        style={[
          styles.inputView,
          {
            marginBottom: 0,
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
          },
        ]}
      >
        <TextInput
          style={styles.TextInput}
          placeholder="아이디를 입력하세요"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View
        style={[
          styles.inputView,
          { borderTopRightRadius: 0, borderTopLeftRadius: 0 },
        ]}
      >
        <TextInput
          style={styles.TextInput}
          placeholder="비밀번호를 입력해주세요"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={
        email === "" || password === "" ? NotIdPw : () => navigation.push('Main')
      }>
        <Text style={styles.loginText}>Log - in</Text>
      </TouchableOpacity>
      <View style={styles.ForGet_View}>
      <TouchableOpacity onPress={NotPage}>
        <Text style={styles.NewLogin}>회원가입</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={NotPage}>
        <Text style={[styles.NewLogin,{marginLeft:10}]}>비밀번호 찾기</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
    width: 200,
    height: 100,
  },

  inputView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "fff",
    borderRadius: 10,
    borderColor: "#D9D9D9",
    borderWidth: 1,
    width: "70%",
    height: 45,
    marginBottom: 20,
    paddingRight: 15,
  },
  inputImage: {
    width: 30,
    height: 30,
  },

  TextInput: {
    height: 50,
    width: "100%",
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "70%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#7D8EE3",
  },
  loginText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  NewLogin: {
    color: "#7D8EE3",
    fontSize: 15,
    fontWeight: "bold",
  },
  ForGet_View: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    
    
  },


});
