import React from "react";

const Newsletter = () => {
  return (
    <div className="h-[610px] bg-[url(https://i.ibb.co.com/RGQp03LX/985993089949018adb7f7dc639e5378d.jpg)] bg-no-repeat bg-cover bg-center lg:pl-20 py-20 w-full px-6">
      <div className="bg-white px-10 py-16 shadow-sm lg:w-[418px] w-full text-center">
        <h2 className="text-3xl uppercase tracking-widest text-gray-800">
          Newsletter
        </h2>
        <p className="text-gray-600 my-2 lg:text-xl">
          Risus viverra adipiscing at in tellus.
        </p>
        <form className="mt-8">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 border border-gray-400 focus:outline-none focus:ring-gray-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 border border-gray-400 focus:outline-none focus:ring-gray-500 my-5"
          />
          <button
            type="submit"
            className="w-full bg-primary text-white py-4 uppercase tracking-widest hover:bg-orange-400 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
