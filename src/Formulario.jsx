import React, { useEffect, useState } from 'react'

const Formulario = () => {
    const [pokemonIngresar,setPokemonIngresar] = useState("")
    const [listaPokemons,setListaPokemon] = useState([])
    const url = "https://pokeapi.co/api/v2/pokemon";

    useEffect( () => {
        fetch(url).then((response) => response.json()).then((data) => {
            setListaPokemon(data.results.map((pokemon) => pokemon.name))
    })},[])

    const onChangeNombre = (event) => {
        setPokemonIngresar(event.target.value)
    }

    const onClickAgregar = () => {
        setListaPokemon([...listaPokemons,pokemonIngresar])
    }

  return (
    <>
        <h1>Pokedex (solo-nombre)</h1>
        <label htmlFor="nombre">Nombre</label>
        <br />
        <input 
            type="text" 
            id="nombre" 
            value={pokemonIngresar} 
            onChange={onChangeNombre}
            placeholder='Introdusca el nuevo pokemon' />
        <br />
        <button onClick={onClickAgregar}>Agregar</button>
        <br />
        <br />
        <table border="1">
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Nombre</td>
                </tr>
            </thead>
            <tbody>
                {
                    listaPokemons.map((pokemon,y=0) => (
                        <tr>
                            <td>{y+1}</td>
                            <td>{pokemon}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </>
  )
}

export default Formulario