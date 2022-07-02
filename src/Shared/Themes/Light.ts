import { createTheme } from '@mui/material'
import { red, grey } from '@mui/material/colors'

export const Light = createTheme({
  palette: {
    primary: {
      main: red[300],
      dark: red[500],
      light: red[200],
      contrastText: "fff",
    },

    secondary: {
      main: grey[300],
      dark: grey[500],
      light: grey[200],
      contrastText: "fff",
    },

    info: {
      main: grey[600]
    },

    background: {
      default: red[800]
    }
  }
}) 