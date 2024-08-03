import React from "react"; 
  // React.component coming form "react";
 class UserClass extends React.Component {
    render() {
      return (
        <div className="user-card">
          <h2>Name: Gopal</h2>
          <h3>Location: Hyderabad</h3>
          <h4>Contact: @venunadakuditi</h4>
          <h5>Class Based component</h5>
        </div>
      );
    }
  } 
  
  export default UserClass;