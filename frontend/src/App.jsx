import {BrowserRouter,Routes,Route} from 'react-router-dom';
import "./App.css"

import Login from "./landing_page/Pages/Login";
import Signup from "./landing_page/signup/Signup";
import About from "./landing_page/about/About";
import Product from "./landing_page/products/Product";
import Pricing from "./landing_page/pricing/Pricing";
import Support from "./landing_page/support/Support";
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';
import Homes from '../src/landing_page/Pages/homes'

      


function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Homes/>}></Route>
       <Route path="/login" element={<Login />} />
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/product' element={<Product/>}></Route>
      <Route path='/pricing' element={<Pricing/>}></Route>
      <Route path='/support' element={<Support/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
