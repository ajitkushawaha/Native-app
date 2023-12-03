import { View } from 'react-native'
import React from 'react'
import TextField from './TextField'
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const ParkingForm = () => {
  return (
    <View className=" flex items-center justify-center ">
      <View className="p-4 sm:w-full bg-white">
        <View className="flex-row  items-center justify-center  ">
          <TextField name="User Name" title="user name" />
          <TextField name="Password" title="password" />
        </View>
        <View className="flex-row  items-center justify-center ">
          <TextField name="Email" title="email" />
          <TextField name="Contact Number" title="contact Number" />
        </View>
        <View className="flex-row  items-center justify-center ">
          <TextField name="User Name" title="user name" />
          <TextField name="User Name" title="user name" />
        </View>
        <View className="flex-row  items-center justify-center ">
          <TextField name="User Name" title="user name" />
          <TextField name="User Name" title="user name" />
        </View>
      </View>
      
    </View>
  )
}
export default ParkingForm
