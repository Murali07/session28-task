import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";

function Home() {
  const [products, setProducts] = useState([]);

  const url = "https://618fa735f6bf4500174849a5.mockapi.io/products";

  const getProducts = () => {
    fetch(url, { method: "GET" })
      .then((data) => data.json())
      .then((prd) => setProducts(prd));
  };

  useEffect(() => getProducts(), []);

  return (
    <div>
      <div className="container justify-content-center">
        <div className="row">
          <h2>List of products created</h2>
        </div>
      </div>
      <div className="container justify-content-center">
        <div className="row">
          {products.map(function (itm) {
            return <ProductCard key={itm.id} product={itm} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
