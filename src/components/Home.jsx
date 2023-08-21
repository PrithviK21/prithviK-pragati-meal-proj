import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuthData from "../context/authContext";

function Home() {
  const { isLoggedIn } = useAuthData();

  return (
    <Container fluid>
      <Row>
        {/* <Image></Image> */}
        <div className="hero">
          <h1>Welcome to Smiggy!</h1>
          <Button>
            {isLoggedIn ? (
              <Link to="categories">See Categories</Link>
            ) : (
              <Link to="login">Login</Link>
            )}
          </Button>
        </div>
      </Row>
    </Container>
  );
}

export default Home;
