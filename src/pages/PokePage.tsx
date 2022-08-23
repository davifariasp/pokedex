import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import PokeAPI, {Pokemon} from "../PokeAPI";
import './PokePage.css'
import PokeTitle from "../components/PokeTitle";

export default function PokePage () {
    const {id} = useParams();

    const [pokemon, setPokemon] = useState<Pokemon>();

    useEffect(()=>{
        //Pegando os dados do pokeon
        const loadAll = async () =>{
          let data = await PokeAPI.getPokemon(id);
          setPokemon(data);
        }
    
        loadAll();
      }, [])

    return (
        
        <div>
            <PokeTitle />
            <div className="poke--page">
                <h1 className="poke--name"><span className="poke--id">#{pokemon?.id}</span> {pokemon?.name[0].toUpperCase()}{pokemon?.name.substring(1)}</h1>
                    <img src={pokemon?.img} alt={pokemon?.name} className="poke--img"/>
                    { pokemon?.stats.map((item, key)=> (
                        <div key={key}>
                            <p className={`poke--${item.name_stat}`}><strong>{item.name_stat}:</strong> {item.base_stat}</p>
                        </div>
                    ))
                    }
            </div>
        </div>
    )
}
