import React, { useState } from "react";
import { Pressable, Text, View, TextInput } from "react-native";

const Model = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View className=" flex  items-center justify-center w-full  p-5  "> 
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
  );
};

export default Model;

