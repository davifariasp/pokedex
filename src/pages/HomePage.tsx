import { useEffect, useState } from 'react'
import './HomePage.css'
import PokeAPI from '../PokeAPI'
import PokeCard from '../components/PokeCard'
import PokeTitle from '../components/PokeTitle'

export type PokemonCard = {
  id?:string;
  name:string;
  img:string;
}

function HomePage() {
  const [pokemons, setPokemons] = useState<PokemonCard[]>([])

  
  useEffect(()=>{
    //Pegando todos os pokemons
    const loadAll = async () =>{
      let list = await PokeAPI.getPokemons();

      // list.map((item)=>{
      //   console.log(item)
      // })

      setPokemons(list);
    }

    loadAll();
  }, [])

  return (
    <div className="App">
      <PokeTitle />
      
      <div className="poke--list">
      {
        pokemons.map((item, key) => (
          <div key={key}>
            <a href={`/pokemon/:${item.id}`} className="poke--card">
              <PokeCard name={item.name} img={item.img}/>
            </a>
          </div>
        ))
      }
      </div>
      
      
    </div>
  )
}

export default HomePage