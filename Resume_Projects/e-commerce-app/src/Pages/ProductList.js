import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'

const container = {

}

const title = {
  margin: '20px',
}

const filterContainer = {
  display: 'flex',
  justifyContent: 'space-between',
}

const filter = {
  margin: '20px',
}

const ProductList = () => {
  return (
    <div style={container}>
      <Announcement/>
      <Navbar/>
      <h1 style={title}>Dresses</h1>
      <div style={filterContainer}>
        <div style={filter}>Filter1</div>
        <div style={filter}>Filter2</div>
      </div>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default ProductList