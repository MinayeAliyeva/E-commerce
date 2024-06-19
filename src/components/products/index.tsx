import { useEffect, useState } from "react";
import axios from "axios";
import { productsApiUrl } from "../../api/apiKeys";
import Product from "./product";
import { Iproduct } from "./modules";
import { Col, Row } from "antd";
import { map } from "lodash";

type IState = Iproduct[];

const Products = () => {
  const [products, setProducts] = useState<IState>([]);
  // const { t } = useTranslation();

  useEffect(() => {
    axios.get(productsApiUrl).then((res) => {
      setProducts(res?.data);
    });
  }, []);

  return (
    <>
      <Row gutter={[24, 56]}>
        {map(products, (product) => (
          <Col key={product?.id} span={6}>
            <Product key={product?.id} item={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Products;
