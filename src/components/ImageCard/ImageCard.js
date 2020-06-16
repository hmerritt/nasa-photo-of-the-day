import React from "react";
import "./ImageCard.css";

export default function ImageCard(props)
{

    const card = props.card;

    return (
        <div className="imageCard">
            <img src={card.imgSrc} className="imageCard-img" />
            <div className="imageCard-info">
                <p className="imageCard-info-title">{card.title}</p>
                <p className="imageCard-info-dateCopyright">
                    <span>{card.copyright}</span>
                    <span> @ {card.date}</span>
                </p>
                <p className="imageCard-info-description">{card.description}</p>
            </div>
        </div>
    );
}
