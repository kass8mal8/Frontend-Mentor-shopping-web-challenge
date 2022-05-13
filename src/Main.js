import React from 'react'

const Main=()=>{
  const image="https://lvcas-ca.github.io/E-commerce-product-page/images/image-product-1.jpg"
  return (
    <div className="m-div">
      <div className="m-div--image">
         <img src={image} />
      </div>
      <div className="m-div--cont">
          <h2>sneakers company</hh2>
      </div>
    </div>
  )
}
export default Main