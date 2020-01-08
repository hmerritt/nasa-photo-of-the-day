import React from "react";
import "./ImageCard.css";

function ImageCard(props)
{
    return (
        <div className="imageCard">
            <img src={props.imgSrc} className="imageCard-img" />
            <div className="imageCard-info">
                <p className="imageCard-info-title">{props.title}</p>
                <p className="imageCard-info-dateCopyright">
                    <span>{props.copyright}</span>
                    <span> @ {props.date}</span>
                </p>
                <p className="imageCard-info-description">{props.description}</p>
            </div>
        </div>
    );
}

export default ImageCard;
