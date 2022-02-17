import Home from "./components/home";
import Checkout from "./components/Checkout";
import LoginModal from "./components/login/LoginModal";
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
        <Route path="checkout" element={<Checkout />} />
        <Route path="login" element={<LoginModal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
