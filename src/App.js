import React, { useState, useEffect } from "react";
import Header    from "./components/Header/Header";
import ImageCard from "./components/ImageCard/ImageCard";
import Apod      from "./components/Apod/Apod";
import "./App.css";

import axios     from "axios";
import moment    from "moment";
import tz        from "moment-timezone";
import styled from 'styled-components';


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
        return moment().tz('America/New_York').subtract(days, 'days').format('YYYY-MM-DD');
    }


    //  Component styles
    const Container = styled.div`
      padding-right: 40px;
      padding-left: 40px;
      margin-right: auto;
      margin-left: auto;

      @media (min-width: 847px) {
        width: 750px;
      }
      @media (min-width: 1067px) {
        width: 970px;
      }
      @media (min-width: 1267px) {
        width: 1170px;
      }
    `;
    const CardsContainer = styled.div``;


    return (
        <>
            <Header />
            <Container>
                <CardsContainer>
                    <Apod date={date(0)} />
                    <Apod date={date(1)} />
                    <Apod date={date(2)} />
                    <Apod date={date(3)} />
                    <Apod date={date(4)} />
                </CardsContainer>
            </Container>
        </>
    );
}
