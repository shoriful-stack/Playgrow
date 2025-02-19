import { useState } from "react";
import { Link } from "react-router-dom";
import { MdFacebook, MdMenu, MdSearch } from "react-icons/md";
import { FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import React from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOpenPages, setIsOpenPages] = useState(false);
  const [isOpenShop, setIsOpenShop] = useState(false);
  const [isOpenShopPages, setIsOpenShopPages] = useState(false);

  return (
    <section className="uppercase tracking-widest">
      {/* Top Nav Section */}
      <nav className="md:block fixed w-full z-50 bg-secondary shadow-sm hidden lg:-mt-28">
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
                <Link to="/about-us" className="block hover:text-primary">
                  About Us
                </Link>
                <Link to="/faq" className="block hover:text-primary">
                  FAQ Page
                </Link>
                <Link to="/contact-us" className="block hover:text-primary">
                  Contact Us
                </Link>
              </div>
            </li>
            <li className="relative group">
              <button className="hover:text-primary transition duration-300 uppercase">
                Shop
              </button>
              {/* First dropdown */}
              <div className="absolute left-0 mt-2 bg-white border shadow-lg rounded-sm p-4 space-y-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-44">
                <Link to="/shop-list" className="block hover:text-primary">
                  Shop List
                </Link>
                <Link to="/shop-single" className="block hover:text-primary">
                  Shop Single
                </Link>

                {/* Nested dropdown */}
                <div className="relative group/submenu">
                  <button className="uppercase flex justify-between items-center w-full hover:text-primary transition duration-300">
                    Shop Pages <span className="ml-2">{">"}</span>
                  </button>

                  {/* Nested dropdown */}
                  <div className="absolute left-full top-0 mt-0 bg-white border shadow-lg rounded-sm p-4 space-y-2 opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-300 w-44">
                    <Link to="/my-account" className="block hover:text-primary">
                      My Account
                    </Link>
                    <Link to="/wishlist" className="block hover:text-primary">
                      Wishlist
                    </Link>
                    <Link to="/cart" className="block hover:text-primary">
                      Cart
                    </Link>
                    <Link to="/checkout" className="block hover:text-primary">
                      Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link
                to="/blog"
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
      <div className="hidden md:flex mt-28 justify-between items-center w-[87%] mx-auto">
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
                  className="hover:-translate-y-2 cursor-pointer duration-500"
                />
                NEW IN
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/10/star.png"
                  alt="About Us"
                  className="hover:-translate-y-2 cursor-pointer duration-500"
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
                  className="hover:-translate-y-2 cursor-pointer duration-500"
                />
                WISHLIST
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="relative hover:-translate-y-2 cursor-pointer duration-500">
                  <img
                    src="https://playgrow.qodeinteractive.com/wp-content/plugins/playgrow-core/assets/img/cart-empty-large.png"
                    alt="Cart"
                  />
                  <span className="absolute top-3 -right-1 bg-secondary shadow-md text-sm py-1 px-[7px] rounded-full">
                    0
                  </span>
                </div>
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
          <span className="text-xs">Cart $0.00</span>
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

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-lg space-y-4 p-4">
          <li>
            <Link to="/" className="block text-gray-800 hover:text-primary">
              Home
            </Link>
          </li>
          {/* Pages Dropdown */}
          <li className="relative">
            <button
              onClick={() => setIsOpenPages(!isOpenPages)}
              className="flex justify-between items-center w-full text-gray-800 hover:text-primary uppercase"
            >
              Pages <span>{isOpenPages ? "▲" : "▼"}</span>
            </button>
            {isOpenPages && (
              <ul className="mt-2 pl-4 space-y-2">
                <li>
                  <Link to="/about-us" className="block hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="block hover:text-primary">
                    FAQ Page
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" className="block hover:text-primary">
                    Contact Us
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Shop Dropdown */}
          <li className="relative">
            <button
              onClick={() => setIsOpenShop(!isOpenShop)}
              className="flex justify-between items-center w-full text-gray-800 hover:text-primary uppercase"
            >
              Shop <span>{isOpenShop ? "▲" : "▼"}</span>
            </button>
            {isOpenShop && (
              <ul className="mt-2 pl-4 space-y-2">
                <li>
                  <Link to="/shop-list" className="block hover:text-primary">
                    Shop List
                  </Link>
                </li>
                <li>
                  <Link to="/shop-single" className="block hover:text-primary">
                    Shop Single
                  </Link>
                </li>
                {/* Nested Shop Pages Dropdown */}
                <li className="relative">
                  <button
                    onClick={() => setIsOpenShopPages(!isOpenShopPages)}
                    className="flex justify-between items-center w-full text-gray-800 hover:text-primary uppercase"
                  >
                    Shop Pages <span>{isOpenShopPages ? "▲" : "▼"}</span>
                  </button>
                  {isOpenShopPages && (
                    <ul className="mt-2 pl-4 space-y-2">
                      <li>
                        <Link
                          to="/my-account"
                          className="block hover:text-primary"
                        >
                          My Account
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/wishlist"
                          className="block hover:text-primary"
                        >
                          Wishlist
                        </Link>
                      </li>
                      <li>
                        <Link to="/cart" className="block hover:text-primary">
                          Cart
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/checkout"
                          className="block hover:text-primary"
                        >
                          Checkout
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/blog" className="block text-gray-800 hover:text-primary">
              Blog
            </Link>
          </li>
        </ul>
      )}
    </section>
  );
};

export default Navbar;
