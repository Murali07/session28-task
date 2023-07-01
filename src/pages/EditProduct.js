import * as Yup from "yup";
import { useHistory, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import EditForm from "./EditForm";
const formValidationSchema = Yup.object({
  productName: Yup.string().required("  Product name is required"),
  productPrice: Yup.number().required("  Product pricing is required"),
  productImg: Yup.string().required("  Product image url is required"),
});

function AddProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const url = "https://618fa735f6bf4500174849a5.mockapi.io/products/" + id;
  const history = useHistory();

  const getProduct = () => {
    fetch(url, { method: "GET" })
      .then((data) => data.json())
      .then((prd) => setProduct(prd));
  };

  useEffect(getProduct, []);

  // const { productName, productPrice, productImg } = newProduct;

  return (
    <div className="container ">
      <div className="col-md-6 offset-md-3">
        <div className="row justify-content-center">
          <div className="card p-4 mt-5 bg-light">
            <h2>Edit Product {id}</h2>
            {product ? (
              <EditForm id={id} product={product} />
            ) : (
              "No Product to edit"
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
