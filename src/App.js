import React, { useState, useEffect } from "react";
import axios     from "axios";
import Header    from "./components/Header/Header";
import ImageCard from "./components/ImageCard/ImageCard";
import "./App.css";

function App()
{

    //  image cards state
    const [imageCards, setImageCards] = useState(<ImageCard title="Loading..." />);

    //  NASA API key
    const nasaApiKey = "UvWwSqvr2BI0qwRgLHV3MzQVzYYkIOh40wY6yhWJ";

    //  Get APOD data from NASA API
    useEffect(() =>
    {
        axios
          .get(`https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}&date=2020-01-04`)
          .then((res) =>
          {
              //  Set card data
              setImageCards(
                  <ImageCard
                      imgSrc={res.data.hdurl}
                      title={res.data.title}
                      copyright={res.data.copyright}
                      date={res.data.date}
                      description={res.data.explanation}
                  />
              );
          })
          .catch((err) =>
          {
              console.error("Failed to get APOD from Nasa API: ", err);
          });
    }, []);

    return (
        <>
            <Header />
            <div className="container">
                <div className="imageCards-container">
                    {imageCards}
                </div>
            </div>
        </>
    );
}

export default App;
