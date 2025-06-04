import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent Constructor");
    }

    componentDidMount(){
        console.log("Parent Mount");
    }
    render(){
         console.log("Parent Render");
         return (   
        <div>
            <h1>About</h1>
            <p>This is the about page content</p> 
            {/* <User name = {"Venu from (function)"} /> */}
            <UserClass name = {"Venu from (Class)"} location = {"Hyderabad!!"} Contact = {"@venunadakuditi111"} />
        </div>
    );
    }
}
// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <p>This is the about page content</p> 
//             {/* <User name = {"Venu from (function)"} /> */}
//             <UserClass name = {"Venu from (Class)"} location = {"Hyderabad!!"} Contact = {"@venunadakuditi111"} />
//         </div>
//     );
// };
export default About;