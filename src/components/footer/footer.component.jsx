import React from 'react';
import "./footer.styles.scss"

const Footer = () => {
    const scrollTop = () => {
        window.scrollTo(0, 0)
    }   
    return (
        <div className="footer bg-light">
        <span onClick={scrollTop} className="button"><i className="fas fa-chevron-up"></i></span>
        </div>
    );
}

export default Footer;
