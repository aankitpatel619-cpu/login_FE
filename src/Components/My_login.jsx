import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function My_login() {
  const [phone, setphone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Phone:", phone);
    console.log("Password:", password);

    let res = await axios.post("http://localhost:4000/login", {
      phone: phone,
      password: password,
    });
    console.log(res.data,"res");
    

    if (res.data.login) {
      navigate(`/home/${res.data.user._id}`);
    }else{
      setError("invalid credentials.");
    }
  };

  const handleregister = () => {
    navigate("/register");
  }

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setphone(e.target.value)}
          className="login-input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
          required
        />
        {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}
        <button type="submit" className="login-button">
          Login
        </button>
        <p>new user? <button onClick={handleregister} className="btn1">Signup</button></p>
      </form>
    </div>
  );
}

export default My_login;
