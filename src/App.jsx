import { Routes , Route } from 'react-router-dom'

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import SinglePost from "./pages/SinglePost"
import Write from "./pages/Write"
import Settings from "./pages/Settings"
import Login from "./pages/Login"
import Register from './pages/Register'

function App() {
  const isUserLogin = false
  return (
    <>
      <div>
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
      </div>
    </>
  )
}

export default App
