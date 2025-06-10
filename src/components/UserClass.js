import React from "react"; 
  // React.component coming form "react";
 class UserClass extends React.Component {
  constructor(props){
    super(props);
                      // THis is the best place to create state variables and recieve the props.
    this.state = {
      userInfo:{
        name : "venu",
        location : "Hyd",
        avatar_url: "dummy_img"
      },
    };
      //console.log(this.props.name + " child constructor")
  }
   async componentDidMount(){ // componentDidMount is for call the API's
    //console.log(this.props.name + " child conponentDidMount");
      const data = await fetch("https://api.github.com/users/akshaymarch7");
      const json = await data.json();

      this.setState({   //Updating stage start here
        userInfo : json,
      });
      console.log(json);
   }
    render() {
      //console.log(this.props.name + " child render");
     // const {name, location, Contact} = this.props; // this is called distructuring 
     const {name, location, avatar_url} = this.state.userInfo;
     //debugger;
      return (
        <div className="user-card">
           <img src={avatar_url} style={{width:"200px", height:"200px"}} />
          <h2>Name: {name}</h2>
          <h3>Location: {location}</h3>
         
          
        </div>
      );
    }
  } 
  
  export default UserClass;