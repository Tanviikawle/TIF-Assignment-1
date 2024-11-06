import React from 'react'
import ingredient from '../../assets/ingredients.jpg'
import './About.css'

const About = () => {
  return (
    <div style={{ padding: '0px' }} className='container-fluid aboutSection '>
      <div className='row d-flex justify-content-center about'>
        <div className='col-lg-5 ingredientImg'>
          <img src={ingredient} alt='ingredients' />
        </div>
        <div className='col-lg-4 col-md-12 d-flex flex-column justify-content-center align-flex-start aboutText'>
          <h1 className='aboutHeading mb-3'>About Us</h1>
          <p className='subHeading'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>
          <button className="btn btn-danger rounded px-4 py-2 mt-3">Read More</button>
        </div>
      </div>
    </div>
  )
}

export default About
