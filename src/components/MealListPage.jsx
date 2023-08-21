import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Card,
  Col,
  Container,
  Row,
  CardGroup,
  Button,
  Modal,
} from "react-bootstrap";
import useFoodData from "../context/foodContext";
import useCartData from "../context/cartContext";

function MealListPage() {
  const currCategory = useParams().meal_id;
  // console.log(currCategory);
  const { cart } = useCartData();

  const { mealList, addMealList } = useFoodData();
  // useEffect(() => {
  //   if (!mealList.hasOwnProperty(currCategory)) {
  //     const getList = async () => {
  //       const res = await axios.get(
  //         `https://www.themealdb.com/api/json/v1/1/filter.php?c=${currCategory}`
  //       );
  //       addMealList(currCategory, res.data.meals);
  //     };
  //     getList();
  //   }
  // }, []);
  // console.log(mealList);

  return (
    <Container className="meal-container" fluid>
      <CardGroup>
        {mealList[currCategory]?.map((meal) => (
          <MealItem key={meal.strMeal} meal={meal} />
        ))}
      </CardGroup>
    </Container>
  );
}

const MealItem = ({ meal }) => {
  const { addToCart } = useCartData();
  const [showModal, setshowModal] = useState(false);
  const handleClose = () => setshowModal(false);
  const addItem = () => {
    addToCart(meal);
    setshowModal(true);
  };
  return (
    <Col md={3} className="mb-3">
      <Card className="h-100">
        <Card.Img variant="top" src={meal.strMealThumb} loading="loading" />
        <Card.Body>
          <Card.Title>{meal.strMeal}</Card.Title>
          <Button onClick={addItem}>Add to Cart</Button>
        </Card.Body>
      </Card>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Alert!</Modal.Title>
        </Modal.Header>
        <Modal.Body>{`Added ${meal.strMeal} to cart successfully!`}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Col>
  );
};

export default MealListPage;
