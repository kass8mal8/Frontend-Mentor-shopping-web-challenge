import React from "react";
import "./style.css";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faMinus } from '@fortawesome/free-solid-svg-icons' 
import Header from './Header'
export default function App() {
  return (
    <div>
      <Header />
      <FontAwesomeIcon icon={faMinus}  />
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
