import React from 'react'

const Main=()=>{
  const image="https://lvcas-ca.github.io/E-commerce-product-page/images/image-product-1.jpg"
  return (
    <div className="m-div">
      <div className="m-div--image">
         <img src={image} />
      </div>
      <div className="m-div--cont">
          <h2>sneakers company</h2>
          <h3>
            Fall Limited Edition Sneakers
          </h3>
          <p>
            These low-profile sneakers are your perfect casual wear companion featuring a durable rubber outer sole, they'll withstand everything the weather can offer. 
          </p>
          <div className="m-div--list">
          <ul>
             <li>$125.00</li>
             <li>50%</li>
             <li>$250.00</li>
          </ul>
          </div>
      </div>
    </div>
  )
}
export default Main