import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

function OrderHistory() {
  const orders = JSON.parse(localStorage.getItem("orders"));
  return (
    <Container fluid className="category-container">
      {orders?.map((orderItem) => (
        <OrderItem item={orderItem} />
      ))}
    </Container>
  );
}

function OrderItem({ item }) {
  //   console.log(orders);
  return (
    <>
      <Row>
        <div className="cart-item-container mb-5">
          <Col>
            <h1>Order {item.orderNo}</h1>
          </Col>
          <Col>
            {item.cartItems.map((subItem) => (
              <div className="d-flex justify-content-between align-items-center w-100">
                <span className="order-item-name">{subItem.strMeal}</span>
                <Image className="order-img" src={subItem.strMealThumb} />
              </div>
            ))}
          </Col>
        </div>
      </Row>
    </>
  );
}

export default OrderHistory;
