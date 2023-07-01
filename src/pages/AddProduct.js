import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
const formValidationSchema = Yup.object({
  productName: Yup.string().required("  Product name is required"),
  productPrice: Yup.number().required("  Product pricing is required"),
  productImg: Yup.string().required("  Product image url is required"),
});

function AddProduct() {
  const url = "https://618fa735f6bf4500174849a5.mockapi.io/products";
  const history = useHistory();
  const { handleSubmit, handleChange, values, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        productName: "",
        productPrice: "",
        productImg: "",
      },
      validationSchema: formValidationSchema,
      onSubmit: async (values) => {
        console.log("onSubmit", values);
        await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
          },
          body: JSON.stringify(values),
        })
          .then((data) => data.json())
          .then((data) => {
            history.push("/dashboard");
          });
      },
    });

  // const { productName, productPrice, productImg } = newProduct;

  return (
    <div className="container ">
      <div className="col-md-6 offset-md-3">
        <div className="row justify-content-center">
          <div className="card p-4 mt-5 bg-light">
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="productName">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="productName"
                  name="productName"
                  value={values.productName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.productName && touched.productName
                  ? errors.productName
                  : ""}
              </div>
              <div className="form-group mb-3">
                <label htmlFor="name">Price</label>
                <input
                  type="text"
                  className="form-control"
                  id="productPrice"
                  name="productPrice"
                  value={values.productPrice}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.productPrice && touched.productPrice
                  ? errors.productPrice
                  : ""}
              </div>
              <div className="form-group mb-3">
                <label htmlFor="name">Pic</label>
                <input
                  type="text"
                  className="form-control"
                  id="productImg"
                  name="productImg"
                  value={values.productImg}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.productImg && touched.productImg
                  ? errors.productImg
                  : ""}
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
