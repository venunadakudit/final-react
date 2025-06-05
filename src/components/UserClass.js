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
      console.log(this.props.name + " child constructor")
  }
   componentDidMount(){ // componentDidMount is for call the API's
    console.log(this.props.name + " child conponentDidMount");
   }
    render() {
      console.log(this.props.name + " child render");
      const {name, location, Contact} = this.props; // this is called distructuring
      const  {count} = this.state;
      return (
        <div className="user-card">
          <h1>Count = {count}</h1>
          <button onClick={()=>{ 
              // this.state.count = this.state.count + 1; // NEVER UPDATE STATE VARIABLES DIRECTLY
              this.setState({
                   count :  this.state.count + 1 //whenever state variable update the count, React will rerender the component
              });
            }}
          >
            Count Increase</button>
          <h2>Name: {name}</h2>
          <h3>Location: {location}</h3>
          <h4>Contact: {Contact}</h4>
          <h5>Class Based component</h5>
        </div>
      );
    }
  } 
  
  export default UserClass;