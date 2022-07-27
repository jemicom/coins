import React, {useState} from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const navStyle={
    width :'100%',
    background:'black',
    lineHeight: '50px'
}

const lnbStyle = {
    display:'flex',
    listStyle :'none',
    width: '1000px',
    margin: 'auto',
    justifyContent : 'space-between'
}

const linkStyle ={ 
    color:"#fff"
}
const Nav = ( ) => {
     
  return (
    <nav className='lnb' style={navStyle}>
        <ul style={ lnbStyle }>
            <li><Link style={linkStyle} to="/"  > Home </Link></li>
            <li><Link style={linkStyle} to="/Lists"  > Coin list </Link></li>
            <li><Link style={linkStyle} to="/Details"  > Coin Details </Link></li>
            <li><Link style={linkStyle} to="/About"  > About </Link></li>
        </ul>
    </nav>
  )
}


export default Nav
