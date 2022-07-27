import React from 'react'
import Nav from './Nav'

const headerStyle = {
    height : '150px',
    background : 'skyblue'
}

const h1Style = { 
    margin:0, 
    padding:0,
    textAlign : 'center',
    lineHeight: '100px'
}

const Header = ({ title , menuItem }) => {
    
  return (
    <header style={headerStyle}>
        <h1 style={h1Style}>{ title }</h1>
        <Nav menuItem={menuItem}/>
    </header>
  )
}

export default Header
