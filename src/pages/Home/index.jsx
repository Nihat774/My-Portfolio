import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const HomePage = () => {
  const fullText = "Front-end Developer.";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(170);
  const navigate = useNavigate();

  useEffect(() => {
    const typeEffect = () => {
      if (isDeleting) {
        setDisplayText((prev) => prev.slice(0, -1));
      } else {
        setDisplayText((prev) => fullText.slice(0, prev.length + 1));
      }

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
      }

      setSpeed(isDeleting ? 75 : 150);
    };

    const timer = setTimeout(typeEffect, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, speed]);

  return (
    <div className="flex flex-col items-center justify-center px-4 flex-[14] py-9">
      {/* "I'm Nihat" text */}
      <Helmet>
        <title>My home page</title>
        <meta name="description" content="This is my main page" />
      </Helmet>
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-800 mb-6 text-center">
        I'm Nihat.
      </h2>

      {/* Animated text */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-800 mb-6 text-center">
        I’m <span className="text-indigo-600">{displayText}|</span>
      </h1>

      {/* Button */}
      <button
        onClick={() => navigate("/contact")}
        className="px-8 py-3 border-2 border-indigo-600 bg-indigo-600 text-white text-lg font-medium rounded-lg shadow-lg hover:bg-indigo-500 hover:border-indigo-500 hover:shadow-xl transition-all duration-300 ease-in-out"
      >
        Contact Me
      </button>
    </div>
  );
};

export default HomePage;
