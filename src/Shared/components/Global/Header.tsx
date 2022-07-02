import { FC } from 'react'

import { Grid, Container, Typography as Typo, Button, Box, Switch } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import { Link } from 'react-router-dom'

interface isLogged {
  isLogged: boolean
}

interface Props {
  themeChangeHandler(): void
}

export const Header: FC<Props> = ({ themeChangeHandler }) => {

  const Linkscontainer = {
    width: 300,
    alignItems: "center",
    display: "flex",
    justifyContent: "space-evenly",
    textDecoration: "none"
  }

  const logged: isLogged = {
    isLogged: true 
  }

  return (
    <Container maxWidth="xl">
      <Grid container display="flex" alignItems="center" justifyContent="flex-end" spacing={5}>
        <Grid item>
          <Switch onChange={themeChangeHandler} />
        </Grid>
        <Grid item>
          <Box sx={Linkscontainer}>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              disableElevation
              to="/"
            >
              Home
            </Button>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              disableElevation
              to="/Users"
            >
              Pokemons!
            </Button>
          </Box>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<PersonIcon />}
          >
            { logged.isLogged === true ? 'Exit' : 'Enter' }
          </Button>
        </Grid>
        <Grid item>
          <Typo
            variant="h1"
            color="primary"
            component="h1"
          >
            Hello!
          </Typo>
        </Grid>
      </Grid>
    </Container>
  )
}