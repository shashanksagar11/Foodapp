import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        userInfo:"Dummy",
        location: "Default",
    };
    // console.log(this.props.name + "Child Constructor");
  }
  async componentDidMount(){
    // console.log(this.props.name + "parent Component Did Mount");

    const data = await fetch(" ");
    const json = await data.json();

    console.log(json);

    this.setState({
        userInfo: json,
    })
    console.log(json);
  }
  render() {
   
    // console.log(this.props.name + "Child Render");

    const {name , location} = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name: {this.state.userInfo.name}</h2>
        <h2>Location: {location}</h2>
        <h2>Contact: @shashank</h2>
      </div>
    );
  }
}

export default UserClass;
