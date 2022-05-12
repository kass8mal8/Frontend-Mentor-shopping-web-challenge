import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBars,faCartShopping } from '@fortawesome/free-solid-svg-icons' 
import "./style.css"

const Header =()=>{
  const avatar="https://aakashhelloworld.github.io/css2/images/avatar-shanai.png"
  return(
    <div>
        <div className="h-div">
        <FontAwesomeIcon icon={faBars} className="h-div--bars"></FontAwesomeIcon><h3>sneakers</h3>
        <FontAwesomeIcon icon={faCartShopping} className="h-div--cart"></FontAwesomeIcon>
        <img src={avatar} width="50px" alt="avatar"/>
        </div>
    </div>
  )
}
export default Header