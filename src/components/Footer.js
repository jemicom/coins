import React from 'react'
import { FaWarehouse,  FaBeer, FaRegBell} from 'react-icons/fa';

const footerStyle = {
    height : '500px',
    background : '#efefef'
}

const Footer = () => {
  return (
    <footer style={footerStyle}>
        <FaRegBell />
        <FaBeer  style={{color:'red'}} />
        <FaWarehouse  style={{color:'red'}} />
        <address> copy &copy; { new Date().getFullYear() } </address>
    </footer>
  )
}

export default Footer
