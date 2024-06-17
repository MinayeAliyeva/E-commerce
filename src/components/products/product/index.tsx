import React from "react";
import { Iproduct } from "../modules";
import { Button, Card, Divider, Typography } from "antd";
import { useBasketContext } from "../../../contextApi/BasketContext";
interface IProps {
  item: Iproduct;
}

const Product: React.FC<IProps> = ({ item }) => {
  // console.log("item", item);
  const { setCount } = useBasketContext();
  console.log("setCount", setCount);

  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src={item?.image} />}
    >
      <Typography.Text>{item?.title}</Typography.Text>
      <Divider />
      <Typography.Text>{item?.price}</Typography.Text>
      <Divider />
      <Button type="primary" onClick={() => console.log("product id", item.id)}>
        Add to card
      </Button>
      <Button type="primary" onClick={() => setCount((count) => count + 1)}>
        +
      </Button>
      <Button type="primary" onClick={() => setCount((count) => count - 1)}>
        -
      </Button>
    </Card>
  );
};

export default Product;

//translate
//
