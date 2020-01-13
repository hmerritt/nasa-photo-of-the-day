import React, { useState, useEffect } from "react";
import axios     from "axios";
import moment    from "moment";
import tz        from "moment-timezone";
import Header    from "./components/Header/Header";
import ImageCard from "./components/ImageCard/ImageCard";
import Apod      from "./components/Apod/Apod";
import "./App.css";


export default function App()
{
	
	/*
	*  APOD elements to be rendered
	*  - get 3 on page load
	*/
	const [apodElements, setApodElements] = useState([
		<Apod date={date(0)} />,
		<Apod date={date(1)} />,
		<Apod date={date(2)} />
	]);
	
	
	/*
	*  Add APOD element to render
	*
	* @param number days
	*/
	function addApod(daysAgo)
	{
		//  Add new Apod to elements array
		//  Update Apod state
	    const updateApodElements = [...apodElements];
		updateApodElements.push(<Apod key={daysAgo} date={date(daysAgo)} />);
		setApodElements(updateApodElements);
	}

    /*
    * Date (YYYY-MM-DD)
    *
    * @param number days - number of days ago to get date (0 is today)
    *
    * @return date
    */
    function date(days)
    {
        return moment().tz('America/New_York').subtract(days, 'days').format('YYYY-MM-DD');
    }
	
	
    /*
    *  Infinite scroll - Add more Apods as user scrolls to bottom of page
    */
    window.onscroll = function(ev)
    {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight)
        {
			//  Add next Apod - x no. days ago
            addApod(apodElements.length);
        }
    };


    return (
        <>
            <Header />
            <div className="container">
                <div className="imageCards-container">
					{apodElements}
                </div>
            </div>
        </>
    );
}
