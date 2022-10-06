import React from "react";
import "./productList.css";
import { Product } from "../product/Product";
import { products } from "../../data";

export const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create And inspire</h1>
        <p className="pl-desc">
          You can find some personal and school proyects that I developed.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) =>(
          <Product key={item.id} img={item.img} link={item.link}/>
        ))} 
      </div>
    </div>
  );
};
