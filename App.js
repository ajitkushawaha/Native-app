import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Login from "./Src/Page/Login";
import Home from "./Src/Page/Home";
import DataTable from "./Src/Components/DataTable/DataTable";
import DataTable2 from "./Src/Components/DataTable/DataTable2";
import MainTable from "./Src/Components/DataTable/MainTable";

const Stack = createNativeStackNavigator();

export default function App() {
  const renderHeaderLeft = ({ navigation }) => (
    <Pressable
      style={{ marginLeft: 10 }}
      onPress={() => navigation.navigate("Home")}
    >
      <Icon name="home" size={30} color="#fff" />
    </Pressable>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "My home",
            headerStyle: {
              backgroundColor: "teal",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerLeft: renderHeaderLeft,
          }}
        />
        <Stack.Screen name="MainTable" component={MainTable} />
        <Stack.Screen name="DataTable" component={DataTable} />
        <Stack.Screen name="DataTable2" component={DataTable2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
