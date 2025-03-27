import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import { HomePage } from './pages/HomePage'
import { CatalogPage } from './pages/CatalogPage'
import { OffersPage } from './pages/OffersPage'
import { ShipmentsPage } from './pages/ShipmentsPage'
import { ContactPage } from './pages/ContactPage'
import { NotFoundPage } from './pages/NotFoundPage'

import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'


function App() {

  return (
    <>
    <BrowserRouter>

      <Header />
      <NavBar />
      <div style={{ paddingTop: '130px' }}>
        <Routes>
          <Route path='/' element = { <HomePage/>} />
          <Route path='/home' element={ <Navigate to='/'/> }/>
          <Route path='/catalog' element = { <CatalogPage/>} />
          <Route path='/offers' element = { <OffersPage/>} />                
          <Route path='/shipments' element = { <ShipmentsPage/>} />
          <Route path='/contact-us' element = { <ContactPage/>} />
          <Route path='/*' element={ <NotFoundPage/> }/>        
        </Routes>
      </div>

      <Footer />

    </BrowserRouter>
    </>
  )
}

export default App
