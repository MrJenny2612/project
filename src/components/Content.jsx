import React from 'react'


export default function () {

    var name = "Jenish";
    var age = 22; 
    var isactive = true;
    var user = {
      firstname: "Patel",
      lastname: "Jenish"
    };

  return (
    <div className="container" >
          {/* <h1> Name  {name}</h1>
          <h3> Age = {age}</h3>
          <h3> User Firstname = {user.firstname}</h3>
          <h3> User Lastname = {user.lastname}</h3>
          <h3>isActive = {isactive == true ? "is active" : "is Not Active"}</h3> */}
          <div class="content">
            <h2>Welcome to Our Portfolio Website</h2>
            <p>This is an exmplae of the left-aligned content section with a right-aligned image section.</p>
          </div>
          <div class="image">
            <img  src="src\images\image.jpg" alt="Image"></img>
          </div>
         
    </div>
  )
}
