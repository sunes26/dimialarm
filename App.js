import * as React from "react";
import { Button, View, Text } from "react-native";
import Login from "./pages/Login";
import Setting from "./pages/Setting";
import Main from "./pages/Main";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function LoginScreen() {
  return <Login></Login>;

}
function MainScreen() {
  return <Main></Main>;
}

function SettingScreen() {
  return <Setting></Setting>;
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{
            headerShown: false,
            gestureEnabled: false
          }}
        />
        <Stack.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            headerShown: false,
            

          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
