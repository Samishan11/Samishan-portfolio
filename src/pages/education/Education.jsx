import React from "react";
import ProgressBar from "react-animated-progress-bar";

const Education = () => {
  return (
    <React.Fragment>
      <div className="education px-8 py-16 sm:px-20 mx-auto">
        <div className="edu_title">
          <h1 className="text-2xl font-black">Education and Skills</h1>
        </div>
        <div className="edu_sec flex">
          <div data-aos="fade-up" data-aos-duration="500" className="edu">
            <div className="box_edu h-[350px] w-[400px] mt-16 bg-gray-900 rounded-xl">
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
          <div className="box_skill px-10 items-center justify-center">
              <div className="progress">
                <span>HTML</span>
                <ProgressBar
                  width="400px"
                  height="10px"
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
                  width="400px"
                  height="10px"
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
                <span>JAVA script</span>
                <ProgressBar
                  width="400px"
                  height="10px"
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
                  width="400px"
                  height="10px"
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
                  width="400px"
                  height="10px"
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
            </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Education;
