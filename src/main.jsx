import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FoodProvider } from "./context/foodContext.jsx";
import { CartProvider } from "./context/cartContext.jsx";
import { AuthProvider } from "./context/authContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <FoodProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FoodProvider>
    </AuthProvider>
  </React.StrictMode>
);
