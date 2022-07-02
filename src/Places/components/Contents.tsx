import { FC } from 'react'

import { Container, Grid, Typography as Typo } from '@mui/material'

interface Props {
  title: string
  names: string[]
}

export const Contents: FC<Props> = ({ title, names }) => {
  return (
    <Container maxWidth="xl">
      <Grid container display="flex" flexDirection="column">
        <Grid item>
          <Typo
            variant="h1"
          > 
            { title }
          </Typo>
        </Grid>
        <Grid item>
          <Typo
            variant="h4"
          >
            { names } 
          </Typo>
        </Grid>
      </Grid>
    </Container>
  )
}