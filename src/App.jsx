import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { HashRouter } from 'react-router-dom';

import { HomePage } from './pages/HomePage'
import { FavoritePage } from './pages/FavoritePage'
import { ShoppingCartPage } from './pages/ShoppingCartPage'
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
    <HashRouter>

      <Header />
      <NavBar />
      
      <div className="page-container">
        <Routes>
          <Route path='/' element = { <HomePage/>} />
          <Route path='/home' element={ <Navigate to='/'/> }/>
          <Route path='/favorite' element = { <FavoritePage/>} />
          <Route path='/shopping-cart' element = { <ShoppingCartPage/>} />
          <Route path='/catalog' element = { <CatalogPage/>} />
          <Route path='/offers' element = { <OffersPage/>} />                
          <Route path='/shipments' element = { <ShipmentsPage/>} />
          <Route path='/contact-us' element = { <ContactPage/>} />
          <Route path='/*' element={ <NotFoundPage/> }/>        
        </Routes>
      </div>    

      <Footer />  

    </HashRouter>
    </>
  )
}

export default App
