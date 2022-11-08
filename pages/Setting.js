import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Alert,
  Button,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import "../i18n";
import { useTranslation } from "react-i18next";
import {Linking} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Setting() {
  const navigation = useNavigation(); 

  const { t, i18n } = useTranslation();
  const changelanguageToKo = () => i18n.changeLanguage("ko");
  const changelanguageToEn = () => i18n.changeLanguage("en");

  const change_Alert = () =>
    Alert.alert(
      i18n.language === "ko" ? "영어"+"로 변경하시겠습니까?": "Do you want to change to Korean?","",
      [
        // 버튼 배열
        {
          text: i18n.language === "ko" ? "아니요" : "No",
          onPress: () => console.log("Cancel Pressed"),
        },
        {
          text: i18n.language === "ko" ? "예" : "yes",
          onPress: () => {
            if (i18n.language === "ko") {
              changelanguageToEn();
              console.log("change to English");
            } else {
              changelanguageToKo();
              console.log("change to Korean");
            }
          },
        }, 
      ],
      { cancelable: false }
    );


    const Logout_Alert = () =>
    Alert.alert(
      i18n.language === "ko" ? "정말 로그아웃을 하시겠습니까?":"Are you sure you want to log out?","",
      [
        // 버튼 배열
        {
          text: i18n.language === "ko" ? "아니요" : "No",
          onPress: () => console.log("Cancel Pressed"),
        },
        {
          text: i18n.language === "ko" ? "예" : "yes",
          onPress: () => {
            console.log("Logout");
           navigation.popToTop()
          },
        }, 
      ],
      { cancelable: false }
    );

  const trash_Alert = () =>
    Alert.alert(
      "뭘 기대해","",
      [
        // 버튼 배열
        {
          text: "ㅁ..미안",
          onPress: () => console.log("Cancel Pressed"),
        },
      ],
      { cancelable: false }
    );


  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.main_view}>
        <StatusBar style="auto" />
        <View style={styles.SettingTitle}>
          <Text style={styles.SettingTitleText}>{t("setting")}</Text>
        </View>

        <View style={[styles.SettingSemiTitle, { marginBottom: 20 }]}>
          <TouchableOpacity style={[{ flexDirection: "row" }]} onPress={() => {
                trash_Alert()
              }}>
            <Image
              style={styles.SettingIcon}
              source={require("../assets/alert_icon.png")}
            />
            <Text style={styles.SettingSemiTitleText}>{t("set_alram")}</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.SettingSemiTitle, { height: 120 }]}>
          <View style={[{ flexDirection: "column" }]}>
            <TouchableOpacity
              style={[{ flexDirection: "row" }]}
              onPress={() => {
                change_Alert();
              }}
            >
              <Image
                style={styles.SettingIcon}
                source={require("../assets/language_icon.png")}
              />
              <Text style={styles.SettingSemiTitleText}>
                {t("set_language")}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[{ flexDirection: "column" }]}>
            <TouchableOpacity style={[{ flexDirection: "row" }]}
            onPress={() => {
              trash_Alert()
            }}
            >
              <Image
                style={styles.SettingIcon}
                source={require("../assets/screen_icon.png")}
                
              />
              <Text style={styles.SettingSemiTitleText}>{t("set_screen")}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.SettingSemiTitle, { height: 120 }]}>
          <View style={[{ flexDirection: "column" }]}>
            <TouchableOpacity
              style={[{ flexDirection: "row" }]}
              onPress={() => {
              Linking.openURL(`mailto:haeseong050321@gmail.com`)
              }}>
              <Image
                style={styles.SettingIcon}
                source={require("../assets/bug_icon.png")}
              />
              <Text style={styles.SettingSemiTitleText}>
                {t("bug_report")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        
        <View style={[styles.SettingSemiTitle, { height: 120 }]}>
          <View style={[{ flexDirection: "column" }]}>
            <TouchableOpacity
              style={[{ flexDirection: "row" }]}
              onPress={() => {
                trash_Alert()
              }}
              >
              <Image
                style={styles.SettingIcon}
                source={require("../assets/fix_icon.png")}
              />
              <Text style={styles.SettingSemiTitleText}>
                {t("fix_list")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>


        <View style={[styles.SettingSemiTitle, { height: 120 }]}>
          <View style={[{ flexDirection: "column" }]}>
            <TouchableOpacity
              style={[{ flexDirection: "row" }]}
              onPress={() => {
                Logout_Alert()
              }}
              >
              <Image
                style={styles.SettingIcon}
                source={require("../assets/logout.png")}
              />
              <Text style={styles.SettingSemiTitleText}>
                {t("logout")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  /*container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 90,
    marginLeft: 40,
  },*/
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",


   
  },
    main_view: {
    marginHorizontal: 20,
    marginLeft: 40,
    marginTop: 60,
   
  },
  SettingTitle: {
    width: 300,
    height: 50,

    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginBottom: 50,
  },
  SettingTitleText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  SettingSemiTitle: {
    width: 300,
    height: 50,

    alignItems: "flex-start",
    justifyContent: "space-around",
    borderBottomWidth: 2,
    borderBottomColor: "#D9D9D9",
  },

  SettingSemiTitleText: {
    fontSize: 17,
    fontWeight: "500",
  },
  SettingIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});
