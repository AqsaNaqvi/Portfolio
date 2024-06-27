import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiLogoReact } from "react-icons/bi";
import { DiJavascript } from "react-icons/di"
import { SiTailwindcss } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { ReactTyped} from "react-typed";

function Home() {
    return (
      <>
        <div name='Home'  className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
            <div className='flex flex-col md:flex-row'>
              <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
              <span className='text-2xl'>Welcome! Inspiring Innovation.</span>
              <div className='flex space-x-1 text-2xl md:text-4xl'>
              <h1>Hello, I'm </h1>
              <ReactTyped
                  className='text-red-700 font-bold'
                  strings={[" Developer","Programmer", "Coder"]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop={true}
                 />
              </div>
              <br />
              <p className='text-sm md:text-md text-justify'>Front-end developers build everything included in a website’s front end, or client side, which is the side of a website that users directly interact with. They construct the user interface and visual elements of websites and web applications, including elements like buttons, images and menus.</p>
              <br />
              {/* Social media Icon */}
              <div className='flex flex-col items-center md:flex-row space-y-6 md:space-y-0 justify-between'>
              <div className='space-y-2'>
                <h1 className='font-bold text-center'>Available On</h1>
                <ul className='flex space-x-5 '>
                    <li>
                      <a href="https://www.facebook.com/" target='_blank'>
                      <FaFacebook className='text-2xl cursor-pointer' />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/feed/" target='_blank'>
                      <FaLinkedin className='text-2xl cursor-pointer'/>
                      </a>
                      </li>
                    <li>
                      <a href="https://github.com/AqsaNaqvi" target='_blank'>
                      <FaGithub   className='text-2xl cursor-pointer'/>
                      </a>
                      </li>
                    <li>
                      <a href="https://mail.google.com/mail/u/0/#inbox" target='_blank'>
                      <MdEmail    className='text-2xl cursor-pointer'/>
                      </a>
                      </li>
                </ul>
              </div>
              <div className='space-y-2'>
                 <h1 className='font-bold text-center'>Currently Working On</h1>
                <div className='flex space-x-5 '>
                    <BiLogoReact  className='text-xl    md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]  cursor-pointer' />
                    <DiJavascript className='text-xl    md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]  cursor-pointer'/>
                    <SiTailwindcss  className='text-xl  md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer'/>
                    <FaFigma     className='text-xl     md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer'/>
                </div>
              </div>
              </div>

              </div>
              <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
              <img src="aqsa.jpeg" className='rounded-full md:w-[450px] md:h-[450px] '  alt="" />
              </div>
            </div>
        </div>
        <br />
        <hr />
        </>
    )
}

export default Home
