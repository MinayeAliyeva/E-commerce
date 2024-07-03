import { TableColumnsType } from "antd";
import { DataType } from "../../../theme/x-libs/Table";
import CompA from "../../StatusTooltip";

export const columns: TableColumnsType<DataType> = [
  {
    title: "Product",
    dataIndex: "productName",
    key: "productName",
    width: "30%",
  },
  {
    title: "Description",
    dataIndex: "description",
    render: (value, record, i) => {
      return <CompA text={value} />;
    },
    key: "description",
    width: "20%",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
    width: "30%",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    sorter: (a, b) =>
      a.address.toString().length - b.address?.toString().length,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Test",
    dataIndex: "test",
    key: "test",
    width: "30%",
    render: (value) => {
      console.log("test", value);
      return value?.age;
    },
  },
];
