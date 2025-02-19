import { FaInstagram, FaPhone, FaPinterestP, FaTwitter } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-white text-black pb-4 pt-24 border-t w-[87%] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Company Section */}
        <div>
          <h3 className="tracking-widest text-lg mb-4 uppercase">Company</h3>
          <ul className="space-y-2 text-gray-500 cursor-pointer">
            <li>
              {" "}
              <span className="text-primary font-extrabold mr-1">•</span> About
              PlayGrow
            </li>
            <li>
              {" "}
              <span className="text-primary font-extrabold mr-1">•</span> Our
              Experts
            </li>
            <li>
              {" "}
              <span className="text-primary font-extrabold mr-1">•</span>{" "}
              Services & Prices
            </li>
            <li>
              {" "}
              <span className="text-primary font-extrabold mr-1">•</span> Latest
              News
            </li>
            <li>
              {" "}
              <span className="text-primary font-extrabold mr-1">•</span> FAQ
            </li>
          </ul>
        </div>

        {/* Customers Section */}
        <div>
          <h3 className="tracking-widest text-lg mb-4 uppercase">Customers</h3>
          <ul className="space-y-2 text-gray-500 cursor-pointer">
            <li>
              {" "}
              <span className="text-primary font-extrabold mr-1">•</span> Read
              Our Advice
            </li>
            <li>
              {" "}
              <span className="text-primary font-extrabold mr-1">•</span> Get In
              Touch
            </li>
            <li>
              {" "}
              <span className="text-primary font-extrabold mr-1">•</span> Online
              Store
            </li>
            <li>
              {" "}
              <span className="text-primary font-extrabold mr-1">•</span> Terms
              & Conditions
            </li>
            <li>
              {" "}
              <span className="text-primary font-extrabold mr-1">•</span> Ask
              Away
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="tracking-widest text-lg mb-4 uppercase">
            Social Media
          </h3>
          <ul className="space-y-2 text-gray-500 cursor-pointer">
            <li className="flex items-center gap-2">
              <FaTwitter size={16} /> Twitter
            </li>
            <li className="flex items-center gap-2">
              <FaInstagram size={16} /> Instagram
            </li>
            <li className="flex items-center gap-2">
              <MdFacebook size={16} /> Facebook
            </li>
            <li className="flex items-center gap-2">
              <FaPinterestP size={16} /> Pinterest
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="tracking-widest text-lg mb-4 uppercase">Contact</h3>
          <p className="text-gray-500">Monday to Friday 9 a.m. - 5 p.m.</p>
          <ul className="space-y-2 mt-2 text-gray-500 cursor-pointer">
            <li className="flex items-center gap-1">
              <FaPhone size={12} /> 012 34 567 8912
            </li>
            <li className="flex items-center gap-1">
              <FaPhone size={12} /> 123 45 678 9123
            </li>
            <li>✉ playgrow@qodeinteractive.com</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex justify-between mt-20 text-sm pt-5">
        <div className="flex flex-col md:flex-row items-baseline space-y-1 md:space-x-8">
          <img
            src="https://playgrow.qodeinteractive.com/wp-content/uploads/2022/11/logo-img-1-300x91.png"
            alt="logo-playGrow"
            className="w-36 cursor-pointer"
          />
          <p className="text-gray-600">
            &copy; 2023 Qode Interactive, All Rights Reserved
          </p>
        </div>

        {/* Payment Methods */}
        <img
          src="https://i.ibb.co.com/HpYfvccx/0b6cc919d0950b8ab5d057a1cb8122ab-Expires-1740960000-Key-Pair-Id-APKAQ4-GOSFWCW27-IBOMQ-Signature-WCC.png"
          alt="payment"
          className="h-10 mt-2 cursor-pointer"
        />
      </div>
    </footer>
  );
};

export default Footer;
