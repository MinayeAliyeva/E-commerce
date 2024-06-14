import React from "react";
import { Iproduct } from "../modules";
import { Button, Card, Divider, List, Typography } from "antd";

interface IProps {
  item: Iproduct;
}

// interface IState {}

const Product: React.FC<IProps> = ({ item }) => {
  // console.log("item", item);

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
    </Card>
  );
};

export default Product;

//translate
//
