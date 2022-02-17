import "./App.css";
import Component from "./components/Component";
import Blurb from "./components/Blurb";

function App() {
  return (
    <div>
      <Blurb
        title={"Shop Plants"}
        body={
          "Revamp your style with the latest designer trends in men’s clothing or achieve a perfectly curated wardrobe thanks to our line-up of timeless pieces. "
        }
      />
    </div>
  );
}

export default App;
