import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBars,faCartShopping } from '@fortawesome/free-solid-svg-icons' 

const Header =()=>{
  return(
    <div>
        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
    </div>
  )
}
export default Header