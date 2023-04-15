import React from "react";
// import ProgressBar from "react-animated-progress-bar";
import { ProgressBarLine } from "react-progressbar-line";

import { ThemeContext } from "../../context/themeContext";
import { useContext } from "react";

const Education = () => {
  const { darktheme, setDarkTheme } = useContext(ThemeContext);

  return (
    <div>
      <div id="edu" className="education px-8 py-24 sm:px-20 mx-auto">
        <div className="edu_title">
          <h1 className="text-2xl font-black">Education and Skills</h1>
        </div>
        <div className="edu_sec flex flex-wrap">
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="edu w-full sm:w-2/5"
          >
            <div
              className={`box_edu mb-10 sm:mb-0  mt-16 ${
                darktheme ? "bg-gray-900" : "bg-gray-100"
              } rounded-xl`}
            >
              <div className="edu_deg px-10 pt-5">
                <p>2003-2016</p>
                <p className="font-bold">Primary School</p>
                <p>Siddhartha Academy</p>
              </div>
              <div className="edu_deg px-10 pt-5">
                <p>2017-2018</p>
                <p className="font-bold">High School</p>
                <p>Padmodaya Public Model Secondary School</p>
              </div>
              <div className="edu_deg px-10 pt-5">
                <p>2019-2022</p>
                <p className="font-bold">
                  Bachelor in Information and Technology
                </p>
                <p>Coventry University</p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            className="box_skill px-10 w-full sm:w-3/5  items-center justify-center"
          >
            <div className="progress_bar">
              <span>HTML</span>
              <ProgressBarLine
                value={90}
                min={0}
                max={100}
                strokeWidth={1}
                trailWidth={1}
                styles={{
                  path: {
                    stroke: "#ffc107",
                  },
                  trail: {
                    stroke: "#fff",
                  },
                  text: {
                    fill: "#404040",
                    textAlign: "end",
                    fontSize: "16px",
                  },
                }}
              />
            </div>
            <div className="progress_bar mt-5">
              <span>CSS</span>
              <ProgressBarLine
                value={80}
                min={0}
                max={100}
                strokeWidth={1}
                trailWidth={1}
                styles={{
                  path: {
                    stroke: "#ffc107",
                  },
                  trail: {
                    stroke: "#fff",
                  },
                  text: {
                    fill: "#404040",
                    textAlign: "end",
                    fontSize: "16px",
                  },
                }}
              />
            </div>
            <div className="progress_bar mt-5">
              <span>JAVASCRIPT</span>
              <ProgressBarLine
                value={80}
                min={0}
                max={100}
                strokeWidth={1}
                trailWidth={1}
                styles={{
                  path: {
                    stroke: "#ffc107",
                  },
                  trail: {
                    stroke: "#fff",
                  },
                  text: {
                    fill: "#404040",
                    textAlign: "end",
                    fontSize: "16px",
                  },
                }}
              />
            </div>
            <div className="progress_bar mt-5">
              <span>PYTHON</span>
              <ProgressBarLine
                value={60}
                min={0}
                max={100}
                strokeWidth={1}
                trailWidth={1}
                styles={{
                  path: {
                    stroke: "#ffc107",
                  },
                  trail: {
                    stroke: "#fff",
                  },
                  text: {
                    fill: "#404040",
                    textAlign: "end",
                    fontSize: "16px",
                  },
                }}
              />
            </div>
            <div className="progress_bar mt-5">
              <span>REACT JS</span>
              <ProgressBarLine
                value={70}
                min={0}
                max={100}
                strokeWidth={1}
                trailWidth={1}
                styles={{
                  path: {
                    stroke: "#ffc107",
                  },
                  trail: {
                    stroke: "#fff",
                  },
                  text: {
                    fill: "#404040",
                    textAlign: "end",
                    fontSize: "16px",
                  },
                }}
              />
            </div>
            <div className="progress_bar mt-5">
              <span>NODE JS</span>
              <ProgressBarLine
                value={75}
                min={0}
                max={100}
                strokeWidth={1}
                trailWidth={1}
                styles={{
                  path: {
                    stroke: "#ffc107",
                  },
                  trail: {
                    stroke: "#fff",
                  },
                  text: {
                    fill: "#404040",
                    textAlign: "end",
                    fontSize: "16px",
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
