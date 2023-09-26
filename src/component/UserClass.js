import React from "react";

class UserClass extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            count :0,
        };
    }
    render(){
        const {name,location,contact} = this.props;
        return(
            <div className="user-card">
                {/* IN CLASS COMPONENT NEVER UPDATE STATE VARIABLE DIRECTLY   */}
                <h1>Count : {this.state.count}</h1>
                <button onClick={() => {
                    this.setState({
                        count:this.state.count +1,
                    });
                }}>
                    Count Incrementor</button>
                <h1>Name : {name}</h1>
                <h2> Location : {location} </h2>
                <h3>Contact : {contact}</h3>
            </div>
        )
    }
}
export default UserClass;