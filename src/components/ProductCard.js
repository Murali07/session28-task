import { Link } from "react-router-dom";
function ProductCard({ product }) {
  return (
    <div className="col-md-3 mt-4">
      <div className="card">
        <div className="card-body">
          <div className="card-img-actions">
            <img
              src={product.productImg}
              className="card-img img-fluid"
              width="96"
              height="350"
              alt=""
            />
          </div>
        </div>
        <div className="card-body bg-light text-center">
          <h5 className="font-weight-semibold mb-2">
            <Link to="#" className="text-default" data-abc="true">
              {product.productName}
            </Link>
          </h5>
          <h3 className="mb-2 font-weight-semibold">${product.productPrice}</h3>
          <button type="button" className="btn bg-primary">
            <i className="fa fa-cart-plus mr-2"></i> Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
