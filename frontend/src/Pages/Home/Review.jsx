import React from "react";
import useEntity from "../../Hooks/useEntity";
import Rating from "react-rating";
import { FaRegStar } from "react-icons/fa";
import { MdStar } from "react-icons/md";

const Review = () => {
  const [reviews] = useEntity("/reviews");

  if (!reviews.length) return <p>No reviews found.</p>;
  return (
    <div className="bg-secondary py-28">
      <h1 className="text-center text-3xl uppercase tracking-widest text-gray-900">
        Happy Customers
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-20 w-[87%] mx-auto text-center">
        {reviews?.map((review, index) => (
          <div className="lg:mt-14 mt-7">
            <p>
              <Rating
                initialRating={review.rating}
                emptySymbol={<FaRegStar size={30} style={{ color: "#ccc" }} />}
                fullSymbol={<MdStar size={30} style={{ color: "#DB915E" }} />}
              />
            </p>
            <p className="text-2xl my-6">{review.description}</p>
            <p className="text-gray-500 uppercase text-sm">{review.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
