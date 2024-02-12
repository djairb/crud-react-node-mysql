import React from "react";
import './card.css';
import FormDialog from "../dialog/dialogForm";

export default function Card(props) {

    const [open, setOpen] = React.useState(false);

    const handleClickCard = () =>{
        setOpen(true)
    }


    return (

        <>
            <FormDialog
                open={open}
                setOpen={setOpen}
                nome={props.nome}
                preco={props.preco}
                categoria={props.categoria}
                listCard={props.listCard}
                setListCard={props.setListCard}                
            />

            <div className="containerCard" onClick={() =>
            
            handleClickCard()}>

                <h1>{props.nome}</h1>

                <div className="containerDetalhes">

                    <p>{props.categoria}</p>

                    <p>•</p>

                    <p>{props.preco}</p>

                </div>       

            </div>

        </>


    ) 




}