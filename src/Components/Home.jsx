import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./Home.css"

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
      const res = await axios.get(`http://localhost:4000/getbyid/${id}`);
      setuser(res.data.res)
      console.log(res, "user");
    } catch (err) {
      navigate("/");
    }
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <>
    {/* <Container className="dashboard-container">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="user-card shadow">
            <Card.Body>
              <Card.Title className="text-center">
                Welcome, {user.name}
              </Card.Title>
              <Card.Text>
                <strong>Phone:</strong> {user.phone}
              </Card.Text>
              <Card.Text>
                <strong> Email:</strong> {user.email}
              </Card.Text>
              <div className="text-center">
                <Button variant="danger" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container> */}
      <h1>welcome, {user.name}</h1>
      <h2>your phone number is: {user.phone}</h2>
      <h2>Email: {user.email}</h2>
      <button onClick={handleLogout}>logout</button>
    </>
  );
}
