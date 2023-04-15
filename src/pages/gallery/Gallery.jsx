import React from "react";
import ResponsiveGallery from "react-responsive-gallery";
import { ThemeContext } from "../../context/themeContext";
import { useContext } from "react";
const Gallery = () => {
  const { darktheme, setDarkTheme } = useContext(ThemeContext);

  const images = [
    {
      src: "https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445_960_720.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2019/06/12/15/07/cat-4269479_960_720.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2016/12/04/21/58/rabbit-1882699_960_720.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2014/07/08/12/36/bird-386725_960_720.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/10/12/15/46/fallow-deer-984573_960_720.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2014/10/01/10/44/hedgehog-468228_960_720.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2013/09/22/15/29/prairie-dog-184974_960_720.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_960_720.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2019/03/09/17/30/horse-4044547_960_720.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2023/04/06/01/44/man-7902570_640.jpg",
    }
  ];

  return (
    <div className={`gallery px-8 py-16 sm:px-20 mx-auto ${darktheme ? 'bg-gray-900' : "bg-white"}`}>
      <div className="edu_title">
        <h1 className="text-2xl font-black">My Portfolio</h1>
      </div>
      <div className="images mt-16">
        <ResponsiveGallery images={images} />
      </div>
    </div>
  );
};

export default Gallery;
