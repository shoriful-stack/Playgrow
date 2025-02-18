import React from "react";
import useEntity from "../../Hooks/useEntity";

const Category = () => {
  const [categories, , error] = useEntity("/categories");

  if (error) return <p>Error loading categories.</p>;
  if (!categories.length) return <p>No categories found.</p>;

  return (
    <div>
      {categories.map((category) => (
        <div key={category._id}>
          <h3>{category.name}</h3>
          <img src={category.photo} alt={category.name} width={100} />
        </div>
      ))}
    </div>
  );
};

export default Category;
