// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CounterProvider } from './Contexts/CounterProvider'
// import App from '../../utubehook'

createRoot(document.getElementById('root')).render(
  <CounterProvider>
    {/* <App /> */}
  </CounterProvider>
 
)
// make it available everywhere
