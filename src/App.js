import "./App.css";
import Component from "./components/Component";
import Checkout from "./components/Checkout";
import LoginModal from "./components/login/LoginModal";
import Header from "./components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blurb from "./components/Blurb";
import Filters from "./components/Filters";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Blurb
        title="Shop Plants"
        body="Revamp your style with the latest designer trends in men’s clothing or achieve a perfectly curated wardrobe thanks to our line-up of timeless pieces. "
      />
      <Filters />
      <Routes>
        <Route path="checkout" element={<Checkout />} />
        <Route path="login" element={<LoginModal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
