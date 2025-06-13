import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import { HomePage } from './pages/HomePage'
import { ShoppingCartPage } from './pages/ShoppingCartPage'
import { CatalogPage } from './pages/CatalogPage'
import { OffersPage } from './pages/OffersPage'
import { ShipmentsPage } from './pages/ShipmentsPage'
import { ContactPage } from './pages/ContactPage'
import { PoliciesPage } from './pages/PoliciesPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ProductDetails } from './pages/ProductDetails'

import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'


function App() {

  return (
    <>
    <BrowserRouter>

      <Header />
      <NavBar />
      
      <div className="page-container">
        <Routes>
          <Route path='/' element = { <HomePage/>} />
          <Route path='/home' element={ <Navigate to='/'/> }/>
          <Route path='/shopping-cart' element = { <ShoppingCartPage/>} />
          <Route path='/catalog' element = { <CatalogPage/>} />
          <Route path='/offers' element = { <OffersPage/>} />                
          <Route path='/shipments' element = { <ShipmentsPage/>} />
          <Route path='/contact-us' element = { <ContactPage/>} />
          <Route path='/policies' element = { <PoliciesPage/>} />
          <Route path="/producto/:id" element={<ProductDetails />} />
          <Route path='/*' element={ <NotFoundPage/> }/>        
        </Routes>
      </div>    

      <Footer />  

    </BrowserRouter>
    </>
  )
}

export default App
