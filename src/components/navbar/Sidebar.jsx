import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/themeContext";
const Sidebar = () => {
  const { darktheme, setDarkTheme } = useContext(ThemeContext)
  console.log(darktheme)
  const [targetElevemt, settargetElevemt] = useState("")
  useEffect(() => {
    window.document.getElementById("introduction") ?
      settargetElevemt("introduction") :
      window.document.getElementById("biography") ?
        settargetElevemt("biography") : settargetElevemt('')
    console.log(targetElevemt)
  }, [window.innerHeight])

  return (
    <div className={` ${darktheme?'bg-gray-900 border-gray-100 text-white':"bg-white border-gray-600 text-black"} w-[80px] border-r-[.5px] text-center fixed top-0 left-0 h-screen`}>
      <div className="logo bg-orange-500 py-5">
        <h1 className="font-extrabold text-4xl">ST</h1>
      </div>
      <ul className="list-none text-center text-xl">
        <li className={`py-5 border-b-[.5px]  ${!darktheme ?'border-gray-600':'border-gray-100'}`}>
          <a href={"#introduction"}><i className={`fa-solid fa-home ${window.document.getElementById("introduction") === targetElevemt && 'text-orange-500'}`}></i></a>
        </li>
        <li className={`py-5 border-b-[.5px]  ${!darktheme ?'border-gray-600':'border-gray-100'}`}>
          <a href={'#biography'}><i className={`fa-solid fa-user ${window.document.getElementById("biography") === targetElevemt && 'text-orange-500'}`}></i></a>
        </li>
        <li className={`py-5 border-b-[.5px]  ${!darktheme ?'border-gray-600':'border-gray-100'}`}>
          <Link><i class="fa-solid fa-file"></i></Link>
        </li>
        <li className={`py-5 border-b-[.5px]  ${!darktheme ?'border-gray-600':'border-gray-100'}`}>
          <Link><i class="fa-solid fa-briefcase"></i></Link>
        </li>
        <li className={`py-5 border-b-[.5px]  ${!darktheme ?'border-gray-600':'border-gray-100'}`}>
          <Link><i className="fa-solid fa-blog"></i></Link>
        </li>
        <li className={`py-5 border-b-[.5px]  ${!darktheme ?'border-gray-600':'border-gray-100'}`}>
          <Link><i className="fa-solid fa-phone-volume"></i></Link>
        </li>
        <li className="py-5">
          {
            darktheme ? <i onClick={() => setDarkTheme(false)} className="fa-solid  fa-sun"></i> :
              <i onClick={() => setDarkTheme(true)} className="fa-solid  fa-moon"></i>
          }
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
