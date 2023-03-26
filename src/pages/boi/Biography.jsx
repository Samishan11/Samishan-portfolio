import React from 'react'
import { Link } from 'react-router-dom';
import img from "../../assets/about-me.jpg"
const Biography = () => {
    return (
        <div className="bio_section h-screen flex bg-gray-900">
            <div className="circular_profile w-4/5 mx-auto mt-28">
                <div data-aos="fade-up" className="circular_avatar relative w-[350px] border-[5px] border-orange-500 rounded-full h-[350px] bg-red-500 flex flex-col">
                    <img className="circular_avatar bg-cover object-cover rounded-full bg-red-500" src={img} alt="home" />
                    <div className="icons">
                        <div className="icon border-[2px] absolute bottom-[10px] bg-black left-[15%] text-white h-[35px] w-[35px] flex justify-center items-center rounded-full">
                            <i className="fa-brands fa-facebook-f"></i>
                        </div>
                        <div className="icon border-[2px] absolute bottom-[-12px] bg-black left-[30%] text-white h-[35px] w-[35px] flex justify-center items-center rounded-full">
                            <i className="fa-brands fa-instagram"></i>
                        </div>
                        <div className="icon border-[2px] absolute bottom-[-18px] bg-black left-[45%] text-white h-[35px] w-[35px] flex justify-center items-center rounded-full">
                            <i className="fa-brands fa-twitter"></i>
                        </div>
                        <div className="icon border-[2px] absolute bottom-[-10px] bg-black right-[30%] text-white h-[35px] w-[35px] flex justify-center items-center rounded-full">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </div>
                        <div className="icon border-[2px] absolute bottom-[10px] bg-black right-[15%] text-white h-[35px] w-[35px] flex justify-center items-center rounded-full">
                            <i className="fa-brands fa-github"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Biography