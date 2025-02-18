import React from "react";
import SectionHeadline from "../../Components/SectionHeadLine";
import useEntity from "../../Hooks/useEntity";
import ProductCard from "../../Components/ProductCard";

const Products = () => {
  const [products] = useEntity("/products");

  if (!products.length) return <p>No products found</p>;
  return (
    <div>
      <SectionHeadline
        heading={"CRIBS & BASKETS"}
        subHeading={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp."
        }
      />

      <div className="grid lg:grid-cols-4 md:grid-cols-2 lg:gap-6 gap-2 mb-12">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
