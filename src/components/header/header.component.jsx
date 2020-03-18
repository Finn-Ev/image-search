import React from "react";
import "./header.styles.scss";

import { connect } from "react-redux";
import { toggleNavbar, closeNavbar } from "../../redux/navbar/navbar.actions";

import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";

import Modal from "../modal/modal.component"

// category menus for different screens
import NavDropdown from "../nav-dropdown/nav-dropdown.component";
import MobileCategoryMenu from "../mobile-category-menu/mobile-category-menu.component";
import { openModal, closeModal } from "../../redux/modal/modal.actions";

const Header = ({
  favouriteImageIDs,
  showMobileNavbar,
  toggleNavbar,
  closeNavbar,
  closeModal
}) => {
  return (
    <>
    <Navbar  bg="dark" className="header">
      <Link onClick={closeNavbar} className="brand" to="/">
        Image Search
      </Link>

      {showMobileNavbar ? (
        <div className="mobile-nav-links">
          <NavLink id="home-link" onClick={closeNavbar} exact to="/">
            Home
          </NavLink>

          <MobileCategoryMenu />

          <NavLink
            onClick={closeNavbar}
            id="favourites-link"
            exact
            to="/favoriten"
          >
            Favoriten ({favouriteImageIDs.length})
          </NavLink>
        </div>
      ) : (
          ""
        )}
      <div className="desktop-nav-links">
        <NavLink onClick={closeModal} exact to="/">
          Home
        </NavLink>

        <NavDropdown closeModal={closeModal}/>

        <NavLink onClick={closeModal} id="favourites-link" exact to="/favoriten">
          Favoriten ({favouriteImageIDs.length})
        </NavLink>
      </div>

      <div onClick={toggleNavbar} className="toggle-navbar">
        <div className={`${showMobileNavbar ? "bar-toggled" : "bar-default"} bar-1`}></div>
        <div className={`${showMobileNavbar ? "bar-toggled" : "bar-default"} bar-2`}></div>
        <div className={`${showMobileNavbar ? "bar-toggled" : "bar-default"} bar-3`}></div>
      </div>
    </Navbar>
    </>
  );
};

const mapStateToProps = state => ({
  favouriteImageIDs: state.favouriteImages.imageIDs,
  showMobileNavbar: state.navbar.showMobileNavbar
});

const mapDispatchToProps = dispatch => ({
  toggleNavbar: () => dispatch(toggleNavbar()),
  closeNavbar: () => dispatch(closeNavbar()),
  openModal: () => dispatch(openModal()),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
