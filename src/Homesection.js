import React from 'react'
import { Link } from 'react-router-dom'
import "./Homesectioncss.css"

function Homesection() {
  return (
    <div className="container">
        <div className="leftHome">
          <h1>
            Find in Interesting Services And Buy  Now Anything
          </h1>
          <p className="quote">
            Choose and shop some of the amazing wonderful carefully 
            crafted footwear, We are here to serve you and  give you the
            best of our designs. <br/>
            Happy Shopping.......
          </p>
          <div className="ButtonSet">
    
            <button className="Button">
              <Link style={{ textDecoration: "none", color: "white" }}>
                GET STARTED
              </Link>
            </button>
            <button className="ButtonTwo">
              <Link style={{ textDecoration: "none", color: "black" }}>
                LEARN MORE
              </Link>
            </button>
          </div>
        </div>

        <div className="rightHome">
           
          <div className='image-section'>
         <h3>CEO</h3>
          </div>
        </div>
      </div>
  )
}

export default Homesection