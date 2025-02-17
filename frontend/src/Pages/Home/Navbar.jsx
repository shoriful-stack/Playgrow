import { useState } from "react";
import { Link } from "react-router-dom";
import { MdFacebook, MdMenu, MdSearch } from "react-icons/md";
import { FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import React from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="font-Jost uppercase tracking-widest">
      {/* top nav section */}
      <nav className="bg-secondary shadow-sm">
        <div className="md:py-[10px] md:px-8 flex justify-between items-center">
          {/* newsletter icon part */}
          <div className="inline-flex items-center gap-2">
            <img
              src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/10/subscribe-icon.png"
              alt=""
            />
            <Link to="/" className="text-sm">
              NEWSLETTER
            </Link>
          </div>

          <ul className="hidden md:flex space-x-12 text-sm">
            <li>
              <Link
                to="/"
                className="hover:text-primary transition duration-300"
              >
                Home
              </Link>
            </li>
            <li className="relative group">
              <button className="hover:text-primary transition duration-300 uppercase">
                Pages
              </button>
              <div className="absolute -left-6 mt-2 bg-white border shadow-lg rounded-sm p-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-44">
                <Link to="/shop-list" className="block hover:text-primary">
                  About Us
                </Link>
                <Link to="/shop-single" className="block hover:text-primary">
                  FAQ Page
                </Link>
                <Link to="/shop-single" className="block hover:text-primary">
                  Contact Us
                </Link>
              </div>
            </li>
            <li className="relative group">
              <button className="hover:text-primary transition duration-300 uppercase">
                Shop
              </button>
              <div className="absolute -left-6 mt-2 bg-white border shadow-lg rounded-sm p-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-44">
                <Link to="/shop-list" className="block hover:text-primary">
                  Shop List
                </Link>
                <Link to="/shop-single" className="block hover:text-primary">
                  Shop Single
                </Link>
                <Link to="/shop-single" className="block hover:text-primary">
                  Shop Layouts
                </Link>
                <Link to="/shop-single" className="block hover:text-primary">
                  Shop Pages
                </Link>
              </div>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-primary transition duration-300"
              >
                Blog
              </Link>
            </li>
          </ul>

          <div className="md:flex items-center gap-5 hidden">
            <span className="inline-flex items-center gap-1  text-sm">
              <MdSearch size={20} /> Search
            </span>
            <div className="md:flex space-x-5">
              <MdFacebook size={20} color="DB915E" />
              <FaInstagram size={20} color="DB915E" />
              <FaTwitter size={20} color="DB915E" />
              <FaPinterestP size={20} color="DB915E" />
            </div>
          </div>

          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <RxCross2 size={30} color="DB915E" />
            ) : (
              <MdMenu size={30} color="DB915E" />
            )}
          </button>
        </div>
        {isOpen && (
          <ul className="md:hidden bg-white shadow-lg space-y-4 p-4">
            <li>
              <Link to="/" className="block text-gray-800 hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/shop-list"
                className="block text-gray-800 hover:text-primary"
              >
                Shop List
              </Link>
            </li>
            <li>
              <Link
                to="/shop-single"
                className="block text-gray-800 hover:text-primary"
              >
                Shop Single
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block text-gray-800 hover:text-primary"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block text-gray-800 hover:text-primary"
              >
                Blog
              </Link>
            </li>
          </ul>
        )}
      </nav>

      {/* Main section */}
      <div className="my-24 flex justify-between items-center w-5/6 mx-auto">
        <div className="flex flex-col items-center gap-2">
          <img src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/10/rainbow.png" alt="" />
          NEW IN
        </div>
        <div className="flex flex-col items-center gap-2">
          <img src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/10/star.png" alt="" />
          about us
        </div>
        <img src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/11/logo-img-1-300x91.png" alt="" />
        <div className="flex flex-col items-center gap-2">
          <img src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/10/hearth.png" alt="" />
          wishlist
        </div>
        <div className="flex flex-col items-center gap-2">
          <img src="https://playgrow.qodeinteractive.com/wp-content/plugins/playgrow-core/assets/img/cart-empty-large.png" alt="" />
          cart $0.00
        </div>
      </div>
    </section>
  );
};

export default Navbar;
