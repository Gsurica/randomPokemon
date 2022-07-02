import { FC, useCallback } from 'react'

import { Container, Grid } from '@mui/material'

import { UsersList } from '../components/PokemonsList'

import { GiveMeAPokemon } from '../../Shared/components/UIElements/GiveMeAPokemon'

export const Users: FC = () => {

  const randomPokemon = useCallback(
    (): number => {
      return Math.floor(Math.random() * 100)
    }, []
  )

  return (
    <Container maxWidth="xl">
      <Grid container spacing={4} display="flex" alignItems="center" justifyContent="center" flexDirection="column" sx={{
        height: "800px"
      }}>
        <Grid item>
          <UsersList randomPokemon={randomPokemon} />
        </Grid>
        <Grid item>
         <GiveMeAPokemon />
        </Grid>
      </Grid>
    </Container>
  )
}