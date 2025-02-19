import React from "react";

const Featured = () => {
  return (
    <div className="grid md:grid-cols-6 gap-14">
      <div className="md:col-span-2 md:col-start-2">
        <img
          src="https://i.ibb.co.com/Y4FSPvxT/61858bb6341b5a6d43916dc2d6dc3d7a-Expires-1740960000-Key-Pair-Id-APKAQ4-GOSFWCW27-IBOMQ-Signature-p-s.jpg"
          alt=""
        />
        <div className="text-center">
          <h1 className="text-2xl text-gray-800 mt-5">
            Best baby environment setting
          </h1>
          <p className="text-gray-500 mt-2">
            Metus aliquam eleifend mi in nulla cras sedo fel.
          </p>
          <button className="flex flex-col uppercase text-primary font-medium tracking-widest text-sm mt-4 w-full">
            View Collection
            <span className="font-bold text-xl -mt-3">. . . . . . . . . .</span>
          </button>
        </div>
      </div>
      <div className="md:col-span-2 md:col-start-4">
        <img
          src="https://i.ibb.co.com/B56stZ54/013f12d604a8fc2c703f4168240d162f-Expires-1740960000-Key-Pair-Id-APKAQ4-GOSFWCW27-IBOMQ-Signature-L4.jpg"
          alt=""
        />
        <div className="text-center">
          <h1 className="text-2xl text-gray-800 mt-5">Make a dreamy nursery</h1>
          <p className="text-gray-500 mt-2">
            Convallis a cras semper auctor neque vita teme.
          </p>
          <button className="flex flex-col uppercase text-primary font-medium tracking-widest text-sm mt-4 w-full">
            View Collection
            <span className="font-bold text-xl -mt-3">. . . . . . . . . .</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
