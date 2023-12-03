import { View, Text, ScrollView, Pressable, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Layout/Dashboard/Sidebar";
import { NativeWindStyleSheet } from "nativewind";
import Icon from "react-native-vector-icons/MaterialIcons";
import DataTable2 from "../Components/DataTable/DataTable2";
import DataTable from "../Components/DataTable/DataTable";
import MainTable from "../Components/DataTable/MainTable";
const { width, screenWidth } = Dimensions.get("window");

NativeWindStyleSheet.setOutput({
  default: "native",
});

const Home = () => {
  const [isShow, setShow] = React.useState(screenWidth >= 640);
  const [currentScreen, setCurrentScreen] = React.useState("");

  const handleClick = () => {
    setShow(!isShow);
    console.log("clicik")
  };

  useEffect(() => {
    const handleScreenSize = () => {
      setShow(window.innerWidth >= 640);
    };
    Dimensions.addEventListener("change", handleScreenSize);

    return () => {
      Dimensions.removeEventListener("change", handleScreenSize);
    };
  }, []);

  function renderScreen() {
    switch (currentScreen) {
      case "DataTable":
        return <DataTable />;
      case "DataTable2":
        return <DataTable2 />;
      case "MainTable":
        return <MainTable />;
    }
  }

  return (
    <>

      <View className={` w-full bg-white`}>
        <Pressable onPress={handleClick} className="p-2 ">
          <Icon name="dashboard" size={30} color="black" />
        </Pressable>
        <View className={`flex flex-row gap-2`}>
          {isShow && <ScrollView className={` basis-1/6  shadow-md bg-slate-50`}>
            <Sidebar setCurrentScreen={setCurrentScreen} />

          </ScrollView>}
          <View
            className={`${isShow ? "basis-5/6" : "w-full" 
              } m-auto  h-screen p-4 shadow-md bg-gray-50 `}
          >
            {renderScreen()}
          </View>
        </View>
      </View>
    </>
  );
};

export default Home;



