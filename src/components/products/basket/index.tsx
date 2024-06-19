import XTable from "../../../theme/x-libs/Table";
import { columns } from "./data";
import { useBasketContext } from "../../../contextApi/BasketContext";
import { map } from "lodash";
import Test from "../../Tests/Test";

const Basket = () => {
  const { products } = useBasketContext();

  const tableData = map(products, (product) => ({
    productName: product?.title,
    description: product?.description,
    price: product?.price,
    category: product?.category,
    test: {
      age: 20,
    },
  }));
  return (
    <>
      <XTable data={tableData} columns={columns} />
      <div>
        <Test text="This is a long text that will be truncated. Click to see more." />
      </div>
    </>
  );
};

export default Basket;
