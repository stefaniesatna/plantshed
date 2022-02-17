import "./App.css";
import Home from "./components/home";
import Checkout from "./components/Checkout";
import LoginModal from "./components/login/LoginModal";
import Header from "./components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import LoginWithEmail from "./components/login/LoginWithEmail";
=======
import Blurb from "./components/Blurb";
import Filters from "./components/Filters";
>>>>>>> cde5a8c3b5ed51a296aea8ee933e90a32a169c43

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="login" element={<LoginModal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
