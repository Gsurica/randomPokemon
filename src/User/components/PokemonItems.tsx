import { FC } from 'react'
import { Container, Grid, Typography as Typo, Box, Paper } from '@mui/material'

interface Props {
  name: string 
  image: string 
}

export const UsersItems: FC<Props> = ({ name, image }) => {

  const PaperStyles = {
    padding: 5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }

  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid item>
          <Paper>
            <Box sx={PaperStyles}>
              <img src={ image } alt={ name }>
              </img>
              <Typo
                variant="h6"
                color="secondary"
              >
                { name }
              </Typo>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}