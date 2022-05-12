import React from "react";
import "./style.css";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBars, faCartShopping} from '@fortawesome/free-solid-svg-icons' 
import Header from './Header'
export default function App() {
  return (
    <div>
      <Header />
      <FontAwesomeIcon icon={faBars}  />
      <FontAwesomeIcon icon={faCartShopping} />
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
