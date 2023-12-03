import React, { useState } from "react";
import { Alert, Modal, Text, TextInput, Pressable, View } from "react-native";
import { data } from "../DataTable/DumyData";

const MyCard = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [datas, setDatas] = React.useState(data);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Modal
        className="w-1/3 h-screen bg-white  "
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View className="flex items-center justify-center h-screen relative">
          <View className=" flex w-1/3 bg-white items-center justify-center p-5  ">
            <Pressable
              className="absolute top-2 right-2"
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text className="to-black text-2xl">X</Text>
            </Pressable>
            <View className="  flex flex-col items-center justify-center p-4  gap-4 ">
              <TextInput
                className=" block w-full text-base  border border-cyan-700 py-2 shadow-sm ring-1 ring-inset ring-gray-300  text-gray-700 sm:text-sm sm:leading-6 pl-3"
                value={username}
                placeholder={"Username"}
                onChangeText={(text) => setUsername(text)}
                autoCapitalize={"none"}
              />
              <TextInput
                className=" block w-full text-base  border border-cyan-700 py-2 shadow-sm ring-1 ring-inset ring-gray-300  text-gray-700 sm:text-sm sm:leading-6 pl-3"
                value={username}
                placeholder={"Username"}
                onChangeText={(text) => setUsername(text)}
                autoCapitalize={"none"}
              />
              <TextInput
                className=" block w-full text-base  border border-cyan-700 py-2 shadow-sm ring-1 ring-inset ring-gray-300  text-gray-700 sm:text-sm sm:leading-6 pl-3"
                value={username}
                placeholder={"Username"}
                onChangeText={(text) => setUsername(text)}
                autoCapitalize={"none"}
              />
              <TextInput
                className=" block w-full text-base  border border-cyan-700 py-2 shadow-sm ring-1 ring-inset ring-gray-300  text-gray-700 sm:text-sm sm:leading-6 pl-3"
                value={username}
                placeholder={"Username"}
                onChangeText={(text) => setUsername(text)}
                autoCapitalize={"none"}
              />
              <TextInput
                className="block w-full text-base  border border-cyan-700 py-2 shadow-sm ring-1 ring-inset ring-gray-300  text-gray-700 sm:text-sm sm:leading-6 pl-3"
                value={password}
                placeholder={"Password"}
                onChangeText={(text) => setPassword(text)}
              />

              <Pressable
                type="submit"
                className="flex w-full justify-center text-base bg-teal-500      py-2 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6  "
              >
                <Text className="text-center text-white uppercase">Submit</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <View className="flex-row  flex-wrap items-start ">
        {datas.map((items) => {
          return (
            <View
              key={items.id}
              className={`w-1/5 p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}
            >
              <Text className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {items.title}
              </Text>
              <View className="flex flex-row justify-between"></View>
              <Text>{items.actors}</Text>
              <Pressable onPress={() => setModalVisible(true)}>
                <Text>Show Modal</Text>
              </Pressable>
            </View>
          );
        })}
      </View>
    </>
  );
};

export default MyCard;
