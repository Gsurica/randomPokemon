import { createTheme } from '@mui/material'
import { blue, yellow } from '@mui/material/colors'

export const Dark = createTheme({
  palette: {
    primary: {
      main: yellow[300],
      dark: yellow[500],
      light: yellow[200],
      contrastText: "fff",
    },

    secondary: {
      main: blue[300],
      dark: blue[500],
      light: blue[200],
      contrastText: "fff",
    },

    info: {
      main: blue[600]
    },

    background: {
      default: yellow[800]
    }
  }
}) 