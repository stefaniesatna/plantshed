import "./App.css";
import Component from "./components/Component";
import Checkout from "./components/Checkout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (    
      <BrowserRouter>
      <Routes>
          <Route index element={<Component />} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
    </BrowserRouter>

  );
}

export default App;
