import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import ProductDetail from "./pages/ProductDetail";
import Dashboard from "./pages/Dashboard";

function App() {
  // const products = [
  //   {
  //     productName: "Handmade Plastic Chair",
  //     productImg: "http://placeimg.com/640/480/fashion",
  //     productPrice: "561.00",
  //     id: "1",
  //   },
  //   {
  //     productName: "Small Steel Gloves",
  //     productImg: "http://placeimg.com/640/480/fashion",
  //     productPrice: "412.00",
  //     id: "2",
  //   },
  //   {
  //     productName: "Refined Frozen Bacon",
  //     productImg: "http://placeimg.com/640/480/fashion",
  //     productPrice: "214.00",
  //     id: "3",
  //   },
  //   {
  //     productName: "Refined Metal Pizza",
  //     productImg: "http://placeimg.com/640/480/fashion",
  //     productPrice: "567.00",
  //     id: "4",
  //   },
  //   {
  //     productName: "Refined Steel Pants",
  //     productImg: "http://placeimg.com/640/480/fashion",
  //     productPrice: "552.00",
  //     id: "5",
  //   },
  // ];
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/add" exact>
          <AddProduct />
        </Route>
        <Route path="/dashboard" exact>
          <Dashboard />
        </Route>
        <Route path="/edit/:id" exact>
          <EditProduct />
        </Route>
        <Route path="**" exact>
          <h2>404</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
