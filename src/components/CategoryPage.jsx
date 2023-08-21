import React from "react";
import { Col, Container, Row, Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFoodData from "../context/foodContext";

function CategoryPage() {
  const { categories } = useFoodData();
  return (
    <Container className="category-container" fluid>
      <CardGroup>
        {categories?.map((category) => (
          <CategoryItem key={category.idCategory} category={category} />
        ))}
      </CardGroup>
    </Container>
  );
}

const CategoryItem = ({ category }) => {
  return (
    <Col md={3} className="mb-3">
      <Link to={`/meal/${category.strCategory}`}>
        <Card className="h-100">
          <Card.Img
            variant="top"
            src={category.strCategoryThumb}
            loading="loading"
          />
          <Card.Body>
            <Card.Title>{category.strCategory}</Card.Title>
            <Card.Text>
              {category.strCategoryDescription.substring(0, 200) + "....."}
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default CategoryPage;
