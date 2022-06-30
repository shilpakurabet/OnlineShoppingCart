/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
const Productlist = () => {
  const [product, updateProduct] = useState([]);
  const getProduct = () => {
    axios.get("http://localhost:3000/product").then((response) => {
      updateProduct(response.data.reverse());
    });
  };
  useEffect(() => {
    getProduct();
  }, []);

  const [message, updateMsg] = useState("");
  const addtocart = (productData) => {
    axios.post("http://localhost:3000/cart", productData).then(() => {
      updateMsg(productData.name + " Added in Your Cart !");
    });
  };

  return (
    <div className="container mt-4">
      <div className="row text-center">
        <p className="col-lg-12 text-center text-danger">{message}</p>
        {product.map((pro, index) => {
          return (
            <div
              className="cards col-lg-3 col-12 col-sm-6 col-md-4 mb-4"
              key={index}>
              <div className="bg-light p-4 rounded ">
                <h5 className="text-primary"> {pro.name} </h5>
                <img
                  src={pro.photo}
                  className="rounded products heightwidth"
                  height="150"
                  width="100%"
                  alt=""
                />
                <p>{pro.details}</p>
                <p>Rs. {pro.price}</p>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={addtocart.bind(this, pro)}>
                  <i className="fa fa-shopping-cart"></i> Add To cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Productlist;
