// eslint-disable-next-line no-unused-vars
import  React  from 'react'
// eslint-disable-next-line no-unused-vars
import  ReactDom from 'react-dom/client'
import { createRoot} from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
 