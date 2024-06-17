import React from "react";
import { Card, Col, Row, Button, Divider, notification } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { Iproduct } from "../modules";
import { useBasketContext } from "../../../contextApi/BasketContext";
// import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
const Product: React.FC<{ item: Iproduct }> = ({ item }) => {
  // const addCart = (item) => {
  //   props.add_cart(item);
  //   openNotification();
  // };
  const { addToCard, removeProduct } = useBasketContext();
  // console.log("context", context);

  // const openNotification = () => {
  //   notification.open({
  //     style: {
  //       color: "#1DA57A",
  //       fontWeight: "bold",
  //       opacity: 0.9,
  //       cursor: "pointer",
  //     },
  //     placement: "bottomRight",
  //     message: "Item Added",
  //     // description: `${props.itemName} is added to your cart.`,
  //     duration: 4,
  //   });
  // };

  return (
    <Col md={8}>
      <Card
        hoverable
        style={{ padding: 10, width: "250px" }}
        cover={
          <img height="320px" width="280px" alt="example" src={item?.image} />
        }
      >
        {/* <Card.Meta title={<h2>Name</h2>} description={item.description} /> */}
        <br></br>
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
          Price
        </p>
        <Row gutter={[10, 10]} className="add-cart-btn-row">
          <Col>
            <Button
              title="Add item to cart"
              onClick={() => {
                addToCard(item);
              }}
              type="primary"
            >
              Add to cart
            </Button>
          </Col>
          <Col>
            <Button
              title="Remove item from cart"
              onClick={() => {
                removeProduct(item?.id);
                console.log("item?.id", item?.id);
              }}
              type="primary"
              danger
            >
              <DeleteOutlined />
            </Button>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

// const mapStateToProps = (state) => ({
//   cart: state.cart,
//   url_key: state.url_key,
// });

// const mapDispatchToProps = (dispatch) => ({
//   add_cart: (item) => dispatch({ type: "ADD_PRODUCT", payload: item }),
//   remove_single: (itemId) =>
//     dispatch({ type: "REMOVE_SINGLE", payload: itemId }),
//   setUrl: (urlKey) => dispatch({ type: "SET_URL", payload: urlKey }),
// });

export default Product;
