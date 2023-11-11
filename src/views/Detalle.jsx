import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import PizzasCard from "../components/PizzasCards";

const Detalle = () => {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState({})

    const url = `../pizzas.json/${name}`

     const getPokemon = async () => {
        const res = await fetch(url);
        const data = await res.json();

        const image = data.sprites.other.dream_world.front_default
        // falta agregar los stats y los types aqui
        setPokemon({image, name});
       
    }

    useEffect(() => {
        getPokemon();
    }, [])

    
  return (
    <>
      <PokemonCard pokemon={pokemon} />
    </>
  )
}

export default Detalle