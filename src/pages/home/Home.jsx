import React from "react";
import Sidebar from "../../components/navbar/Sidebar";
import Biography from "../boigraphy/Biography";

import Introduction from "../intro/Introduction";
const Home = () => {
  return (
    <div className="bg-black text-white flex">
      <div className="sidenav hidden md:block sm:w-[80px]">
        <Sidebar />
      </div>
      <div className="pages w-full">
        <Introduction />
        <Biography />
      </div>
    </div>
  )
};
export default Home;
