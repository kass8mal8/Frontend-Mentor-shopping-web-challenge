import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBars,faCartShopping } from '@fortawesome/free-solid-svg-icons' 
import "./style.css"

const Header =()=>{
  return(
    <div>
        <div className="h-div">
        <FontAwesomeIcon icon={faBars} className="h-div--bars"></FontAwesomeIcon><p>sneakers</p>
        <FontAwesomeIcon icon={faCartShopping} className="h-div--cart"></FontAwesomeIcon>
        </div>
    </div>
  )
}
export default Header