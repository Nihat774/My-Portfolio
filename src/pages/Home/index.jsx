import React from "react";
import { ReactTyped } from "react-typed";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4">
      {/* "I'm Nihat" text */}
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-800 mb-6 text-center">
        I'm Nihat.
      </h2>

      {/* Animated text using ReactTyped */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-800 mb-6 text-center">
        I’m{" "}
        <span className="text-indigo-600">
          <ReactTyped
            strings={["Front-end Developer"]}
            typeSpeed={80}
            backSpeed={80}
            loop
            showCursor
            className="inline"
          />
        </span>
      </h1>

      {/* Button */}
      <Link
        to={"/contact"}
        className="px-8 py-3 border-2 border-indigo-600 bg-indigo-600 text-white text-lg font-medium rounded-lg shadow-lg hover:bg-indigo-500 hover:border-indigo-500 hover:shadow-xl transition-all duration-300 ease-in-out"
      >
        Contact Me
      </Link>
    </section>
  );
};

export default HomePage;
