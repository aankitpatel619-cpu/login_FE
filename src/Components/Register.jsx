import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Register.css";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();
  const { register, handleSubmit,formState:{errors} } = useForm();



  //  const postregister = async () => {
  //       let senddata = await axios.post("http://localhost:4000/register")
  //   }

  const onSubmit = async (data) => {
        let body = {
            name : data.name,
            email :data.email,
            age :data.age,
            phone : data.phone,
            password : data.password
        }
        let res = await axios.post("https://login-be-zklv.onrender.com/register", body)
        alert("the data is stored successfully")
        

        console.log(res);
        

    }


    
  


  return (
    <>
      <div className="signup-container">
        <h1>Register</h1>
        <form className = "signup-form" onSubmit={handleSubmit(onSubmit)}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            {...register("name", { required: true })}
            {...errors.name && <span className="error">Name is required</span>}
            placeholder="enter your name"
            required
          />
          <label>Email:</label>
          <input
            type="text"
            name="email"
            {...register("email", { required: true })}
            {...errors.name && <span className="error">Name is required</span>}
            placeholder="enter your email"
            required
          />
          <label>Age:</label>
          <input
            type="number"
            name="age"
            {...register("age", { required: true })}
            placeholder="Age"
            required
          />
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            {...register("phone", { required: true })}
            placeholder="Phone"
            required
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            {...register("password", { required: true })}
            placeholder="Password"
            required
          />
          <button type="submit" className="btn" onClick={onsubmit}>Submit</button>
        </form>
      </div>
    </>
  );
}
