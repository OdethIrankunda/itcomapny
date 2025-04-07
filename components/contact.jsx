import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaPinterestP } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import {TbSlashes } from "react-icons/tb";

export default function Contact (){
  return(
    <div className="md:flex min-h-screen p-8 md:p-16 gap-8">
      <div className=" w-full md:w-[40%] min-h-full bg-cover bg-no-repeat rounded-2xl bg-[url(/images/bg2.avif)] flex flex-col justify-between p-12 text-white">
      <div className="">
        <h3 className="font-bold pb-2">Address</h3>
        <p className="text-sm">2464 Royal Ln. Messa</p>
        <p className="text-sm">New Jersey 2464</p>
      </div>
      <div className="">
        <h3 className="font-bold pb-2">Contacts</h3>
        <p className="text-sm">Phone: +(000)-000-0000</p>
        <p className="text-sm">Email: example@gmail.com</p>
      </div>
      <div className="">
        <h3 className="font-bold pb-2">Open Time</h3>
        <p className="text-sm">Monday-Friday: 10:00-20:00</p>
      </div>
      <div className="">
        <h3 className="font-bold pb-2">Stay Connected</h3>
        <div className="flex items-center gap-2">
          <a href="#" className="text-white bg-[#3b73fb] p-2  flex items-center justify-center w-10 h-10 rounded-full">
            <div><FaFacebookF className="w-4 bg-white h-4 p-0.5 rounded-full text-[#3b73fb]"/></div>
          </a>
          <a href="#" className="text-white bg-[#3b73fb] p-2  flex items-center justify-center w-10 h-10 rounded-full">
          <div><RiTwitterXFill className="w-4 bg-white h-4 p-0.5 rounded-full text-[#3b73fb]"/></div>
          </a>
          <a href="#" className="text-white bg-[#3b73fb] p-2  flex items-center justify-center w-10 h-10 rounded-full">
          <div><FaPinterestP className="w-4 bg-white h-4 p-0.5 rounded-full text-[#3b73fb]"/></div>
                      
          </a>
          <a href="#" className="text-white bg-[#3b73fb] p-2  flex items-center justify-center w-10 h-10 rounded-full">
          <div><IoLogoInstagram className="w-4 bg-white h-4 p-0.5 rounded-full text-[#3b73fb]"/></div>
          </a>
          <a href="#" className="text-white bg-[#3b73fb] p-2  flex items-center justify-center w-10 h-10 rounded-full">
          <div><FaYoutube className="w-4 bg-white h-4 p-0.5 rounded-full text-[#3b73fb]"/></div>
          </a>
        </div>
      </div>
      </div>
      <div className=" md:w-[60%] w-full">
        <p className="flex items-center gap-2 pt-4 font-semibold"><TbSlashes className="text-[#3b73fb] text-2xl"/>Contact Us</p>
        <h2 className="text-3xl font-bold w-full">Get Your <span className="text-[#3b73fb]">Free Qoute</span> Today!</h2>
        <div className="grid grid-cols-2 pt-8 gap-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="Name" className="font-semibold">Your Name *</label>
            <input type="text" placeholder="Ex. John Doe" className="border py-2 px-4 rounded-2xl bg-gray-100 border-gray-300" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="Email" className="font-semibold">Email *</label>
            <input type="email" placeholder="example@gmail.com" className="border py-2 px-4 rounded-2xl bg-gray-100 border-gray-300" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="font-semibold">Phone *</label>
            <input type="number" placeholder="Enter Phone Number" className="border py-2 px-4 rounded-2xl bg-gray-100 border-gray-300" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="services" className="font-semibold">Services *</label>
            <select name="" id="" placeholder="Select Service" className="border py-2 px-4 rounded-2xl bg-gray-100 border-gray-300"></select>
          </div>
        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-semibold">Your Message *</label>
            <input type="text" placeholder="Enter here..." className="border py-2 px-4 rounded-2xl bg-gray-100 border-gray-300 h-40" />
            <a href="#" className="text-white bg-[#3b73fb] py-2 px-4 rounded-full text-base w-36 mt-4">Send Message</a>
          </div>
      </div>
    </div>
  );
}