import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faEdit,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Dashboard() {
  const history = useHistory();
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
          <div className="col-md-6">
            <button
              className="btn btn-outline-primary mb-3"
              variant="outline-primary"
              onClick={() => history.push("/add")}
            >
              <FontAwesomeIcon icon={faPlusCircle} /> Add new product
            </button>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
      <div className="container justify-content-center">
        <div className="row">
          <table className="table">
            <caption>List of Products</caption>
            <thead>
              <tr>
                <th scope="col" style={{ width: "5%" }}>
                  #
                </th>
                <th scope="col" style={{ width: "15%" }}>
                  Image
                </th>
                <th scope="col" style={{ width: "60%" }}>
                  Product
                </th>
                <th scope="col" style={{ width: "10%" }}>
                  Price
                </th>
                <th scope="col" style={{ width: "10%" }}></th>
              </tr>
            </thead>
            <tbody>
              {products.map(function (itm) {
                return (
                  <tr key={itm.id}>
                    <th class="align-middle" scope="row">
                      {itm.id}
                    </th>
                    <td class="align-middle">
                      <img
                        src={itm.productImg}
                        className="img-thumbnail"
                        alt=""
                      />
                    </td>
                    <td class="align-middle">{itm.productName}</td>
                    <td class="align-middle">{itm.productPrice}</td>
                    <td class="align-middle">
                      <button
                        className="btn btn-outline-primary btn-sm"
                        onClick={() => history.push("/edit/" + itm.id)}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      &nbsp;
                      <button
                        className="btn btn-outline-primary mr-3 btn-sm"
                        onClick={() => {
                          const url =
                            "https://618fa735f6bf4500174849a5.mockapi.io/products";
                          fetch(url + "/" + itm.id, { method: "DELETE" })
                            .then((data) => data.json())
                            .then(() => getProducts());
                          // .then(() => history.push("/dashboard"));
                        }}
                      >
                        <FontAwesomeIcon icon={faXmark} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
