import React from "react";
import "./ImageCard.css";

function ImageCard(props)
{
    return (
        <div className="imageCard">
            <img src={props.src} className="imageCard-img" />
            <div className="imageCard-info">
                <p className="imageCard-info-title">IC 405: The Flaming Star Nebula</p>
                <p className="imageCard-info-dateCopyright">
                    <span>Eric Coles</span>
                    <span> @ 2020-01-07</span>
                </p>
                <p className="imageCard-info-description">
                    Rippling dust and gas lanes give the Flaming Star Nebula its name.  The orange and purple colors of the nebula are present in different regions and are created by different processes.  The bright star AE Aurigae, visible toward the image left, is so hot it is blue, emitting light so energetic it knocks electrons away from surrounding gas.  When a proton recaptures an electron, red light is frequently emitted (depicted here in orange). The purple region's color is a mix of this red light and blue light emitted by AE Aurigae but reflected to us by surrounding dust. The two regions are referred to as emission nebula and reflection nebula, respectively.  Pictured here in the Hubble color palette, the Flaming Star Nebula, officially known as IC 405, lies about 1500 light years distant, spans about 5 light years, and is visible with a small telescope toward the constellation of the Charioteer (Auriga).
                </p>
            </div>
        </div>
    );
}

export default ImageCard;
