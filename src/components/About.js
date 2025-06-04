import User from "./User";
import UserClass from "./UserClass";
const About = () => {
    return (
        <div>
            <h1>About</h1>
            <p>This is the about page content</p> 
            {/* <User name = {"Venu from (function)"} /> */}
            <UserClass name = {"Venu from (Class)"} location = {"Hyderabad!!"} Contact = {"@venunadakuditi111"} />
        </div>
    );
};
export default About;