import React from "react";
import { Badge, Layout, Menu } from "antd";
import { FaBasketShopping } from "react-icons/fa6";
import { useBasketContext } from "../../contextApi/BasketContext";
import { Link } from "react-router-dom";
const { Header } = Layout;

const HeaderComp = () => {
  const { products } = useBasketContext();
  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu theme="dark" mode="horizontal" style={{ flex: 1, minWidth: 0 }} />
        <Badge count={products?.length ?? 0}>
          <Link to="/basket">
            <FaBasketShopping style={{ color: "red", fontSize: "32px" }} />
          </Link>
        </Badge>
      </Header>
    </Layout>
  );
};

export default HeaderComp;
