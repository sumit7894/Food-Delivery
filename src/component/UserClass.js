import React from "react";

class UserClass extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            count :0,
            count2 : 1,   
        };
    }
    render(){
        const {name,location,contact} = this.props;
        return(
            <div className="user-card">
                <h1>Name : {name}</h1>
                <h2> Location : {location} </h2>
                <h3>Contact : {contact}</h3>
                <h3>State variable Count value= {this.state.count} and count2 = {this.state.count2} </h3>
            </div>
        )
    }
}
export default UserClass;