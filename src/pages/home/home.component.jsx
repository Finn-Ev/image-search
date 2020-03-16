import React from "react";
import "./home.styles.scss";

import MyForm from "../../components/form/form.component";
import CategoryMenu from "../../components/category-menu/category-menu.component";

import { connect } from "react-redux";
import Footer from "../../components/footer/footer.component";

const HomePage = ({ history, queryString }) => {
  const handleSubmit = e => {
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

const mapStateToProps = state => ({
  queryString: state.searchImages.queryString
});

export default connect(mapStateToProps)(HomePage);
