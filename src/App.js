import React, { useState, useEffect } from 'react'
import Loader from './components/Loader'
import Navigation from './components/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import ProductCard from './components/ProductCard';
import { ProductDetail } from './components/ProductDetail';
import {Route, Routes, Switch, BrowserRouter} from 'react-router-dom';
import AddProduct from './components/AddProduct' ;
import './App.css'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  const [products, setProducts] = useState([]);
  const [productDetail , setProductDetail] = useState('');

  

  useEffect(() => {
    // console.log(products)
    // axios.get('http://localhost:8080/getAllProducts')
    // .then(products => setProducts()).then(console.log(products))
    // .catch(err =>console.log(err))
    fetch('http://localhost:8080/getAllProducts').then(res=>res.json())
    .then((res)=>{
      
      // console.log(res)
        setProducts(res)
        console.log(products)
      
      
      // 
    })
  }, [])
  
  return (
    <>
     
    <Navigation />
    
    

      
      {productDetail ?
      <div className='productDetail'>
        {
          productDetail && <ProductDetail productDetail={productDetail} />
        }
      </div> :<Loader /> }
     
      <BrowserRouter>
        


      <Routes>
        <Route path='/home' element={
           <ProductCard list={products} 
           setProductDetail={setProductDetail} className='cardGrid' />
        } ></Route>
        <Route path='/add' element={ <AddProduct /> } ></Route> 
      </Routes>
      
      </BrowserRouter>
      
      
     
    
    </>
  )
}

export default App
