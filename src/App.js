import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";

const HatsPage = () => <div>HATS PAGE</div>;

function App() {
  return (
    <div>
      <switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
      </switch>
    </div>
  );
}

export default App;
