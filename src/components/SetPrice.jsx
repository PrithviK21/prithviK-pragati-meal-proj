import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import useFoodData from "../context/foodContext";

function SetPrice() {
  const [selectedCategory, setSelectedCategory] = useState("Chicken");
  const [selectedMealID, setSelectedMealID] = useState(null);
  const { categories, mealList, addPrice } = useFoodData();
  const filterMeals = () => {};
  return (
    <Container fluid className="category-container">
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Choose a Category</Form.Label>
            <Form.Select
              onChange={(e) => setSelectedCategory(e.target.value)}
              value={selectedCategory}
            >
              {categories.map((category) => (
                <option value={category.strCategory}>
                  {category.strCategory}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Choose the meal</Form.Label>
            <Form.Select
              onChange={(e) => setSelectedMealID(e.target.value)}
              value={selectedMealID}
            >
              {mealList[selectedCategory].map((mealItem) => (
                <option value={mealItem.idMeal}>{mealItem.strMeal}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default SetPrice;
