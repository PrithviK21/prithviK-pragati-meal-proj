import { createContext, useContext, useState } from "react";

export const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  const [categories, setCategories] = useState(null);
  const [mealList, setMealList] = useState({});

  const addMealList = (category, meals) => {
    setMealList({ ...mealList, [category]: meals });
  };
  const addAllMeals = (allMeals) => {
    setMealList(allMeals);
  };

  const addPrice = (mealID, price, category) => {
    let newList = mealList[category].map((item) => {
      if (item.idMeal == mealID) {
        item["price"] = price;
      }
      return item;
    });
    setMealList({ ...mealList, [category]: newList });
    console.log(newList);
  };

  return (
    <FoodContext.Provider
      value={{
        categories,
        setCategories,
        mealList,
        addMealList,
        addAllMeals,
        addPrice,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

const useFoodData = () => useContext(FoodContext);
export default useFoodData;
