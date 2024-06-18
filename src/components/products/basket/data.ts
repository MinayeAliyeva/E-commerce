import { TableColumnsType } from "antd";
import { DataType } from "../../../theme/x-libs/Table";

  export const columns: TableColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: '20%',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      sorter: (a, b) => a.address.toString().length - b.address?.toString().length,
      sortDirections: ['descend', 'ascend'],
    },
  ];

