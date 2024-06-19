import { TableColumnsType } from "antd";
import { DataType } from "../../../theme/x-libs/Table";

export const columns: TableColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "title",
    key: "title",
    width: "30%",
  },
  {
    title: "Age",
    dataIndex: "description",
    key: "description",
    width: "20%",
  },
  {
    title: "Address",
    dataIndex: "price",
    key: "price",
    sorter: (a, b) =>
      a.address.toString().length - b.address?.toString().length,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Rating",
    dataIndex: "raitingCount",
    key: "raitingCount",
    width: "30%",
  },
];
