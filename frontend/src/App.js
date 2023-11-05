import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import WebFont from "webfontloader";

import Header from "./component/layout/header/Header";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import LoginSignup from "./component/User/LoginSignup";
import store from "./Store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/header/UserOptions";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile.js";
import ProcatedRoute from "./component/Route/ProcatedRoute";
import UpdateProfile from "./component/User/UpdateProfile.js";
import UpdatePassword from "./component/User/UpdatePassword.js";
import ForgotPassword from "./component/User/ForgotPassword.js";
import ResetPassword from "./component/User/ResetPassword.js";
import Cart from "./component/cart/Cart.js";
import Shipping from "./component/cart/Shipping.js";
import ConfirmOrder from "./component/cart/ConfirmOrder.js";
import axios from "axios";
import Payment from "./component/cart/Payment.js";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/cart/OrderSuccess.js";
import MyOrders from "./component/order/MyOrders.js";
import OrderDetails from "./component/order/OrderDetails.js";
import Dashbord from "./component/admin/Dashbord.js";
import ProductList from "./component/admin/ProductList.js";
import NewProduct from "./component/admin/NewProduct";
import UpdateProduct from "./component/admin/UpdateProduct.js";
import OrderList from "./component/admin/OrderList.js";
import ProcessOrder from "./component/admin/ProcessOrder.js";
import UserList from "./component/admin/UserList";
import UpdateUser from "./component/admin/UpdateUser.js";
import Reviews from "./component/admin/Reviews.js";
import NotFound from "./component/layout/notFound/NotFound";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");
    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());

    getStripeApiKey();
  }, []);

  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <ProcatedRoute exact path="/payment/process" component={Payment} />
        </Elements>
      )}
      
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:keyword" component={Products} />

        <Route exact path="/search" component={Search} />
        <ProcatedRoute exact path="/account" component={Profile} />
        <ProcatedRoute exact path="/me/update" component={UpdateProfile} />
        <ProcatedRoute
          exact
          path="/password/update"
          component={UpdatePassword}
        />
        <Route exact path="/password/forgot" component={ForgotPassword} />
        <Route exact path="/password/reset/:token" component={ResetPassword} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/login" component={LoginSignup} />
        <ProcatedRoute exact path="/shipping" component={Shipping} />

        <ProcatedRoute exact path="/success" component={OrderSuccess} />
        <ProcatedRoute exact path="/orders" component={MyOrders} />
        <Switch>
          <ProcatedRoute exact path="/order/confirm" component={ConfirmOrder} />
          <ProcatedRoute exact path="/order/:id" component={OrderDetails} />
        </Switch>
        <ProcatedRoute
          isAdmin={true}
          exact
          path="/admin/dashboard"
          component={Dashbord}
        />
        <ProcatedRoute
          isAdmin={true}
          exact
          path="/admin/products"
          component={ProductList}
        />
        <ProcatedRoute
          isAdmin={true}
          exact
          path="/admin/product"
          component={NewProduct}
        />
        <ProcatedRoute
          isAdmin={true}
          exact
          path="/admin/product/:id"
          component={UpdateProduct}
        />
        <ProcatedRoute
          isAdmin={true}
          exact
          path="/admin/orders"
          component={OrderList}
        />
        <ProcatedRoute
          isAdmin={true}
          exact
          path="/admin/order/:id"
          component={ProcessOrder}
        />
        <ProcatedRoute
          isAdmin={true}
          exact
          path="/admin/users"
          component={UserList}
        />
        <ProcatedRoute
          isAdmin={true}
          exact
          path="/admin/user/:id"
          component={UpdateUser}
        />
        <ProcatedRoute
          isAdmin={true}
          exact
          path="/admin/reviews"
          component={Reviews}
        />
        {/* <Route
          component={
            window.location.pathname === "/process/payment" ? null : NotFound}
        /> */}
     
      <Footer />
    </Router>
  );
}

export default App;
