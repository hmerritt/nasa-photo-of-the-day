import React from "react";
import styled, { css } from 'styled-components';

export default function ImageCard(props)
{

    //  Component styles
    const Card = styled.div`
      width: 70%;
      margin: 40px auto;
      border-radius: 10px;
      overflow: hidden;
      border: 1px solid #ddd;
      -webkit-box-shadow: 0px 2px 40px 0px rgba(0,0,0, .2);
         -moz-box-shadow: 0px 2px 40px 0px rgba(0,0,0, .2);
          -ms-box-shadow: 0px 2px 40px 0px rgba(0,0,0, .2);
              box-shadow: 0px 2px 40px 0px rgba(0,0,0, .2);

      @media (max-width: 1068px) {
        width: 100%;
      }
    `;

    const CardImg = styled.img`
      width: 100%;
    `;

    const CardInfo = styled.div`
      padding: 40px;
    `;

    const CardText = styled.p`
      font-size: 3rem;
      text-align: justify;

      ${props => props.description && css`
        font-size: 1.8rem;
        line-height: 1.3em;
        margin-top: 20px;
      `}
    `;


    //  Card data
    const card = props.card;

    return (
        <Card>
            <CardImg src={card.imgSrc} />
            <CardInfo>
                <CardText title>{card.title}</CardText>
                <CardText dateCopyright>
                    <span>{card.copyright}</span>
                    <span> @ {card.date}</span>
                </CardText>
                <CardText description>{card.description}</CardText>
            </CardInfo>
        </Card>
    );
}
