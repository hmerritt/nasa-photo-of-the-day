import React, { useState, useEffect } from "react";
import Header    from "./components/Header/Header";
import ImageCard from "./components/ImageCard/ImageCard";
import "./App.css";

function App()
{
    return (
        <>
            <Header />
            <div className="container">
                <div className="imageCards-container">
                    <ImageCard src="https://apod.nasa.gov/apod/image/2001/IC405hp_ColesHelm_3447.jpg" />
                </div>
            </div>
        </>
    );
}

export default App;
