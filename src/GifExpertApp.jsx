import { useState } from "react";
import {AddCategory} from "./components/AddCategory";
import {GifGrid} from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['south park']);
  const onAddCategory = (newValue) => {
    if (categories.includes(newValue)) return;
    setCategories([newValue, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewValue={onAddCategory} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

