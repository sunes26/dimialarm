import React from "react";
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
import { useNavigation } from "@react-navigation/native";

export default function Main() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.title_View}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Setting");
          }}
        >
          <Image
            style={styles.setting_Image}
            source={require("../assets/setting_icon.png")}
          />
        </TouchableOpacity>
      </View>

      {/* 전체 일정 페이지*/}
      <View style={styles.text_box}>
        <View style={styles.text_box_title}>
          <View style= {styles.text_box_list}>
            <Text style={styles.title_text}>전체일정</Text>
            <Image
              style={styles.next_Icon}
              source={require("../assets/next_icon.png")}
            />
          </View>
        </View>

        <View style={styles.text_box_title}>
          <Text style={styles.box_text}>9/29 중간고사</Text>
        </View>

        <View style={styles.text_box_title}>
          <Text style={styles.box_text}>10/8 입학설명회</Text>
        </View>
      </View>

      {/* 반 일정 페이지*/}
      <View style={styles.text_box}>
        <View style={styles.text_box_title}>
          <Text style={styles.title_text}>반 일정</Text>
        </View>

        <View style={styles.text_box_title}>
          <Text style={styles.box_text}>10/3 반 회식</Text>
        </View>

        <View style={styles.text_box_title}>
          <Text style={styles.box_text}>10/15 반 대항전</Text>
        </View>
      </View>

      {/* 개인 일정 페이지*/}
      <View style={styles.text_box}>
        <View style={styles.text_box_title}>
          <Text style={styles.title_text}>개인 일정</Text>
        </View>

        <View style={styles.text_box_title}>
          <Text style={styles.box_text}>9/14 모의투자 대회</Text>
        </View>

        <View style={styles.text_box_title}>
          <Text style={styles.box_text}>10/15 토익 시험</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 70,
  },
  title_View: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
  logo: {
    width: 260,
    height: 60,
    marginLeft: 38,
  },
  setting_Image: {
    marginRight: 40,
  },
  text_box: {
    width: 300,
    height: 210,
    borderRadius: 20,
    backgroundColor: "#CACACA",
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  text_box_title: {
    width: "100%",
    height: "30%",
    justifyContent: "center",
  },
  title_text: {
    fontSize: 22,
    fontWeight: "900",
  },
  box_text: {
    fontSize: 18,
    fontWeight: "600",
  },
  next_Icon:{
  
  },
  text_box_list:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }
});
