import { useContext } from 'react'
import { Routes , Route } from 'react-router-dom'
import { ThemeProvider, styled } from 'styled-components'

//Components
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import SinglePost from "./pages/SinglePost"
import Write from "./pages/Write"
import Settings from "./pages/Settings"
import Login from "./pages/Login"
import Register from './pages/Register'

//Theme
import { darkTheme , lightTheme } from './Theme/Theme'
import { DarkModeContext } from './context/DarkModeProvider'

const Container = styled.div `
  background-color: ${({theme}) => theme.bg};
`

function App() {
  const isUserLogin = true

  const {darkMode} = useContext(DarkModeContext)
  
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Container>
          <Navbar/>
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
    </ThemeProvider>
  )
}

export default App
