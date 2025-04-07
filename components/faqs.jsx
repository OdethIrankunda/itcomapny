import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { BiSolidMessageSquare } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";

import {TbSlashes } from "react-icons/tb";
export default function Faqs (){
 const questions =[
    {
      quiz:"What Services do you offer?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ab?"
    }, 
    {
      quiz:"How secure are your it solutions?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ab?"
    }, 
    {
      quiz:"Do you offer 24/7 technical support?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ab?"
    }, 
    {
      quiz:"What Services do you offer?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ab?"
    }, 
    {
      quiz:"What industries do you serve?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ab?"
    }, 
    {
      quiz:"Do you offer customised services?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ab?"
    }, 
    {
      quiz:"How can i contact your support team?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ab?"
    } 
  ]
  return(
<div className="p-8 md:p-16 text-[#161c3b] min-h-screen bg-gray-200">
  <p className="flex items-center gap-2 pt-4 font-semibold"><TbSlashes className="text-[#3b73fb] text-2xl"/>FAQS</p>
  <h2 className="text-4xl font-bold w-full md:w-[50%] pb-4">Question?<span className="text-[#3b73fb] ">Look Here.</span></h2>
  <div className="flex gap-8 md:flex-row flex-col">
    <div className="md:w-[60%] flex flex-col gap-2 w-full">
      {
        questions.map((question) =>{
          return(
            <div className="flex rounded-2xl flex-col gap-2 bg-white p-4">
        <div className="flex justify-between items-center font-semibold ">
        <p className="text-xl">{question.quiz}</p>
        <FaPlus className="" />
        <FiMinus className="hidden" />
        </div>
        <hr className="text-gray-100 hidden"/>
        <p className="text-sm hidden">{question.answer}</p>
        </div>
          );
        })
      }
    </div>
    <div className=" flex flex-col gap-4">
      <div className="w-full bg-cover bg-no-repeat rounded-2xl bg-[url(/images/bg2.avif)] flex flex-col justify-between items-center gap-4 p-4 text-white text-sm">
      <BiSolidMessageSquare  className="text-[#3b73fb] text-3xl"/>
      <p className=" font-semibold">You have a different Question?</p>
      <div className="">
        <p className="text-sm">Our team will anwer all your question.</p>
      <p className="text-sm">We ensure a quick response.</p></div>
      <a href="#" className="text-white bg-[#3b73fb] py-2 px-4 rounded-full text-base flex items-center gap-2">Contact Us</a>
      </div>
      <div className="bg-white p-4 rounded-2xl flex items-center gap-2 flex-col">
        <a href="#" className="flex gap-2 ">
        <FiPhoneCall className="text-[#3b73fb] p-1 bg-gray-200 w-8 h-8 rounded-full "/>
        <div className="">
          <p className="text-sm">Your comfort, Our responsibility</p>
          <p className="font-semibold">24/7 Services</p>
          <p className="text-sm">(000) 0000 000</p>
        </div>
        </a>
        
      </div>
    </div>
  </div>
</div>
  );
}