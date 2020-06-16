import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageCard from "../ImageCard/ImageCard";

export default function Apod(props)
{

    //  APOD card data state
    const [apodData, setApodData] = useState({
        "title": "Loading...",
        "date":  props.date
    });


    /*
    * Get APOD data
    *
    * @param apiKey string - APOD api key
    * @param date   string - date of APOD to get (2020-12-31)
    *
    * @return none
    */
    function getApodData(date="", apiKey="UvWwSqvr2BI0qwRgLHV3MzQVzYYkIOh40wY6yhWJ")
    {
        axios
          .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`) // &date=2020-01-04
          .then((res) =>
          {
              //  Update card data
              setApodData({
                  "imgSrc": res.data.hdurl,
                  "title": res.data.title,
                  "date": res.data.date,
                  "copyright": res.data.copyright,
                  "description": res.data.explanation,
              });
          })
          .catch((err) =>
          {
              console.error("Failed to get APOD from Nasa API: ", err);
          });
    }


    //  Get APOD data from NASA API on page load
    useEffect(() =>
    {
        getApodData(props.date);
    }, []);


    return (
        <>
            <ImageCard card={apodData} />
        </>
    );
}
