import "./App.css";
import Component from "./components/Component";
import CheckoutStepper from "./components/CheckoutStepper";
import LoginModal from "./components/login/LoginModal";
import Header from "./components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Component />} />
        <Route path="checkout" element={<CheckoutStepper />} />
        <Route path="login" element={<LoginModal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
