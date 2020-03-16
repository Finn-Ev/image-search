import React from 'react';
import "./info.styles.scss"

const InfoPage = () => {
    return (
        <div className="info-page">
            <div className="info-details">
            <h3>Infos zum Projekt</h3>
            <p>Bilderquelle: <a className="color-primary" href="https://pixabay.com/de/">pixabay-API</a></p>
            <p>Umsetzung der Such- und Favoritenfunktion, Darstellung der Bilder: <a className="color-primary" href="https://finnevermann.netlify.com/">Finn Evermann</a></p>
            <p className="disclaimer"> Dieses Projekt ist ein Portfolio-Projekt. <br/> Es soll den Umgang mit einfachen APIs sowie die Nutzung von Redux und dem 
                Session- bzw. Localstorge darstellen.
            </p>
            </div>
        </div>
    );
}
export default InfoPage;
