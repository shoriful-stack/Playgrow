const ProductCard = ({ product }) => {
  const { labels, image, name, category, original_price, price } = product;
  return (
    <div className="bg-white rounded-xl border-gray-200 border px-6 py-9 text-center relative group transition-all duration-300 hover:shadow-sm hover:border-dashed hover:border-gray-300 hover:border-2 overflow-hidden cursor-pointer">
      {/* label */}
      {labels && (
        <span
          className={`absolute top-3 right-3 text-sm px-4 py-1 rounded-full text-white ${
            labels === "Sale" ? "bg-[#B1CECA]" : "bg-primary"
          }`}
        >
          {labels}
        </span>
      )}

      {/* Product Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-52 object-contain mx-auto"
      />

      {/* Category */}
      <p className="uppercase text-gray-500 text-sm mt-5 tracking-widest">
        {category?.name}
      </p>

      {/* Product name */}
      <h3 className="text-lg mt-1 text-gray-700">{name}</h3>

      {/* Price */}
      <p className="mt-2 text-gray-700 group-hover:opacity-0">
        {original_price && (
          <span className="text-gray-400 line-through mr-2">
            ${original_price}.00
          </span>
        )}
        <span className="text-gray-400">${price}.00</span>
      </p>
      {/* Add to Cart Button (Hidden by Default) */}
      <div className="absolute bottom-0 left-0 w-full text-primary py-6 text-sm opacity-0 translate-y-full transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 font-medium tracking-widest">
        <button className="flex flex-col w-full">
          ADD TO CART
          <span className="font-bold text-xl -mt-3">. . . . . . . .</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
