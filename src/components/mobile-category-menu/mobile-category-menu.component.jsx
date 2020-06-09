import React from "react";
import "./mobile-category-menu.styles.scss";

import { NavLink } from "react-router-dom";

import { withRouter } from "react-router-dom";

import { closeNavbar } from "../../redux/searchImages/navbar/navbar.actions";
import { connect } from "react-redux";

const MobileCategoryMenu = ({ closeNavbar }) => {

  return (
    <div className="mobile-category-menu">
      <div className="headline">Kategorien:</div>
      <div className="categories">
        <NavLink onClick={() => closeNavbar()} to="/kategorie/landschaften">
          Landschaften
        </NavLink>
        <NavLink onClick={() => closeNavbar()} to="/kategorie/gebäude">
          Gebäude
        </NavLink>
        <NavLink onClick={() => closeNavbar()} to="/kategorie/natur">
          Natur
        </NavLink>
        <NavLink onClick={() => closeNavbar()} to="/kategorie/Tiere">
          Tiere
        </NavLink>
        <NavLink onClick={() => closeNavbar()} to="/kategorie/sport">
          Sport
        </NavLink>
        <NavLink onClick={() => closeNavbar()} to="/kategorie/personen">
          Personen
        </NavLink>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    closeNavbar: () => {
      dispatch(closeNavbar());
    }
  };
};
export default withRouter(
  connect(null, mapDispatchToProps)(MobileCategoryMenu)
);
