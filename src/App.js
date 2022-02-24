import CheckoutStepper from "./components/CheckoutStepper";
import Home from "./components/home";
import Header from "./components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Plants from "./components/Plants";
import LoginWithEmail from "./components/login/LoginWithEmail";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="plants" element={<Plants />} />
       <Route path="checkout" element={<CheckoutStepper />} />
       <Route path="login" element={<LoginWithEmail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
