import React from "react"; 
  // React.component coming form "react";
 class UserClass extends React.Component {
  constructor(props){
    super(props);
                      // THis is the best place to create state variables and recieve the props.
    this.state = {
      count: 0, //first variable
      count2: 2, //second variable
      }
  }
    render() {
      const {name, location, Contact} = this.props; // this is called distructuring
      const  {count, count2} = this.state;
      return (
        <div className="user-card">
          <h1>Count = {count}</h1>
          <h1>Count2 = {count2}</h1>
          <h2>Name: {name}</h2>
          <h3>Location: {location}</h3>
          <h4>Contact: {Contact}</h4>
          <h5>Class Based component</h5>
        </div>
      );
    }
  } 
  
  export default UserClass;