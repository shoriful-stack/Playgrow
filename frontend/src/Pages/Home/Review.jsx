import React from "react";
import useEntity from "../../Hooks/useEntity";
import Rating from "react-rating";
import { FaRegStar } from "react-icons/fa";
import { MdStar } from "react-icons/md";

const Review = () => {
  const [reviews] = useEntity("/reviews");

  if (!reviews.length) return <p>No reviews found.</p>;
  return (
    <div className="bg-secondary pt-28 pb-28 md:pb-0 mt-12">
      <img
        src="https://i.ibb.co.com/1tHgpGsm/6c4953fdfa6f8f6800d7e0ff4c507590-Expires-1740960000-Key-Pair-Id-APKAQ4-GOSFWCW27-IBOMQ-Signature-m-F.png"
        alt="deer"
        className="hidden md:block"
      />

      <h1 className="text-center text-3xl uppercase tracking-widest text-gray-800 md:-mt-28">
        Happy Customers
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-20 w-[87%] mx-auto text-center">
        {reviews?.map((review, index) => (
          <div key={index} className="lg:mt-14 mt-7">
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
      <div className="pr-4 hidden md:block">
        <div className="flex justify-end -mt-16">
          <img
            src="https://i.ibb.co.com/svysDVY2/4f4adaac5e1291d12abfda3d6d0a8287-Expires-1740960000-Key-Pair-Id-APKAQ4-GOSFWCW27-IBOMQ-Signature-o-J.png"
            alt="love"
          />
        </div>
        <div className="flex justify-end mt-6">
          <img
            src="https://i.ibb.co.com/dw5Gm1mk/80644d716b62a1ab7a6f36440cbe9baf-Expires-1740960000-Key-Pair-Id-APKAQ4-GOSFWCW27-IBOMQ-Signature-K3.png"
            alt="beer"
          />
        </div>
      </div>
    </div>
  );
};

export default Review;
