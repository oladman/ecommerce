import React from "react";
import "./Example.css";

function Example() {
  return (
    <>
      <div className="grandparent-body">

<div className="children-one">
<img src="./logo.png" />

</div>



<div className="children-two">
<ul className="children-of-two">
    <li>MEN</li>
    <li>WOMEN</li>
    <li>KIDS</li>
    
    

</ul>


</div>



<div className="children-three">
    <input placeholder="Search" className="search-bar"/>


</div>




      </div>
    </>
  );
}

export default Example;
