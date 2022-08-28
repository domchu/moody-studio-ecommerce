import React, { useEffect, useState } from "react";
import { getAllRateProducts } from "../services/product";
import { BiStar } from "react-icons/bi";

const TopRate = () => {
  const [rateProducts, setRateProducts] = useState(null);

  useEffect(() => {
    const rateProducts = getAllRateProducts();
    setRateProducts(rateProducts);
  }, []);
  return (
    <React.Fragment>
      <div className="rate__product__general">
        <h1>Top rating</h1>
        <div className="general__product__container">
          {rateProducts?.map((product) => (
            <div className="rate__product__container">
              <img src={product.imgSrc} alt="" />
              <div className="rate__name">
                <h2>{product.name}</h2>
                <BiStar className="product__icons__stars " color="orange" />
                <BiStar className="product__icons__stars " color="orange" />
                <BiStar className="product__icons__stars " color="orange" />
                <BiStar className="product__icons__stars " color="orange" />
                <BiStar className="product__icons__stars" />
                <h3>{product.price}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};
export default TopRate;
