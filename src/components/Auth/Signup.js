import React,{useState} from 'react';
import Button from "../../styledElements/Button";

const Signup = () => {
    const [user, setUser] = useState({
        fName:"",
        lName:"",
        email:"",
        password:""
    });
    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(user);
    };
    return (
        <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <div className="form-group top">
                <input 
                    type="text" 
                    id="firstname"
                    name="fName"
                    value={user.fName}
                    onChange={handleChange}
                    required 
                    autoComplete="given-name" 
                    autoFocus
                />
                <label htmlFor="firstname">Firstname *</label>
            </div>
            <div className="form-group top">
                <input 
                    type="text" 
                    id="lastname"
                    name="lName"
                    value={user.lName}
                    onChange={handleChange} 
                    required 
                    autoComplete="family-name" 
                />
                <label htmlFor="lastname">Lastname *</label>
            </div>
            <div className="form-group">
                <input 
                    type="text" 
                    id="email" 
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    required 
                    autoComplete="email" 
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
                    autoComplete="current-password" 
                    required 
                />
                <label htmlFor="password">Password *</label>
            </div>
            <Button color="primary">Sign Up</Button>
        </form>
    );
};

export default Signup;
