import React from "react";
import { useForm } from "@formspree/react";
import { motion } from "framer-motion"; // Framer Motion-u import edin
import { Link } from "react-router-dom";

function ContactForm() {
  const [state, handleSubmit] = useForm("mdkkpajn");

  if (state.succeeded) {
    return (
      <section className="flex items-center justify-center bg-gray-100">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }} // Hərəkətin sürəti
        >
          <p className="text-green-500 font-semibold text-xl mb-4">
            Thanks for your message!
          </p>
          <Link
            to="/"
            className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Back to Home
          </Link>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-5 bg-gray-100 flex items-center justify-center">
      <motion.div
        className="w-11/12 max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-2xl overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }} // Animasiya müddəti
      >
        {/* Form Section */}
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Contact Me
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                rows="5"
                placeholder="Write your message here..."
              />
              {/* <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
              /> */}
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300"
            >
              {state.submitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <motion.div
          className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 sm:p-8 flex flex-col justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }} // Animasiya müddəti
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Contact Information
          </h2>
          <p className="text-gray-700 mb-4">
            Reach me directly through the following ways:
          </p>
          <div className="flex flex-col gap-4">
            <div>
              <p className="font-semibold text-gray-800">Phone</p>
              <Link to="tel:+994557748548" className=" hover:text-blue-700">
                +994 55 774 85 48
              </Link>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Email</p>
              <Link
                to="mailto:nihatmemmedov.0520@gmail.com"
                className=" hover:text-blue-700"
              >
                nihatmemmedov.0520@gmail.com
              </Link>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Address</p>
              <p className="text-gray-700">Baku,Azerbaijan</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default ContactForm;
