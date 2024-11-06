import React from 'react'
import './Header.css'
import redVector from '../../assets/Vector1.png'
import pizzaImg from '../../assets/pizza.jpg'

const Header = () => {
  return (
    <header className='mb-5'>
      <main className='row heroSection'>
        <div className='col-lg-6 col-md-12 col-sm-12 order-lg-1 order-2' >
          <div className='intro align-self-start'>
            <h1 className='mt-4 mb-4 mainHeading'><b>Discover the <span style={{ color: "red" }}>Best</span> Food and Drinks</b></h1>
            <p className='mb-5 subHeading'>Naturally made Healthcare Products for the better care & support of your body.</p>
            <button className="btn btn-danger btn-lg" type="submit">Explore Now!</button>
          </div>
        </div>
        <div className='col-lg-6 col-md-12 col-sm-12 image-container d-flex order-lg-2 order-1' >
          <img src={pizzaImg} alt="Background" className="background-image" />
          <img src={redVector} alt="Overlay" className="overlay-image" />
        </div>
      </main>
    </header>
  )
}

export default Header
