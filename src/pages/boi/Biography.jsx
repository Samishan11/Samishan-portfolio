import React from 'react'
import { Link } from 'react-router-dom';
import img from "../../assets/about-me.jpg"
const Biography = () => {
    return (
        <div id='biography' className="bio_section pb-24 block sm:flex sm:mt-24 bg-gray-900 mt-20">
            <div className="circular_profile flex justify-center items-center w-full sm:w-2/4 mx-auto">
                <div data-aos="fade-up" className="circular_avatar text-center relative  w-[250px] h-[250px] border-[5px] border-orange-500 rounded-full sm:w-[350px] sm:h-[350px] bg-red-500 flex flex-col">
                    <img className="circular_avatar bg-cover object-cover rounded-full bg-red-500" src={img} alt="home" />
                    <div className="icons">
                        <div className="icon border-[2px] absolute hover:bg-orange-500 hover:scale-110 transition bottom-[10px] bg-black left-[15%] text-white h-[35px] w-[35px] flex justify-center items-center rounded-full">
                            <i className="fa-brands fa-facebook-f "></i>
                        </div>
                        <div className="icon border-[2px] absolute hover:bg-orange-500 hover:scale-110 transition bottom-[-12px] bg-black left-[30%] text-white h-[35px] w-[35px] flex justify-center items-center rounded-full">
                            <i className="fa-brands fa-instagram "></i>
                        </div>
                        <div className="icon border-[2px] absolute hover:bg-orange-500 hover:scale-110 transition bottom-[-18px] bg-black left-[45%] text-white h-[35px] w-[35px] flex justify-center items-center rounded-full">
                            <i className="fa-brands fa-twitter "></i>
                        </div>
                        <div className="icon border-[2px] absolute hover:bg-orange-500 hover:scale-110 transition bottom-[-10px] bg-black right-[30%] text-white h-[35px] w-[35px] flex justify-center items-center rounded-full">
                            <i className="fa-brands fa-linkedin-in "></i>
                        </div>
                        <div className="icon border-[2px] absolute hover:bg-orange-500 hover:scale-110 transition bottom-[10px] bg-black right-[15%] text-white h-[35px] w-[35px] flex justify-center items-center rounded-full">
                            <i className="fa-brands fa-github "></i>
                        </div>
                    </div>
                    <div className="name mt-10">
                        <span>Software Developer</span>
                        <h1 className='text-3xl font-bold mt-2'>Samishan Thapa</h1>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="200" className="about text-center sm:text-left mt-20 w-full sm:w-2/4 pr-10">
                <h1 className='text-3xl  font-black mb-10'>Biography</h1>
                <span className='text-[14px'>I'm a Freelancer Front-end Developer with over 3 years of experience. I'm from San Francisco. I code and create web elements for amazing people around the world. I like work with new people. New people new Experiences.</span>
                <p className='mt-10 text-[14px'>I'm a Freelancer Front-end Developer with over 3 years of experience. I'm from San Francisco. I code and create web elements for amazing people around the world. I like work with new people. New people new Experiences.</p>
                <div className="info mt-10 flex w-full">
                    <div className="right w-2/4">
                        <p>Name: <span className='text-sm'>Samishan Thapa</span> </p>
                        <p>Birthday: <span className='text-sm'>16th September 2000</span> </p>
                        <p>Age: <span className='text-sm'>22</span> </p>
                        <p>Address: <span className='text-sm'>Kathmandu</span> </p>
                    </div>
                    <div className="right w-2/4">
                        <p>Name: <span className='text-sm'>Samishan Thapa</span> </p>
                        <p>Birthday: <span className='text-sm'>16th September 2000</span> </p>
                        <p>Age: <span className='text-sm'>22</span> </p>
                        <p>Address: <span className='text-sm'>Kathmandu</span> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Biography