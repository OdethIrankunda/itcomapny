import {TbSlashes } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { PiFoldersFill } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaPinterestP } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { TiArrowRightThick } from "react-icons/ti";

export default function Footer (){
  return(
  <div className="p-8 md:p-16 text-[#161c3b] min-h-screen w-screen flex flex-col items-center justify-center">
  <p className="flex items-center gap-2 pt-4 font-semibold"><TbSlashes className="text-[#3b73fb] text-2xl"/>Our News Letter</p>
  <h2 className="md:text-4xl text-3xl font-bold w-full md:w-[50%]">Subscribe for<span className="text-[#3b73fb] ">Expert IT Tips and Special Offers</span></h2>
  <div className="flex items-center justify-between gap-4 md:flex-row flex-col pb-8 md:pb-16">
    <div className="flex justify-between items-center py-2 px-4 gap-2 rounded-full border border-gray-200"> 
    <MdOutlineEmail className="text-[#3b73fb] bg-gray-200 p-1 w-6 h-6 rounded-full"/>
    <input type="email" placeholder="Enter Your Email" /></div>
  <a href="#" className="text-white bg-[#3b73fb] py-2 px-8 rounded-full text-base flex items-center gap-2">Subscribe</a>
  </div>
  <div className="bg-[#161c3b] text-white w-full min-h-full p-8 md:p-16 ">
    <div className="flex items-center justify-between pb-8">
    <h2 className="md:text-4xl text-3xl font-bold w-full md:w-[50%]">Let's<span className="text-[#3b73fb] ">Connect</span>There</h2>
    <a href="#" className="text-white bg-[#3b73fb] py-2 px-4 rounded-full text-base flex items-center gap-2">Contact Us</a>
    </div>
    <hr className="text-[#5d709e]"/>
    <div className="grid grid-col-1 md:grid-cols-4 gap-8 pt-16">
      <div className=" flex flex-col gap-4">
      <a href="#" className="flex items-center gap-2">
      <PiFoldersFill fill="white" className="w-8 h-8 rounded-full bg-[#3b73fb] p-1"/>
      <p className="text-xl font-bold">IT Company <span className="text-[#3b73fb]">.</span></p>
      </a>
      <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam doloribus sunt atque. Veritatis enim quasi optio fugit!</p>
      <div className="flex gap-2">
          <a href="#" className="w-7 h-7 rounded-full p-1 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gray-600 opacity-35 rounded-full"></div>
                  <FaFacebookF className="w-4 bg-white h-4 p-0.5 rounded-full text-[#161c3b] z-10"/></a>
                <a href="#" className="w-7 h-7 rounded-full p-1 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gray-600 opacity-35 rounded-full"></div>
                  <RiTwitterXFill className="w-4 bg-white h-4 p-0.5 rounded-full text-[#161c3b] z-10"/></a>
                <a href="#" className="w-7 h-7 rounded-full p-1 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gray-600 opacity-35 rounded-full"></div>
                  <FaPinterestP className="w-4 bg-white h-4 p-0.5 rounded-full text-[#161c3b] z-10"/></a>
                <a href="#" className="w-7 h-7 rounded-full p-1 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gray-600 opacity-35 rounded-full"></div>
                  <IoLogoInstagram className="w-4 bg-white h-4 p-0.5 rounded-full text-[#161c3b] z-10"/></a>
                <a href="#" className="w-7 h-7 rounded-full p-1 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gray-600 opacity-35 rounded-full"></div>
                  <FaYoutube className="w-4 bg-white h-4 p-0.5 rounded-full text-[#161c3b] z-10"/></a>
              </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-base font-semibold">Navigation</p>
        <a href="#" className="text-sm">Our Team</a>
        <a href="#" className="text-sm">Career</a>
        <a href="#" className="text-sm">About Us</a>
        <a href="#" className="text-sm">Testimonials</a>
        <a href="#" className="text-sm">FAQs</a>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-base font-semibold">Contact</p>
        <a href="#" className="text-sm">(000)-0000-000</a>
        <a href="#" className="text-sm">example@gmail.com</a>
        <a href="#" className="text-sm">2462 Royal Ln. Messa <br />New Jersey 45463</a>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-base font-semibold">Get the Latest information</p>
        <div className="flex rounded-2xl bg-gray-700 justify-between">
          <input type="email" className="pl-4" placeholder="Email address" />
          <a href="#"><TiArrowRightThick  className="text-white text-4xl bg-[#3b73fb] p-2 rounded-r-2xl"/></a>
        </div>
      </div>
    </div>
  </div>
  <div className=" w-full flex md:flex-row flex-col bg-[#3b73fb] text-white items-center justify-between py-4 px-8 md:px-16">
    <p>© 2024 Copyrights IT Company Limited. All Rights Reserved</p>
    <div className="md:flex gap-2 item-center">
    <a href="#">User Terms and conditions</a>
    <div className="w-0.5 h-4 bg-white"></div>
    <a href="#">Privacy policy</a>
    </div>
  </div>
</div>
  );
} 