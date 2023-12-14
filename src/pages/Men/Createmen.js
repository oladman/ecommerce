import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../Create/Create.css'
function Create() {
  return (
    <div className="cover-admin-body">
      
      <div className="admin-btn-class">
      <h1>Select a Category to Post</h1>
        <button>
          <Link to={'/Createmen'} className="admin-link">Post Men Slippers/Shoes</Link>
        </button>
        <button>
          <Link   to={'/Createwomen'} className="admin-link">Post Women Slippers/Shoes</Link>
        </button>
        <button>
          <Link   to={'/Createbelts'} className="admin-link">Post Unisex Belts </Link>
        </button>
        <button>
          <Link  to={'/Createkids'}  className="admin-link"> Post Kids Slippers/Shoes</Link>
        </button>
      </div>
    </div>
  );
}

export default Create;
