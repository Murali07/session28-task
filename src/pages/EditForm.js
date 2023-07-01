import * as Yup from "yup";
import { useHistory, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
const formValidationSchema = Yup.object({
  productName: Yup.string().required("  Product name is required"),
  productPrice: Yup.number().required("  Product pricing is required"),
  productImg: Yup.string().required("  Product image url is required"),
});

function EditForm({ id, product }) {
  const url = "https://618fa735f6bf4500174849a5.mockapi.io/products/" + id;
  const history = useHistory();

  console.log("product", product);

  const { handleSubmit, handleChange, values, handleBlur, errors, touched } =
    useFormik({
      // initialValues: {
      //   productName: "test",
      //   productPrice: "test",
      //   productImg: "test",
      // },
      initialValues: product,
      validationSchema: formValidationSchema,
      onSubmit: async (values) => {
        console.log("onSubmit", values);
        await fetch(url, {
          method: "PUT",
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

  // console.log(values);

  // const { productName, productPrice, productImg } = newProduct;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-3">
        <label htmlFor="productName">Name</label>
        <input
          type="text"
          className="form-control"
          id="productName"
          name="productName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.productName}
        />
        {errors.productName && touched.productName ? errors.productName : ""}
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
        {errors.productPrice && touched.productPrice ? errors.productPrice : ""}
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
        {errors.productImg && touched.productImg ? errors.productImg : ""}
      </div>
      <button type="submit" className="btn btn-primary">
        Edit product
      </button>
    </form>
  );
}

export default EditForm;
