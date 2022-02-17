import "./App.css";
import Component from "./components/Component";
import Checkout from "./components/Checkout";
import LoginPage from "./components/login/LoginPage";
import Header from "./components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Component />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
