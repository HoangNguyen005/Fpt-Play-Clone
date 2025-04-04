import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router'
import GlobalStyle from './components/GlobalStyles'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <GlobalStyle>
        <App />
      </GlobalStyle>
    </HashRouter>
  </StrictMode>
)
