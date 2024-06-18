import type { TableProps } from "antd";
type ColumnsType<T> = TableProps<T>["columns"];

export const columns: ColumnsType<any> = [
  {
    title: "Name",
    dataIndex: "name",
    width: "20%",
    filters: [
      {
        text: "name",
        value: "name",
      },
    ],
    onFilter: (value, record) => record.name.indexOf(value as string) === 0,
  },
  {
    title: "Description",
    dataIndex: "description",
    width: "20%",
  },
  {
    title: "Age",
    dataIndex: "age",
    render: (value, record, index) => {
      // console.log("value, record, index", { value, record, index });
      return record?.info?.age;
    },
    width: "20%",
  },
];

//column render
