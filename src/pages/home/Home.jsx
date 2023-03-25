import React from "react";
import Sidebar from "../../components/navbar/Sidebar";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="bg-black  text-white flex">
      <div className="sidenav w-[80px]">
        <Sidebar></Sidebar>
      </div>
      <div className="pages w-full">
        <div className="home h-screen">
          <div className="header pt-8 px-2 text-sm">
            <Link
              to="/"
              className="pl-10 hover:text-orange-400 transition ease-in-out delay-150"
            >
              +977 9866701165
            </Link>
            <Link to="/" className="pl-10  hover:text-orange-400">
              samishanthapa0@gmail.com
            </Link>
          </div>
          <div className="container w-full mx-auto mt-24">
            <div className="intro mx-auto w-4/5">
              <span className="text-xl font-semibold">Hello, My name is </span>
              <h1 className="text-5xl font-extrabold my-5">SAMISHAN THAPA</h1>
              <div className="animate-text mb-5">
                <span data-aos="fade-up" className="font-bold text-3xl">
                  Software Developer
                </span>
              </div>
              <p className=" max-w-md mb-5">
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services
                and online stores.
              </p>
              <button className="bg-white text-black rounded px-4 py-2">Download CV</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
