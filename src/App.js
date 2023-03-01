import React from "react";
import "./App.css";
// import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Notification from "./components/Notification";
import { useDispatch } from "react-redux";
import { sendCartData } from "./store/slices/cart-slice";
import AuthFirebase from "./components/AuthFirebase";

let isFirstRender = true;

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((s) => s.auth.isLoggedIn);
  const cart = useSelector((s) => s.cart);
  const notification = useSelector((s) => s.ui.notification);
  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <div className="App">
      {notification && (
        <Notification
          type={notification.type}
          message={notification.message}
        ></Notification>
      )}

      {!isLoggedIn && <AuthFirebase />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
