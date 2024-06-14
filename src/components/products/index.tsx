import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { productsApiUrl } from "../../api/apiKeys";
import Product from "./product";
import { Iproduct } from "./modules";
import { Col, Row } from "antd";

type IState = Iproduct[];

const Products = () => {
  const [products, setProducts] = useState<IState>([]);
  const { t } = useTranslation();

  useEffect(() => {
    axios.get(productsApiUrl).then((res) => {
      setProducts(res?.data);
    });
  }, []);
  //   console.log("products", products);

  return (
    <>
      <Row gutter={[24, 56]}>
        {products?.map((product) => (
          <Col span={6} >
            <Product key={product?.id} item={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Products;
