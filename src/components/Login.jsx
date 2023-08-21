import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import useAuthData from "../context/authContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuthData();
  const navigate = useNavigate();
  const handleLogin = () => {
    const success = login(username, password);
    success ? navigate("/") : alert("Wrong username password");
  };

  return (
    <Container fluid className="category-container">
      Login
      <Row className="justify-content-center">
        <Col md={3}>
          username
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></Form.Control>
          password
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
          <Button onClick={handleLogin}>Login</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
