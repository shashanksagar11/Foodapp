import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
    constructor(props){
        super(props);
        // console.log("Parent Constructor");
    }
    componentDidMount(){
        // console.log("parent Component Did Mount");
    }
  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is Class based Componets</h2>
        <UserClass name={"First (classes)"} location={"Bangalore class"} />
        
      </div>
    );
  }
}

export default About;
