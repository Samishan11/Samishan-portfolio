import React from "react";
const Sidebar = () => {
  return (
    <div className="w-[80px] bg-gray-900 text-white text-center fixed top-0 left-0 h-screen">
      <div className="logo bg-orange-500 py-5">
        <h1 className="font-extrabold text-4xl">ST</h1>
      </div>
      <ul className="list-none text-center text-xl">
        <li className="pt-16 pb-5 border-b border-gray-600">
          <i id="home" className="fa-solid text-orange-500 fa-home"></i>
        </li>
        <li className="py-5 border-b border-gray-600">
          <i className="fa-solid fa-user"></i>
        </li>
        <li className="py-5 border-b border-gray-600">
          <i class="fa-solid fa-file"></i>
        </li>
        <li className="py-5 border-b border-gray-600">
          <i class="fa-solid fa-briefcase"></i>
        </li>
        <li className="py-5 border-b border-gray-600">
          <i className="fa-solid fa-blog"></i>
        </li>
        <li className="py-5">
          <i className="fa-solid fa-phone-volume"></i>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
