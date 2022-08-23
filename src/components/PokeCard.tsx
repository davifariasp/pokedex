import React from "react";
import { PokemonCard } from "../pages/HomePage";
import './PokeCard.css'


const PokeCard : React.FC<PokemonCard> = ({name, img}) => {
    return (
            <div className="poke--card">
                <h1 className="poke--name">{name[0].toUpperCase()+name.substring(1)}</h1>
                    <img src={img} alt={name} className="poke--img"/>
                    {/* { stats.map((item, key)=> (              
                        <div key={key}>
                            <p>{item.name_stat}: {item.base_stat}</p>
                        </div>   
                    ))
                    } */}
            </div>    
    );
}


export default PokeCard;
