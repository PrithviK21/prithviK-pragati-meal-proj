import React, { useState } from "react";
import { Col, Container, Row, Image, Button, Modal } from "react-bootstrap";
import useCartData from "../context/cartContext";

function Cart() {
  const { cart, clearCart } = useCartData();
  const [showModal, setshowModal] = useState(false);
  const handleClose = () => setshowModal(false);

  const addOrder = () => {
    let prevOrders = localStorage.getItem("orders");
    if (prevOrders == null) {
      localStorage.setItem(
        "orders",
        JSON.stringify([{ cartItems: [...cart], orderNo: 1 }])
      );
    } else {
      prevOrders = JSON.parse(prevOrders);
      console.log(cart);

      localStorage.setItem(
        "orders",
        JSON.stringify([
          ...prevOrders,
          { cartItems: [...cart], orderNo: prevOrders.length + 1 },
        ])
      );
    }
    clearCart();
    setshowModal(true);
  };
  // console.log(cart);

  return (
    <Container className="cart-container" fluid>
      {cart.length > 0 ? (
        <div>
          {cart.map((cartItem) => (
            <CartItem item={cartItem} key={cartItem.idMeal} />
          ))}
          <Button onClick={addOrder}>Order</Button>
        </div>
      ) : (
        <>
          <h1>Cart is Empty!</h1>
          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Alert!</Modal.Title>
            </Modal.Header>
            <Modal.Body>{`Order successful!`}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </Container>
  );
}

function CartItem({ item }) {
  const { removeFromCart } = useCartData();
  return (
    <>
      <Row>
        <div className="cart-item-container mb-5">
          <Image src={item.strMealThumb} className="" />
          <h3>{item.strMeal}</h3>
          <h3>x {1}</h3>
          <Button variant="danger" onClick={() => removeFromCart(item)}>
            Remove from Cart
          </Button>
        </div>
      </Row>
    </>
  );
}

export default Cart;
