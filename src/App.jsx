import React, { useState } from "react";
import "./App.css";

function App() {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault();
        const formError = validateForm(formData);       
        setErrors(formError)

        if((Object.keys(formError).length) == 0){
          console.log("Suceesfully Submited", formData);
        }
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = (data) =>{
      let errors = {};

      if(!data.firstname){
        errors.firstname = "First Name is Required"
      }
      if(!data.lastname){
        errors.lastname = "Last Name is Required"
      }
      if(!data.username){
        errors.username = "User Name is Required"
      }
      if(!data.email){
        errors.email = "Email is Required"
      }
      if(!data.password){
        errors.password = "Password is Required"
      }

      return errors;
    }

    return (
        <div className="form-container">
            <h1>Registration Form</h1>
            <div className="form-wrapper">
                <form onSubmit={handleSubmit}>
                    <div className="from-control">
                        <input
                            type="text"
                            name="firstname"
                            placeholder="First Name"
                            onChange={handleChange}
                            value={formData.firstname}
                        />
                        {errors.firstname && <p>{errors.firstname}</p>}
                    </div>
                    <div className="from-control">
                        <input
                            type="text"
                            name="lastname"
                            placeholder="Last Name"
                            onChange={handleChange}
                            value={formData.lastname}
                        />
                        {errors.lastname && <p>{errors.lastname}</p>}
                    </div>
                    <div className="from-control">
                        <input
                            type="text"
                            name="username"
                            placeholder="User Name"
                            onChange={handleChange}
                            value={formData.username}
                        />
                        {errors.username && <p>{errors.username}</p>}
                    </div>
                    <div className="from-control">
                        <input
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            onChange={handleChange}
                            value={formData.email}
                        />
                        {errors.email && <p>{errors.email}</p>}
                    </div>
                    <div className="from-control">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={handleChange}
                            value={formData.password}
                        />
                        {errors.password && <p>{errors.password}</p>}
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}

export default App;
