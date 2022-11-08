import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
      translation: {
        "setting": "Setting",
        "set_alram": "Notification interval setting",
        "set_language": "Language setting",
        "set_screen": "Screen mode setting",
        "bug_report": "Bug report",
        "fix_list": "Last modified list",
        "logout": "Logout",
        "profile": "Profile",
      }
    },
    ko: {
      translation: {
        "setting": "설정",
        "set_alram": "알림 주기 설정",
        "set_language": "언어 설정",
        "set_screen": "화면 모드 설정",
        "bug_report": "버그 신고",
        "fix_list": "최근 수정 목록",
        "logout": "로그아웃",
        "profile": "프로필 수정",
       

      }

    }
  };


  i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
  });
export default i18n;