import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import image from '../../images/Random/yelp.jpg'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <NavLink to={`/`}><img className="image is-16x16" src={image} alt='' style={{ height: '65px', float: 'right' }} /></NavLink>
                <Link to='/' className='brand-logo'>Restaurants</Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    )
}

export default Navbar