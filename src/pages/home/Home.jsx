import React, { useContext, useState } from "react";
import Sidebar from "../../components/navbar/Sidebar";
import Biography from "../boi/Biography";
import Introduction from "../intro/Introduction";
import { ThemeContext } from "../../context/themeContext";
import Education from "../education/Education";
import Gallery from "../gallery/Gallery";
const Home = () => {
  const { darktheme, setDarkTheme } = useContext(ThemeContext);
  const [click ,setClick] = useState(false)
  const toggleMenu = () => {
    setClick(!click)
  }
  return (
    <div
      className={` ${
        darktheme ? "bg-black text-white " : "bg-white text-black "
      } flex`}
    >
      <div className="sidenav hidden md:block md:w-[80px]">
        {/* <Sidebar /> */}
        <div
            className="HAMBURGER-ICON space-y-2 mt-2"
          >
            <span className="block h-1 w-8 bg-white"></span>
            <span className="block h-1 w-8 bg-white"></span>
            <span className="block h-1 w-8 bg-white"></span>
          </div>

      </div>
      <div className="pages w-full">
        <Introduction />
        <Biography />
        <Education />
        <Gallery />
      </div>
    </div>
  );
};

export default Home;
