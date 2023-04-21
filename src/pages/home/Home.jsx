import React, { useContext, useState, useEffect } from "react";
import Sidebar from "../../components/navbar/Sidebar";
import Biography from "../boi/Biography";
import Introduction from "../intro/Introduction";
import { ThemeContext } from "../../context/themeContext";
import Education from "../education/Education";
import Gallery from "../gallery/Gallery";

function WorkInProgress({ onTimeout }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onTimeout();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onTimeout]);

  if (!visible) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* <Spinner size="xl" color="blue.500" /> */}
      <p className="text-gray-600 mt-4">Work in progress...</p>
    </div>
  );
}
const Home = () => {
  const { darktheme, setDarkTheme } = useContext(ThemeContext);
  return (
    <div
      className={` ${
        darktheme ? "bg-black text-white " : "bg-white text-black "
      } flex`}
    >
      <div className="sidenav hidden md:block md:w-[80px]">
        <Sidebar />
      </div>
      <div className="pages w-full">
        <WorkInProgress />
        <Introduction />
        <Biography />
        <Education />
        <Gallery />
      </div>
    </div>
  );
};

export default Home;
