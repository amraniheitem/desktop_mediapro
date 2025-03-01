import React from "react";
import "./card.css";

const CardVoix = ({ name, wilaya, description, image, langue, nbrlike, ranking }) => {
    return (
        <div className="cardvoix">
            <div className="cover-photo">
                <img src={image} alt={name} className="cover-img" />
            </div>
            <div className="info-voix">
                <h3>{name}</h3>
                <p>{description}</p>
                <span className="langue">{langue}</span>
                <p>Likes : {nbrlike} | Classement : {ranking}</p>
            </div>
        </div>
    );
};

export default CardVoix;
