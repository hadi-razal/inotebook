import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup(props) {

    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = credentials;
        const response = await fetch("http://localhost:3001/api/auth/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            navigate("/");
            props.showAlert("Account Created Successfully","success");



        }
        else {
            props.showAlert("Invalid credentials","danger");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }


    return (
        <div className='container mt-3'>
             <h2>Create you account </h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" name='name' onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <br/>
                    <small id="email" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name='email' onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" name='password' onChange={onChange} minLength={5} required />
                </div>
                <div className="form-group">
                    <label htmlFor="cpassword">Confirm Password</label>
                    <input type="cpassword" className="form-control" id="cpassword" name='cpassword' onChange={onChange} />
                </div>
                <button  type="submit" className="btn btn-primary my-3">Submit</button>
            </form>
        </div>
    )
}

export default Signup