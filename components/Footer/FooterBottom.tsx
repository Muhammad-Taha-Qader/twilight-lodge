import { HiOutlineGlobe, HiOutlineCurrencyDollar } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Importing GitHub and LinkedIn from Font Awesome

const FooterBottom = () => {
  return (
    <div className="bg-black py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-sm">
        {/* Left Side: Copyright and Links */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          © 2024 Twilight Lodge, Inc. ·  Terms  ·  Sitemap  ·  Privacy  ·  Your Privacy Choices
        </div>

        {/* Right Side: Language, Currency, and Social Icons */}
        <div className="flex space-x-8 items-center">
          {/* Language Selector */}
          <div className="flex items-center space-x-1">
            <HiOutlineGlobe />
            <span>English (US)</span>
          </div>

          {/* Currency Selector */}
          <div className="flex items-center space-x-1">
            <HiOutlineCurrencyDollar />
            <span>USD</span>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="https://github.com/Muhammad-Taha-Qader" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-lg" />
            </a>
            <a href="https://linkedin.com/in/Muhammad-taha-07a1a0228" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-lg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
