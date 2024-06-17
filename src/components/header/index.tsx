import React from "react";
import { Badge, Button, Divider, Layout, Menu } from "antd";
import { FaBasketShopping } from "react-icons/fa6";
import { useBasketContext } from "../../contextApi/BasketContext";
const { Header } = Layout;

const HeaderComp = () => {
  const { count, setCount } = useBasketContext();
  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu theme="dark" mode="horizontal" style={{ flex: 1, minWidth: 0 }} />

        <Badge count={count}>
          <FaBasketShopping style={{ color: "red", fontSize: "32px" }} />
        </Badge>
        {/* <Divider /> */}
        <Button type="primary" onClick={() => setCount((count) => count + 1)}>
          +
        </Button>
        <Button type="primary" onClick={() => setCount((count) => count - 1)}>
          -
        </Button>
      </Header>
    </Layout>
  );
};

export default HeaderComp;
