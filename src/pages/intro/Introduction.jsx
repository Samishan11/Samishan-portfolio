import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/themeContext";
const Introduction = () => {
  const { darktheme, setDarkTheme } = useContext(ThemeContext);
  return (
    <div
      id="introduction"
      className={`home relative flex h-[60vh] md:block md:h-screen justify-center items-center flex-col`}
    >
      <div className="header hidden md:flex justify-between pt-9 px-4 text-md pb-20">
        <div className="touch">
          <Link
            to="/"
            className="pl-10 font-bold hover:text-orange-400 transition ease-in-out delay-100"
          >
            +977 9866701165
          </Link>
          <Link
            to="/"
            className="pl-12 font-bold hover:text-orange-400 transition ease-in-out delay-100"
          >
            samishanthapa0@gmail.com
          </Link>
        </div>
      </div>
      <div className={`w-full md:mx-auto mt-10 h-auto`}>
        <div className="intro md:mx-auto w-full px-16">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="intro_desc z-10 ml-5"
          >
            <span className="text-xl font-semibold">Hello, My name is </span>
            <h1
              style={{ fontFamily: "Rubik, sans-serif" }}
              className="md:text-6xl font-black my-5 text-2xl"
            >
              SAMISHAN THAPA
            </h1>
            <div className="animate-text mb-5">
              <span
                data-aos="fade-up"
                className="font-bold text-3xl text-orange-500"
              >
                Software Developer
              </span>
            </div>
            <p className=" max-w-md mb-5">
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, web services
              and online stores.
            </p>
            <button
              className={` ${
                darktheme ? "bg-white text-black " : "bg-gray-900 text-white "
              } hover:-translate-y-2 transition duration-500 ease-in-out rounded px-5 py-2 font-bold`}
            >
              Download CV
            </button>
          </div>
        </div>
        <div className="banner_"></div>
      </div>
    </div>
  );
};

export default Introduction;
