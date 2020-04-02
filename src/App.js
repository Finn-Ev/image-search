import React from "react";
import "./App.scss";

import { Route } from "react-router-dom";

import Header from "./components/header/header.component";

import HomePage from "./pages/home/home.component";
import FavoritenPage from "./pages/favourites/favourites.component";
import InfoPage from "./pages/info/info.component";
import CustomImageSearchPag from "./pages/custom-image-search/custom-image-search.component";
import CategoryPage from "./pages/display-category/display-category.component";
import Modal from "./components/modal/modal.component"


function App() {
  return (
    <div className="App bg-light">
      <Header />
      <Modal/>
      <Route exact path="/" component={HomePage} />
      <Route path="/favoriten" component={FavoritenPage} />
      <Route path="/infos" component={InfoPage} />
      <Route path="/suche/:urlQueryString" component={CustomImageSearchPag} />
      <Route exact path="/kategorie/:name" component={CategoryPage} />
    </div>
  );
}


export default App;

