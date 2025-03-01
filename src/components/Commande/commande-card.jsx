import React from "react";
import "./commande-card.css";

const CardCommande = ({ name, isActive }) => {
    return (
        <div className="card">
            <div className="card-content">
                {/* Nom et statut sur la même ligne */}
                <span className="name">{name}</span>
                <span className={`status ${isActive ? "active" : "inactive"}`}>
                    {isActive ? "Active" : "Inactive"}
                </span>
            </div>

        </div>
    );
};

export default CardCommande;
