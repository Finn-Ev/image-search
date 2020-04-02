import React from "react";
import "./home.styles.scss";

import MyForm from "../../components/form/form.component";
import CategoryMenu from "../../components/category-menu/category-menu.component";

import Footer from "../../components/footer/footer.component";

const HomePage = ({ history}) => {
  const handleSubmit = (e, queryString )=> {
    e.preventDefault();
    history.push(`/suche/${queryString}`);
  };

  return (
    <div className="homepage">
      <MyForm homepage handleSubmit={handleSubmit} />
      <CategoryMenu />
      <Footer />
    </div>
  );
};


export default HomePage
