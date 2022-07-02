import { FC, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Principal } from './Places/containers/Principal'

import { Header } from './Shared/components/Global/Header'
import { Users } from './User/containers/Pokemons'

import { ThemeProvider } from '@mui/material'
import { Light } from './Shared/Themes/Light'
import { Dark } from './Shared/Themes/Dark'

export const App: FC = () => {

  const [theme, setTheme] = useState(Light)

  const themeChangeHandler = () => setTheme(theme === Light ? Dark : Light)
  
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header themeChangeHandler={themeChangeHandler} />
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/Users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
