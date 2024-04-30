import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Inicio from './pag/Inicio'
import NavBar from './navFotter/NavBar'
import Shop from './pag/Shop'
import Product from './pag/Product'
import About from './pag/About'
import Contact from './pag/Contact'
import Usuario from './pag/Usuario'
import ProtectedRoutes from './navFotter/ProtectedRoutes'
import Card from './pag/Card'
import Footer from './navFotter/Footer'

function App() {


  return (
    <BrowserRouter>
    
      <NavBar/> 
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/store" element={<Shop />} />
        <Route path='/store/:id' element={<Product/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/usuario' element={<Usuario/>}/>
        <Route element={<ProtectedRoutes/>}>
          <Route path='/card' element={<Card/>}/>
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
