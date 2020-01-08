import React, { useState, useEffect } from "react";
import axios     from "axios";
import moment    from "moment"
import Header    from "./components/Header/Header";
import ImageCard from "./components/ImageCard/ImageCard";
import "./App.css";

function App()
{

    //  1. NASA APOD data
    //  2. Image cards state
    const [apodData,   setApodData]   = useState([]);
    const [imageCards, setImageCards] = useState(<ImageCard title="Loading..." />);

    //  NASA APOD API key
    const nasaApiKey = "UvWwSqvr2BI0qwRgLHV3MzQVzYYkIOh40wY6yhWJ";


    /*
    * Get APOD data
    *
    * @param apiKey string - APOD api key
    * @param date   string - date of APOD to get (2020-12-31)
    *
    * @return none
    */
    function getApodData(apiKey, date="")
    {
        axios
          .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`) // &date=2020-01-04
          .then((res) =>
          {
              //  Set card data
              const newApodData = apodData;
              newApodData.push(res.data);
              setApodData(newApodData);

              //  Render new imageCards
              renderImageCards(newApodData);
          })
          .catch((err) =>
          {
              console.error("Failed to get APOD from Nasa API: ", err);
          });
    }

    /*
    * Render APOD data using apodData state
    *
    * @param data array - APOD api data
    *
    * @return none
    */
    function renderImageCards(data)
    {
        setImageCards(
            (
                <>
                    {
                        data.map((apod, key) => {
                            return <ImageCard
                                key={key}
                                imgSrc={apod.hdurl}
                                title={apod.title}
                                copyright={apod.copyright}
                                date={apod.date}
                                description={apod.explanation}
                            />
                        })
                    }
                </>
            )
        );
    }

    /*
    * Date (YYYY-MM-DD)
    *
    * @param days number - number of days ago to get date (0 is today)
    *
    * @return date
    */
    function date(days)
    {
        return moment().subtract(days, 'days').format('YYYY-MM-DD');
    }


    //  Get APOD data from NASA API on page load
    useEffect(() =>
    {
        //  Get last 5 days from API
        for (let i = 0; i < 5; i++)
        {
            getApodData(nasaApiKey, date(i));
        }
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
