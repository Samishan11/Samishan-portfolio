import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/home-banner.png";
const Introduction = () => {
  return (
    <div
      className={`home h-screen flex sm:block justify-center items-center flex-col`}
    >
      <div className="header hidden md:block pt-9 px-4 text-sm pb-20">
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
      <div className={`w-full md:mx-auto mt-20 h-auto pb-10`}>
        <div className="intro md:mx-auto w-4/5">
          <div className="intro_desc relative z-10 ml-5">
            <span className="text-xl font-semibold">Hello, My name is </span>
            <h1
              style={{ fontFamily: "Rubik, sans-serif" }}
              className="sm:text-6xl font-black my-5 text-2xl"
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
            <button className="bg-white text-black rounded px-5 py-2 my-3 font-bold">
              Download CV
            </button>
          </div>
          <div className="banner_"></div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
