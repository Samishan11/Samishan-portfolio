import React from "react";
import ProgressBar from "react-animated-progress-bar";
import { ThemeContext } from "../../context/themeContext";
import { useContext } from "react";

const Education = () => {
  const { darktheme, setDarkTheme } = useContext(ThemeContext);

  return (
    <React.Fragment>
      <div id="education" className="education px-8 py-16 sm:px-20 mx-auto">
        <div className="edu_title">
          <h1 className="text-2xl font-black">Education and Skills</h1>
        </div>
        <div className="edu_sec flex flex-wrap">
          <div data-aos="fade-up" data-aos-duration="500" className="edu w-full sm:w-2/5">
            <div className={`box_edu mb-10 sm:mb-0  mt-16 ${ darktheme ? "bg-gray-900" : "bg-gray-100"} rounded-xl`}>
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
          {/* <div data-aos="fade-up" data-aos-duration="700" className="box_skill px-10 w-full sm:w-3/5  items-center justify-center">
              <div className="progress">
                <span>HTML</span>
                <ProgressBar
                  width="100%"
                  height="12px"
                  rect
                  fontColor="gray"
                  percentage="95"
                  rectPadding="1px"
                  rectBorderRadius="20px"
                  trackPathColor="transparent"
                  bgColor="#ffc107"
                  trackBorderColor="grey"
                />
              </div>
              <div className="progress">
                <span>CSS</span>
                <ProgressBar
                  width="100%"
                  height="12px"
                  rect
                  fontColor="gray"
                  percentage="70"
                  rectPadding="1px"
                  rectBorderRadius="20px"
                  trackPathColor="transparent"
                  bgColor="#ffc107"
                  trackBorderColor="grey"
                />
              </div>
              <div className="progress">
                <span>JAVASCRIPT</span>
                <ProgressBar
                  width="100%"
                  height="12px"
                  rect
                  fontColor="gray"
                  percentage="85"
                  rectPadding="1px"
                  rectBorderRadius="20px"
                  trackPathColor="transparent"
                  bgColor="#ffc107"
                  trackBorderColor="grey"
                />
              </div>
              <div className="progress">
                <span>REACT JS</span>
                <ProgressBar
                   width="100%"
                   height="12px"
                  rect
                  fontColor="gray"
                  percentage="70"
                  rectPadding="1px"
                  rectBorderRadius="20px"
                  trackPathColor="transparent"
                  bgColor="#ffc107"
                  trackBorderColor="grey"
                />
              </div>
              <div className="progress">
                <span>NODE JS</span>
                <ProgressBar
                  width="100%"
                  height="12px"
                  rect
                  fontColor="gray"
                  percentage="60"
                  rectPadding="1px"
                  rectBorderRadius="20px"
                  trackPathColor="transparent"
                  bgColor="#ffc107"
                  trackBorderColor="grey"
                />
              </div>
            </div> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Education;
