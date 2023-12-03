import { View, Text } from 'react-native'
import React from 'react'

import ParkingForm from '../ButtonCard/ParkingForm';
import { NativeWindStyleSheet } from "nativewind";




NativeWindStyleSheet.setOutput({
  default: "native",
});

const DataTable2 = () => {
  return (
    <View className="">
     <ParkingForm></ParkingForm>
    </View>
  );

}

export default DataTable2