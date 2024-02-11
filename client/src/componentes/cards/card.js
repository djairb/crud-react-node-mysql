import React from "react";
import './card.css';

export default function Card(props) {


    return (

        <div className="containerCard">

            <h1>{props.nome}</h1>

            <div className="containerDetalhes">

                <p>{props.categoria}</p>

                <p>•</p>

                <p>{props.preco}</p>

            </div>       

        </div>


    ) 




}