import React from "react";
import { Link } from "react-router-dom";
import Images from "./constants/images";
import { BiStar } from "react-icons/bi";
import { getAllProducts } from "../services/product";

const Products = () => {
  const [products, setProducts] = React.useState(null);

  // const [loading, setLoading] = React.useState(false);
  // const [error, setError] = React.useState(null);

  // React.useEffect(() => {
  //   const _getAllProducts = async () => {
  //     setLoading(true);

  //     try {
  //       const data = await getAllProducts();
  //       setProducts(data);
  //       setLoading(false);
  //     } catch (err) {
  //       setError(err);
  //       setLoading(false);
  //     }
  //   };

  //   _getAllProducts();
  // }, []);

  React.useEffect(() => {
    const data = getAllProducts();
    setProducts(data);
  }, []);

  return (
    <div className="product__container">
      <div className="product__image">
        <img src={Images.kettle} alt="kettle" />
        <div className="product__icons product__decor">
          <h2>DECOR</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            similique labore quibusdam eveniet quidem autem.
          </p>
          <Link to="/Store">
            <button className="btn">VIEW ALL</button>
          </Link>
        </div>
      </div>

      {/* {loading ? "loading..." : null}
      {error ? "Error occured!" : null} */}
      {products?.map((product) => (
        <div className="product__image" key={product.id}>
          <img src={product.imgSrc} alt={product.name} />
          <div className="product__icons">
            <p>{product.name}</p>
            <BiStar className="product__icons__stars " color="orange" />
            <BiStar className="product__icons__stars " color="orange" />
            <BiStar className="product__icons__stars " color="orange" />
            <BiStar className="product__icons__stars " color="orange" />
            <BiStar className="product__icons__stars" />
            <p>${product.price}</p>
          </div>
        </div>
      ))}

      <div className="product__image">
        <img src={Images.basket2} alt="basket2" />
        <div className="product__icons product__decor">
          <h2>BOHO CHIC</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            similique labore quibusdam eveniet quidem autem.
          </p>
          <ul className="btn">
            <Link to="/Store" className="btn__link">
              VIEW ALL
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Products;
