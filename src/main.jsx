import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'

//Main Component
import App from './App.jsx'

//Styles
import './main.css'

//Context
import DarkModeProvider from './context/DarkModeProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </BrowserRouter>
)
