import XTable from "../../../theme/x-libs/Table";
import { columns } from "./data";
import { useBasketContext } from "../../../contextApi/BasketContext";
import { map } from "lodash";

const Basket = () => {
  const { products } = useBasketContext();

  const tableData = map(products, (product) => ({
    title: product?.title,
    description: product?.description,
    raitingCount: product?.rating?.count,
    price: product?.price,
  }));
  return (
    <>
      <XTable data={tableData} columns={columns} />
    </>
  );
};

export default Basket;
