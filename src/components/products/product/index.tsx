import React, { useState, useEffect } from "react";
import { Card, Col, Row, Button, Divider, notification } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { Iproduct } from "../modules";
import { useBasketContext } from "../../../contextApi/BasketContext";

const Product: React.FC<{ item: Iproduct }> = ({ item }) => {
  const { addToCard, removeProduct, products } = useBasketContext();
  console.log("products", products);

  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const productInCart = products?.some((product) => product?.id === item?.id);
    setIsInCart(productInCart);
  }, [products, item?.id]);

  const handleAddToCart = () => {
    addToCard(item);
    setIsInCart(true);
    notification.success({ message: `${item.id} id-li product sepetde` });
  };

  const handleRemoveFromCart = () => {
    removeProduct(item.id);
    setIsInCart(false);
    notification.success({ message: `${item.id} id-li product sepetden silindi` });
  };

  return (
    <Col md={8}>
      <Card
        hoverable
        style={{ padding: 10, width: "250px" }}
        cover={
          <img height="320px" width="280px" alt="example" src={item?.image} />
        }
      >
        <br />
        <Divider orientation="center">Price</Divider>
        <p
          style={{
            lineHeight: "28px",
            fontWeight: "lighter",
            fontSize: "46px",
            color: "#2ecc71",
            textAlign: "center",
          }}
        >
          {item.price} TL
        </p>
        <Row gutter={[10, 10]} className="add-cart-btn-row">
          <Col>
            <Button
              title="Ürünü sepete ekle"
              onClick={handleAddToCart}
              type="primary"
              disabled={isInCart}
            >
              Add to card
            </Button>
          </Col>
          <Col>
            <Button
              title="Ürünü sepetten çıkar"
              onClick={handleRemoveFromCart}
              type="primary"
              danger
              disabled={!isInCart}
            >
              <DeleteOutlined />
            </Button>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default Product;
