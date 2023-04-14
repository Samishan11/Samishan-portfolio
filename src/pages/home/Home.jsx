import React, { useContext } from "react";
import Sidebar from "../../components/navbar/Sidebar";
import Biography from "../boi/Biography";
import Introduction from "../intro/Introduction";
import { ThemeContext } from "../../context/themeContext";
import Education from "../education/Education";
const Home = () => {
  const {darktheme, setDarkTheme} = useContext(ThemeContext);
  return (
    <div className={` ${darktheme ? 'bg-black text-white ' : 'bg-white text-black '} flex`}>
      <div className="sidenav hidden md:block md:w-[80px]">
        <Sidebar />
      </div>
      <div className="pages w-full">
        <Introduction />
        <Biography />
        <Education />
      </div>
    </div>
  )
};

export default Home;
