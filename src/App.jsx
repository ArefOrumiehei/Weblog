import { createContext, useState } from 'react'
import { Routes , Route } from 'react-router-dom'
import { ThemeProvider, styled } from 'styled-components'

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import SinglePost from "./pages/SinglePost"
import Write from "./pages/Write"
import Settings from "./pages/Settings"
import Login from "./pages/Login"
import Register from './pages/Register'

import { darkTheme , lightTheme } from './Theme/Theme'

const Container = styled.div `
  background-color: ${({theme}) => theme.bg};
`

const ThemeContext = createContext()

function App() {
  const isUserLogin = true

  const [themeMode , setThemeMode] = useState(false)
  
  return (
    <ThemeProvider theme={themeMode ? darkTheme : lightTheme}>
      <ThemeContext.Provider value={themeMode}>
        <Container>
          <Navbar themeMode={themeMode} setThemeMode={setThemeMode}/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/' />
            <Route path='/' />
            <Route path='/write' element={isUserLogin ? <Write/> : <Login/>}/>
            <Route path='/' />
            <Route path='/post/' element={<SinglePost/>}/>
            <Route path='/settings' element={isUserLogin ? <Settings/> : <Login/>}/>
            <Route path='/login' element={isUserLogin ? <Home/> : <Login/>}/>
            <Route path='/register' element={isUserLogin ? <Home/> : <Register/>}/>
          </Routes>
        </Container>
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}

export default App
