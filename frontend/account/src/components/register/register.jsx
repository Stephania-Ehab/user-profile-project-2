import React, { useState } from 'react';
import authService from '../services/authService';

const Register = () => {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await authService.register(formData.first_name, formData.last_name, formData.email, formData.password);
            alert(response.data.details);
        } catch (error) {
            console.log(error.response.data);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <label for="first_name">First Name:</label>
                <input type="text" name="first_name" placeholder="First Name" onChange={handleChange} /> <br/>
                <label for="last_name">Last Name:</label>
                <input type="text" name="last_name" placeholder="Last Name" onChange={handleChange} /> <br/>
                <label for="email">Email:</label>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} /> <br/>
                <label for="password">Password:</label>
                <input type="password" name="password" placeholder="Password" onChange={handleChange} /> <br/>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
