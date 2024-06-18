
import XTable, { DataType } from "../../../theme/x-libs/Table";
import { columns } from "./data";


// data ni basketcontext api dan gotirib xtableye gonderirsen
// data ts faylivi ona gore ayarlayirsan ex: dataIndex: 'age' edirsen dataIndex: 'description'
const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Joe Black",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Jim Green",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
];

const Basket = () => {
  return (
    <>
      <XTable data={data} columns={columns} />
    </>
  );
};

export default Basket;
