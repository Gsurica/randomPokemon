import { FC } from 'react'
import { Container, Grid, Button, Typography as Typo } from '@mui/material'

export const GiveMeAPokemon: FC = () => {

  const reload = () => {
    const rel = window.location.reload()
    return rel
  }

  return (
    <Container maxWidth="xl"> 
      <Grid container>
        <Grid item>
          <Button
            variant="contained"
            color="primary"          
            onClick={() => reload()}  
          >
            <Typo
              variant="h3"
              color="secondary"
            >
              Give me a pokemon!
            </Typo>
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}