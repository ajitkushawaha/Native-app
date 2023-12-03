import { Pressable, Text, View, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { NativeWindStyleSheet } from "nativewind";
import Icon from "react-native-vector-icons/MaterialIcons";


NativeWindStyleSheet.setOutput({
  default: "native",
});

const Sidebar = ({ setCurrentScreen }) => {

  return (
    <ScrollView className="p-2 ">
      <View className="flex flex-col gap-4 ">
        <TouchableOpacity onPress={() => setCurrentScreen("MainTable")}
          className="flex-row  items-center justify-start p-2  bg-white shadow-md rounded">
          <Icon name="dashboard" size={20} color="black" />
          <Text className=" px-2">MainTable</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentScreen("DataTable")}
          className="flex-row  items-center justify-start p-2  bg-white shadow-md">
          <Icon name="dashboard" size={20} color="black" />
          <Text className=" px-2">DataTable</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentScreen("DataTable2")}
          className="flex-row  items-center justify-start p-2  bg-white  shadow-md">
          <Icon name="dashboard" size={20} color="black" />
          <Text className=" px-2">DataTable2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentScreen("DataTable3")}
          className="flex-row  items-center justify-start p-2  bg-white shadow-md">
          <Icon name="dashboard" size={20} color="black" />
          <Text className=" px-2">DataTable3</Text>
        </TouchableOpacity>
       
      </View>
    </ScrollView>
  );
};

export default Sidebar;
