import XTable from "../../../theme/x-libs/Table";
import { useBasketContext } from "../../../contextApi/BasketContext";
import { map, reduce } from "lodash";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Stack } from "@mui/material";

const Basket = () => {
  const { products, removeProduct } = useBasketContext();
  const tableData = map(products, (product) => ({
    image: product?.image,
    productName: product?.title,
    description: product?.description,
    price: product?.price,
    category: product?.category,
    test: {
      age: 20,
    },
    id: product?.id,
  }));

  const columns = [
    {
      title: "Product",
      key: "product",
      render: (text: any, record: any) => {
        console.log("record", record);
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={record?.image}
              alt={record?.productName}
              style={{ width: 50, height: 50, marginRight: 10 }}
            />
            <span>{record?.productName}</span>
            <Stack direction="row" spacing={1}>
              <IconButton
                aria-label="delete"
                onClick={() => removeProduct(record?.id)}
              >
                <DeleteIcon />
              </IconButton>
            </Stack>
          </div>
        );
      },
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
  ];
  const totalPrice = reduce(products, (sum, product) => sum + product.price, 0);

  return (
    <>
      <XTable data={tableData} columns={columns} />
      Total price:{totalPrice}
    </>
  );
};

export default Basket;
