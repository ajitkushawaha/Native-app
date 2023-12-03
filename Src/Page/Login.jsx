import React from "react";
import { Text, View, TextInput, Pressable } from "react-native";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function Login({ navigation }) {
  return (
    <View className="flex flex-col h-screen items-center justify-center  ">
      <View className="p-10 md:mx-auto shadow-md   ">
        <View className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Text className=" text-center  text-2xl font-bold  tracking-tight text-gray-600 capitalize">
            Sign in to your account
          </Text>
        </View>

        <View className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <View className="space-y-6">
            <View>
              <Text
                className="block text-base p-1 font-medium leading-6 text-gray-900"
              >
                Email 
              </Text>
              <TextInput
                className="block text-base w-full border border-cyan-700 py-2 shadow-sm ring-1 ring-inset ring-gray-300  text-gray-700 sm:text-sm sm:leading-6 pl-3"
                placeholder=" Enter Email"
                style={{ outline: "none" }}
              />
            </View>

            <View>
              <View>
                <Text
                  secureTextEntry
                  className="block text-base p-1 font-medium leading-6 text-gray-900 text-left"
                >
                  Password
                </Text>
              </View>
              <TextInput
                className="block text-base w-full border border-cyan-700 py-2 shadow-sm ring-1 ring-inset ring-gray-300  text-gray-700 sm:text-sm sm:leading-6 pl-3"
                placeholder=" Enter Password"
                style={{ outline: "none" }}
              />
            </View>

            <Pressable
              type="submit"
              onPress={() => navigation.navigate("Home")}
              className="flex w-full justify-center text-base bg-teal-500  py-2 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6  "
            >
              <Text className="text-center text-white uppercase">Login</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
