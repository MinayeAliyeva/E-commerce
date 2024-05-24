import React from "react";
// import productStyle from "./productStyle.module.scss";
import { Iproduct } from "../modules";
import { Title, Image } from "../styled-components";

//generic type NEVER USE IT COMMON COMPONENTS ELSE , DOES NOT USE THEM

interface IProps {
  item: Iproduct;
}
interface IState {}

const Product: React.FC<IProps> = ({ item }) => {
  console.log("item", item);

  return (
    <div className="card" style={{ width: "18rem" }}>
      {/* <img
        src={"../kmis"}
        className={`card-img-top img-thumbnail ${productStyle.img}`}
        alt="..."
      /> */}
      <Image src={item?.image} />

      <div className="card-body">
        <Title>{item?.title}</Title>
        <h5
        // className={`card-title ${productStyle.h5}`}
        // onClick={() => navigate(`product/${product.id}`)}
        >
          {" "}
          {/* {product.title.substring(0, 20)}{" "} */}
        </h5>
        {/* <p className="card-text">{product?.description.substring(0, 80)}</p> */}
        {/* <button
          className={`${findProduct ? "btn btn-danger" : "btn btn-primary"}`}
          onClick={() => addToCard(product, findProduct)}
        > */}
        {/* {findProduct ? t("Remove Basket") : t("Add to basket")} */}
        {/* </button> */}
        {/* <button>ok</button> */}
      </div>
    </div>
  );
};

export default Product;
