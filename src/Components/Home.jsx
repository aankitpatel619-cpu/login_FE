import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Home.css"
import axios from "axios";
import { BiSolidUserRectangle } from "react-icons/bi";




export default function Home() {
  const [user, setuser] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  // const host = "http://localhost:4000/login"

  useEffect(() => {
    fetchuser();
  }, []);

  const fetchuser = async () => {
    try {
      const res = await axios.get(`https://login-be-zklv.onrender.com/getbyid/${id}`);
      setuser(res.data.res)
      console.log(res, "user");
    } catch (err) {
      navigate("/");
    }
  };

  const handleLogout = () => {
    navigate("/");
    localStorage.removeItem("token")
  };

  return (
    <>
    <div className="container dashboard-container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card shadow">

          <div className="card-body">
            <h4 className="card-title text-center mb-4">
              Welcome, {user.name}
            </h4>

            <p className="card-text">
              <strong>Phone:</strong> {user.phone}
            </p>

            <p className="card-text">
              <strong>Email:</strong> {user.email}
            </p>

            <div className="text-center mt-4">
              <button
                className="btn btn-danger"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
      {/* <h1>welcome, {user.name}</h1>
      <h2>your phone number is: {user.phone}</h2>
      <h2>Email: {user.email}</h2>
      <button onClick={handleLogout}>logout</button> */}
    </>
  );
}
