import React, { useState, useEffect } from "react";
import axios     from "axios";
import moment    from "moment"
import Header    from "./components/Header/Header";
import ImageCard from "./components/ImageCard/ImageCard";
import Apod      from "./components/Apod/Apod";
import "./App.css";


export default function App()
{

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


    return (
        <>
            <Header />
            <div className="container">
                <div className="imageCards-container">
                    <Apod date={date(0)} />
                    <Apod date={date(1)} />
                    <Apod date={date(2)} />
                    <Apod date={date(3)} />
                    <Apod date={date(4)} />
                </div>
            </div>
        </>
    );
}
