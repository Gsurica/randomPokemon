import { FC, useEffect, useState } from 'react'
import axios from 'axios'

import { UsersItems } from './PokemonItems'

interface Props {
  name?: string 
  image?: string 
  randomPokemon(): number 
}

export const UsersList: FC<Props> = ({ randomPokemon }) => {

  const [pokemonName, setPokemonName] = useState<string>('')
  const [pokemonImage, setPokemonImage] = useState<string>('')

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${randomPokemon()}`).then((res) => {
      try {
        setPokemonName(res.data.name)
        setPokemonImage(res.data['sprites']['front_default'])
        console.log(res.data.name)
      } catch (err) {
        console.error(err)
      }
    })
  }, [randomPokemon])

  return (
    <UsersItems name={pokemonName} image={pokemonImage} />
  )
}