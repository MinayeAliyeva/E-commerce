import XTable from "../../../theme/x-libs/Table";

import { useBasketContext } from "../../../contextApi/BasketContext";
import { map } from "lodash";
import { columns } from "./data";

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
      {/* <Test text="This is a long text that will be truncated. Click to see more." /> */}
    </>
  );
};

export default Basket;
