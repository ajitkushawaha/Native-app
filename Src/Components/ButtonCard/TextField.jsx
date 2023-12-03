import {  Text, View, TextInput } from 'react-native'
import React from 'react'
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function Textfields({...props}) {
    return (
        <View className="p-2">
            <Text>{props.name}</Text>
            <TextInput
                className={`py-2 bg-white w-full border border-teal-500 rounded mb-4 p-2`}
                placeholder={props.title}
            />
        </View>
    )
}
