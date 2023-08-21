import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import CategoryPage from "./components/CategoryPage";
import MealListPage from "./components/MealListPage";
import { Container } from "react-bootstrap";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import axios, { all } from "axios";
import useFoodData from "./context/foodContext";
import Cart from "./components/Cart";
import OrderHistory from "./components/OrderHistory";
import SetPrice from "./components/SetPrice";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";

function App() {
  const { categories, setCategories, mealList, addMealList, addAllMeals } =
    useFoodData();

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      setCategories(res.data.categories);
    };
    getCategories();
  }, []);
  useEffect(() => {
    const allMeals = {};
    categories?.forEach(async (category) => {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`
      );
      allMeals[category.strCategory] = res.data.meals;
    });
    addAllMeals(allMeals);
    console.log("Loaded meals");
    // addMealList(category.strCategory, res.data.meals);
  }, [categories]);
  // console.log(mealList);
  return (
    <Container className="app-container" fluid>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<CategoryPage />} />
          <Route path="/meal/:meal_id" element={<MealListPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/history" element={<OrderHistory />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/setprice"
            element={
              <ProtectedRoute>
                <SetPrice />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
