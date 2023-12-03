import { View } from "react-native";
import React from "react";
import { NativeWindStyleSheet } from "nativewind";
import { columns, data } from "./DumyData";
import DataTable from "react-data-table-component";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const customStyles = {
  headCells: {
    style: {
      fontSize: "1rem",
    },
  },
  cells: {
    style: {
      fontSize: "0.9rem",
    },
  },
};
const MainTable = () => {
  return (
    <View className={` p-4 rounded-[10px] `}>
      <DataTable
        columns={columns}
        data={data}
        fixedHeader={true}
        highlightOnHover
        customStyles={customStyles}
        pagination
      />
    </View>
  );
};

export default MainTable;

// defaultSortField="id"
// defaultSortAsc={true}
// pagination
// highlightOnHover
// dense
