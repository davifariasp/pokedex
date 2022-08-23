import { PokemonCard } from "./pages/HomePage";
const API_BASE = 'https://pokeapi.co/api/v2'

const basicFetch = async (endpoint:string) => {
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json();
    return json
}

export type Pokemon = {
    id?:number;
    name:string;
    stats: Array<any>;
    img:string;
}

export default {
    //pegar todos os pokemons
    getPokemons: async()=> {
        let pokemons = [];

        for (let i=1; i<=150; i++){
            let pokeFetch = await basicFetch(`/pokemon/${i}`)

            //console.log(pokeFetch);

            let pokemon:PokemonCard = {
                id: pokeFetch.id,
                name: `${pokeFetch.name}`,
                img: `${pokeFetch.sprites.other["official-artwork"].front_default}`
            };

            //console.log(pokemon);

            pokemons.push(pokemon)
        }

        return pokemons;
    },
    //pegar pokemon especifico
    getPokemon: async(pokeId:any)=> {
        //devemos tirar o caractere : para o trecho de código funcionar
        let pokeFetch = await basicFetch(`/pokemon/${parseInt(pokeId.slice(1, pokeId.length))}`)
        let stats = [{}]

        //Pegando as stats dos pokemons
        pokeFetch.stats.map((item:any) => {
            let stat = {
                base_stat: item.base_stat, 
                name_stat: item.stat.name
            }
            //console.log(stat);
            stats.push(stat);
        })

        let pokemon:Pokemon = {
            id: pokeFetch.id,
            name: `${pokeFetch.name}`,
            stats: stats.slice(1, stats.length), //remove o array vazio em [0]
            img: `${pokeFetch.sprites.other["official-artwork"].front_default}`
        };
        return pokemon;
    },
    //pesquisando pokemon
}