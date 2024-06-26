import Navbar from "./Navbar";
const Login = ()=>{
    return(
<>
        <Navbar />
        <h2>Login Page</h2>
    <div>
        <label htmlFor="username">User Name: </label>
        <input type="text" id="username"/>
    </div> 

    <div>
        <label htmlFor="pass">Password: </label>
        <input type="password" id="pass"/>
    </div> 

    <div>
        <button>Login</button>
    </div>
        
</>
    )

}

export default Login;