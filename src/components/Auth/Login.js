import React,{useState} from 'react';
import Button from "../../styledElements/Button";

const Login = () => {
    const [user, setUser] = useState({email:"",password:""});
    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(user);
    };
    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="form-group">
                <input 
                    type="text" 
                    id="email" 
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    required 
                    autoComplete="email" 
                    autoFocus 
                />
                <label htmlFor="email">Email Address *</label>
            </div>
            <div className="form-group">
                <input 
                    type="password" 
                    id="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange} 
                    required 
                />
                <label htmlFor="password">Password *</label>
            </div>
            <Button color="primary">Login</Button>
        </form>
    );
};

export default Login;
