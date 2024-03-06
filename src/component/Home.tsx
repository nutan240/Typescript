import React from 'react'
import Main from '../Pages/Main'
import Products from '../Pages/Products'
import FooterHead from '../Pages/FooterHead'
import Footer from '../Pages/Footer'

const Home: React.FC =()=> {
  return (
    <>
    <Main/>
    <Products/>
    <FooterHead/>
    <Footer/>
    </>
  )
}

export default Home