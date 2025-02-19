import React from "react";
import SectionHeadline from "../../Components/SectionHeadLine";
import useEntity from "../../Hooks/useEntity";
import ProductCard from "../../Components/ProductCard";

const NewArrival = () => {
  const [products] = useEntity("/products");

  if (!products.length) return <p>No products found</p>;
  return (
    <div>
      <SectionHeadline
        heading={"NEW ARRIVALS"}
        subHeading={
          "Consectetur adipiscing elit ut aliquam duis convalli convalli tellus id interdum ve."
        }
      />

      <div className="grid lg:grid-cols-4 md:grid-cols-2 lg:gap-6 gap-2 mb-12">
        {products
          .filter((product) => product.category_id === "6")
          .map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>
    </div>
  );
};

export default NewArrival;
