import React, { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
const Biography = () => {
  const { darktheme, setDarkTheme } = useContext(ThemeContext);
  return (
    <div
      id="biography"
      className={` ${
        darktheme ? "bg-gray-900" : "bg-gray-100"
      } bio_section pb-24 pt-36 lg:pt-0 sm:pt-40 md:pt-0`}
    >
      <div className="section block md:flex">
        <div className="circular_profile flex justify-center sm:justify-center px-16 items-center h-auto w-full md:w-2/5 mx-auto">
          <div
            data-aos="fade-up"
            className="circular_avatar text-center relative  w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] border-[5px] border-orange-500 rounded-full md:w-[350px] md:h-[350px] bg-red-500 flex flex-col"
          >
            <img
              className=" bg-cover object-cover rounded-full bg-red-500 min-w-full"
              src={"https://avatars.githubusercontent.com/u/60726548?v=4"}
              alt="home"
            />
            <div className="icons">
              <div className="icon border-[2px] absolute hover:bg-orange-500 hover:scale-110 transition bottom-[10px] bg-black left-[15%] text-white h-[35px] w-[35px] flex justify-center items-center rounded-full">
                <i className="fa-brands fa-facebook-f "></i>
              </div>
              <div className="icon border-[2px] absolute hover:bg-orange-500 hover:scale-110 transition bottom-[-12px] bg-black left-[30%] text-white h-[35px] w-[35px] flex justify-center items-center rounded-full">
                <i className="fa-brands fa-instagram "></i>
              </div>
              <div className="icon border-[2px] absolute hover:bg-orange-500 hover:scale-110 transition bottom-[-18px] bg-black left-[45%] text-white h-[35px] w-[35px] flex justify-center items-center rounded-full">
                <i className="fa-brands fa-twitter "></i>
              </div>
              <div className="icon border-[2px] absolute hover:bg-orange-500 hover:scale-110 transition bottom-[-10px] bg-black right-[30%] text-white h-[35px] w-[35px] flex justify-center items-center rounded-full">
                <i className="fa-brands fa-linkedin-in "></i>
              </div>
              <div className="icon border-[2px] absolute hover:bg-orange-500 hover:scale-110 transition bottom-[10px] bg-black right-[15%] text-white h-[35px] w-[35px] flex justify-center items-center rounded-full">
                <i className="fa-brands fa-github "></i>
              </div>
            </div>
            <div className="name mt-10">
              <span>Software Developer</span>
              <h1 className="text-3xl font-bold mt-2">Samishan Thapa</h1>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="about text-left mt-36 w-4/5 mx-auto md:w-2/4 pr-10"
        >
          <h1 className="text-3xl  font-black mb-5">Biography</h1>
          <span className=" text-md md:text-[14px]">
            I'm a Freelancer Front-end Developer with over 3 years of
            experience. I'm from San Francisco. I code and create web elements
            for amazing people around the world. I like work with new people.
            New people new Experiences.
          </span>
          <p className="mt-5 text-md  md:text-[14px]">
            I'm a Freelancer Front-end Developer with over 3 years of
            experience. I'm from San Francisco. I code and create web elements
            for amazing people around the world. I like work with new people.
            New people new Experiences.
          </p>
          <div className="info mt-5 flex flex-col md:flex-row justify-end w-full">
            <div className="left w-full md:w-2/4">
              <p>
                {" "}
                <span className=" font-semibold">Name:</span>{" "}
                <span className="ml-1 text-gray-400">Samishan Thapa</span>{" "}
              </p>
              <p className="mt-2">
                <span className="font-semibold">Birthday:</span>{" "}
                <span className="ml-1 text-gray-400">16th September 2000</span>{" "}
              </p>
              <p className="mt-2">
                <span className="font-semibold">Age:</span>{" "}
                <span className="ml-1 text-gray-400">22</span>{" "}
              </p>
              <p className="mt-2">
                <span className="font-semibold">Address:</span>{" "}
                <span className="ml-1 text-gray-400">Kathmandu</span>{" "}
              </p>
            </div>
            <div className="right mt-2 md:mt-0 w-full md:w-2/4 md:ml-16">
              <p>
                {" "}
                <span className=" font-semibold">Name:</span>{" "}
                <span className="ml-1 text-gray-400">Samishan Thapa</span>{" "}
              </p>
              <p className="mt-2">
                <span className="font-semibold">Birthday:</span>{" "}
                <span className="ml-1 text-gray-400">16th September 2000</span>{" "}
              </p>
              <p className="mt-2">
                <span className="font-semibold">Age:</span>{" "}
                <span className="ml-1 text-gray-400">22</span>{" "}
              </p>
              <p className="mt-2">
                <span className="font-semibold">Address:</span>{" "}
                <span className="ml-1 text-gray-400">Kathmandu</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="what-id-do mt-20 w-full px-8 sm:px-20 mx-auto">
        <div className="title">
          <h1 className="text-2xl font-black">WHAT I DO?</h1>
        </div>
        <div className="boxes flex flex-wrap justify-center sm:justify-center md:justify-center lg:justify-start mt-16 items-center gap-5">
          <div
            data-aos="fade-right"
            data-aos-duration="500"
            className={` ${
              darktheme ? "bg-black" : "bg-gray-200 shadow"
            } box rounded-2xl h-[300px] w-full sm:h-[300px] sm:w-[412px]`}
          >
            <div className="icon_b h-[100px] w-[100px]">
              <i className="fa-solid text-white fa-laptop text-4xl"></i>
            </div>
            <div className="info px-8">
              <h5 className="text-xl font-black">Website Development</h5>
              <p className="text-sm mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className={` ${
              darktheme
                ? "bg-black text-white"
                : "bg-gray-200 text-black shadow"
            } box rounded-2xl h-[300px] w-full sm:h-[300px] sm:w-[412px]`}
          >
            <div className="icon_b h-[100px] w-[100px]">
              <i className="fa-solid fa-mobile text-4xl"></i>
            </div>
            <div className="info px-8">
              <h5 className="text-xl font-black">Mobile App</h5>
              <p className="text-sm mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1500"
            className={` ${
              darktheme ? "bg-black" : "bg-gray-200 shadow"
            } box rounded-2xl h-[300px] w-full sm:h-[300px] sm:w-[412px]`}
          >
            <div className="icon_b h-[100px] w-[100px]">
              <i className="fa-solid fa-laptop text-4xl"></i>
            </div>
            <div className="info px-8">
              <h5 className="text-xl font-black">UI/UX</h5>
              <p className="text-sm mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Biography;
