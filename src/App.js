import CheckoutStepper from "./components/CheckoutStepper";
import Home from "./components/home";
import Header from "./components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Plants from "./components/Plants";
import LoginPage from "./components/login/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="plants" element={<Plants />} />
       <Route path="checkout" element={<CheckoutStepper />} />
       <Route path="login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
