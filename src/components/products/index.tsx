import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { productsApiUrl } from "../../api/apiKeys";
import Product from "./product";
import { Iproduct } from "./modules";

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
      {t("HOME")}
      {products?.map((product) => (
        <Product key={product?.id} item={product} />
      ))}
    </>
  );
};

export default Products;
