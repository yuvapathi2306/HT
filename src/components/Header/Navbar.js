import './Navbar.css'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import{FaBars, FaTimes} from 'react-icons/fa'
// import Banner from '../Carousel/Banner'
// import { Link } from 'react-router-dom'
import logo from "./logoo.jpg";

function Navbar() {


    const [icon , setIcon] = useState(false)
    const handleClick = () => {
        setIcon(!icon)
    }
    const closeSideDrawer= () => {
        setIcon(false)
    }
  return (
    <>
    <nav className='navbar'>
        <div className= 'menu-icon'
        onClick={handleClick}>
            {
                icon ? <FaTimes
                className='fa-times'></FaTimes> :
                <FaBars className='fa-bars'></FaBars>
            }
        </div>
        <img src={logo} alt='logo' height={70} width={200} className='logo-main'/>

        <div className='menu'>

  
        <ul ul className={

            icon ? 'nav-menu active' : 'nav-menu'
        }>


            <li>

        <Link to = '/' className='nav-links' onClick={closeSideDrawer}>Home</Link>
        </li>
        <li>
        <Link to = '/Whoweare' className='nav-links' onClick={closeSideDrawer}>Whoweare</Link>
        </li>
        <li>
        <Link to = '/Whatwedo' className='nav-links' onClick={closeSideDrawer}>Whatwedo</Link>
        </li>
        <li>
        <Link to = '/News' className='nav-links' onClick={closeSideDrawer}>News</Link>
        </li>
        <li>
        <Link to = '/contactus' className='nav-links' onClick={closeSideDrawer}>Contact-us</Link>
        </li>
        
        </ul>
        </div>
    
        </nav>
        </>
    
  )
}

export default Navbar;