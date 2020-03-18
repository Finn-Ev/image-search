import React from 'react';
import "./footer.styles.scss"

const Footer = () => {

    return (
        <div className="footer bg-light">
            <span onClick={() => window.scrollTo(0, 0)} className="button"><i className="fas fa-chevron-up"></i></span> 
            <span className="link">&copy; <a href="https://finnevermann.netlify.com/">Finn Evermann</a></span>
        </div>
    );
}

export default Footer;
