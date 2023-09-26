import UserClass from "./UserClass";
import User from "./User";

const Contact =()=>{
    return(
        <div>
            <h1>Contact Us Page</h1>
            <User name={"Sumit Maurya function"} location ={"Prayagraj function"} contact={"smithdashdash@gmail.com function"}/>
            <UserClass name={"Sumit Maurya class"} location ={"Prayagraj class"} contact={"smithdashdash@gmail.com class"}/>
        </div>
    );
};
export default Contact;