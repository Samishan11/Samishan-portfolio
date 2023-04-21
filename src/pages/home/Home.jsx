import React, { useContext, useState, useEffect } from "react";
import Sidebar from "../../components/navbar/Sidebar";
import Biography from "../boi/Biography";
import Introduction from "../intro/Introduction";
import { ThemeContext } from "../../context/themeContext";
import Education from "../education/Education";
import Gallery from "../gallery/Gallery";
import Loading from "../../components/loading/Loading";

//
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
      <Loading />
      <p className="text-gray-600 mt-4">Work in progress...</p>
    </div>
  );
}

const Home = () => {
  const { darktheme, setDarkTheme } = useContext(ThemeContext);
  const [click, setClick] = useState(false);
  const [showWorkInProgress, setShowWorkInProgress] = useState(true);

  const toggleMenu = () => {
    setClick(!click);
    const menuBtn = document.querySelector(".menu-btn");
    if (click) {
      menuBtn.classList.add("open");
    } else {
      menuBtn.classList.remove("open");
    }
  };
  const handleWorkInProgressTimeout = () => {
    setShowWorkInProgress(false);
  };

  return (
    <>
      {showWorkInProgress ? (
        <WorkInProgress onTimeout={handleWorkInProgressTimeout} />
      ) : (
        <div
          className={` ${
            darktheme ? "bg-black text-white " : "bg-white text-black "
          } flex`}
        >
          <Sidebar />
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
      )}
    </>
  );
};

export default Home;
