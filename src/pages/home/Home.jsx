import React, { useContext, useState } from "react";
import Sidebar from "../../components/navbar/Sidebar";
import Biography from "../boi/Biography";
import Introduction from "../intro/Introduction";
import { ThemeContext } from "../../context/themeContext";
import Education from "../education/Education";
import Gallery from "../gallery/Gallery";
const Home = () => {
  const { darktheme, setDarkTheme } = useContext(ThemeContext);
  const [click, setClick] = useState(false);
  const toggleMenu = () => {
    setClick(!click)
    const menuBtn = document.querySelector('.menu-btn');
    if(click){
      menuBtn.classList.add('open');
    }else{
      menuBtn.classList.remove('open');
    }
  };
  console.log(click)
  return (
    <div
      className={` ${
        darktheme ? "bg-black text-white " : "bg-white text-black "
      } flex`}
    >
      <div onClick={toggleMenu} class="menu-btn">
        <div class="menu-btn__burger"></div>
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
