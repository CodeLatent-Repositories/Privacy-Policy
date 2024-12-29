import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './pages/Header.jsx'
import Landing from './pages/Landing.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import Footer from './pages/Footer.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Header /> */}
    <Landing/>
    <PrivacyPolicy/>
    <Footer/>
  </StrictMode>,
)
