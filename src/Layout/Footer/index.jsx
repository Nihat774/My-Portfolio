import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa"; // WhatsApp iconunu əlavə et

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 h-[15%]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; 2025 Nihat Al-Hanafi. All rights reserved.
        </p>

        {/* Sosial Media Linkləri */}
        <div className="mt-4 flex justify-center space-x-6">
          <Link
            to="https://www.linkedin.com/in/nihatm%C9%99mm%C9%99dov?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <abbr title="Linkedin">
              <FaLinkedin size={24} />{" "}
            </abbr>
          </Link>
          <Link
            to="https://github.com/Nihat774"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500"
          >
            <abbr title="Github">
              <FaGithub size={24} />
            </abbr>
          </Link>
          <Link
            to="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600"
          >
            <abbr title="Instagram">
              <FaInstagram size={24} />
            </abbr>
          </Link>
          <Link
            to="https://wa.me/+994557748548"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600"
          >
            <abbr title="Whatsapp">
              <FaWhatsapp size={24} />
            </abbr>{" "}
            {/* WhatsApp iconu */}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
