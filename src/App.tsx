import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

import "./App.css";
import Layout from "./pages/layout/layout";
import HomePage from "./pages/HomePage";
import ListProducts from "./pages/admin/ListProducts";
import { LayoutAdmin } from "./pages/layout/LayoutAdmin";
import { FormProduct } from "./pages/admin/FormAddProduct";
import { ProductDetail } from "./pages/ProductDetail";
import { FormUpdateProduct } from "./pages/admin/FormUpdateProducts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout Component={HomePage} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/product/:id"
            element={<Layout Component={ProductDetail} />}
          />
          <Route
            path="/admin"
            element={<LayoutAdmin Component={ListProducts} />}
          />
          <Route
            path="/admin/create"
            element={<LayoutAdmin Component={FormProduct} />}
          />
          <Route
            path="/admin/:id"
            element={<LayoutAdmin Component={FormUpdateProduct} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
