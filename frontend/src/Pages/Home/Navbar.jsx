import { useState } from "react";
import { Link } from "react-router-dom";
import { MdFacebook, MdMenu, MdSearch } from "react-icons/md";
import { FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import React from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <section className="font-Jost uppercase tracking-widest">
      {/* Top Nav Section */}
      <nav className="md:block bg-secondary shadow-sm hidden">
        <div className="md:py-[10px] md:px-8 flex justify-between items-center">
          {/* Newsletter Icon Part */}
          <div className="inline-flex items-center gap-2">
            <img
              src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/10/subscribe-icon.png"
              alt="Newsletter"
            />
            <Link to="/" className="text-sm hidden md:block">
              NEWSLETTER
            </Link>
          </div>

          {/* Desktop Nav Items */}
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

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center gap-5">
            <span
              className="inline-flex items-center gap-1 text-sm"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              {isSearchOpen ? (
                <span className="inline-flex gap-4 cursor-pointer">
                  <RxCross2 size={20} />
                  Close
                </span>
              ) : (
                <span className="inline-flex gap-1 cursor-pointer">
                  <MdSearch size={20} />
                  Search
                </span>
              )}
            </span>
            <div className="md:flex space-x-5">
              <MdFacebook size={20} color="DB915E" />
              <FaInstagram size={20} color="DB915E" />
              <FaTwitter size={20} color="DB915E" />
              <FaPinterestP size={20} color="DB915E" />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Section - Desktop */}
      <div className="hidden md:flex mt-24 justify-between items-center w-5/6 mx-auto">
        <>
          {isSearchOpen ? (
            <div className="my-6 w-full">
              <input
                type="text"
                placeholder="Search..."
                className="border-b-2 border-gray-400 outline-none p-2 text-3xl w-full" 
              />
            </div>
          ) : (
            <>
              <div className="flex flex-col items-center gap-2">
                <img
                  src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/10/rainbow.png"
                  alt="New In"
                />
                NEW IN
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/10/star.png"
                  alt="About Us"
                />
                ABOUT US
              </div>
              <img
                src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/11/logo-img-1-300x91.png"
                alt="PlayGrow Logo"
                className="w-[150px]"
              />
              <div className="flex flex-col items-center gap-2">
                <img
                  src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/10/hearth.png"
                  alt="Wishlist"
                />
                WISHLIST
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  src="https://playgrow.qodeinteractive.com/wp-content/plugins/playgrow-core/assets/img/cart-empty-large.png"
                  alt="Cart"
                />
                CART $0.00
              </div>
            </>
          )}
        </>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white shadow">
        <img
          src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/11/logo-img-1-300x91.png"
          alt="PlayGrow Logo"
          className="w-[120px]"
        />
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img
              src="https://playgrow.qodeinteractive.com/wp-content/plugins/playgrow-core/assets/img/cart-empty-large.png"
              alt="Cart"
              className="w-[30px]"
            />
            <span className="absolute -top-1 -right-1 bg-primary text-white text-xs px-1 rounded-full">
              0
            </span>
          </div>
          <span className="text-xs">cart $0.00</span>
          {/* Mobile Menu Button */}
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
    </section>
  );
};

export default Navbar;
