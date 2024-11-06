import React from 'react'
import logo from '../../assets/logo.svg'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg mt-3">
            <div className="container-fluid navBg">
                <a className="navbar-brand" href='/'>
                    <img className='navImg' src={logo} alt='food truck logo' />
                </a>
                <form className="d-flex align-items-end" role="search">
                    <button className="btn btn-outline-light" type="submit">Get In Touch</button>
                </form>
            </div>
        </nav>
    )
}

export default Navbar
