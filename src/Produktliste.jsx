import React from 'react';
import Produkt from "./Produkt.jsx";

export default function Produktliste({produkte, onDelete}) {


    return (
        <ul>
            {
                produkte.map(produkt => {
                    return <Produkt key={ produkt} produkt={produkt} onDelete={onDelete}/>
                })
            }

        </ul>
    );
}

