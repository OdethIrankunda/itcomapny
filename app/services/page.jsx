import Header from '@/components/header'
import { ArrowRight } from "lucide-react";
import { Laptop } from "lucide-react";
import { Smartphone } from "lucide-react";
import { Mail } from "lucide-react";
import {TbSlashes } from "react-icons/tb";
import { PiGraphicsCardBold } from "react-icons/pi";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaCloudRain } from "react-icons/fa6";
import { LiaListAltSolid } from "react-icons/lia";
import { IoGameController } from "react-icons/io5";
import { BsFillShieldLockFill } from "react-icons/bs";


import React from 'react'
import ChooseUs from '@/components/choose-us';
import Contact from '@/components/contact';
import Faqs from '@/components/faqs';
import Footer from '@/components/footer';
import PagesHero from '@/components/pages-hero';

export default function ServicesPage() {
  const cards=[
      {
        icon:<Mail/>,
        title: "Web Development",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, molestiae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati esse pariatur neque cum sint omnis et eveniet iusto ad consequuntur.",
        href:"#"
      },
      {
        icon:<Laptop/>,
        title: "UI/UX Design",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, molestiae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati esse pariatur neque cum sint omnis et eveniet iusto ad consequuntur.",
        href:"#"
      },
      {
        icon:<Smartphone/>,
        title: "Mobile App Development",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, molestiae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati esse pariatur neque cum sint omnis et eveniet iusto ad consequuntur.",
        href:"#"
      },
      {
        icon:<PiGraphicsCardBold />,
        title: "Graphics Design",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, molestiae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati esse pariatur neque cum sint omnis et eveniet iusto ad consequuntur.",
        href:"#"
      },
      {
        icon:<HiOutlineSpeakerphone />,
        title: "Digital Marketing",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, molestiae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati esse pariatur neque cum sint omnis et eveniet iusto ad consequuntur.",
        href:"#"
      },
      {
        icon:<FaCloudRain />,
        title: "Cloud Computing",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, molestiae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati esse pariatur neque cum sint omnis et eveniet iusto ad consequuntur.",
        href:"#"
      },
      {
        icon:<LiaListAltSolid />,
        title: "Q & A Consulting",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, molestiae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati esse pariatur neque cum sint omnis et eveniet iusto ad consequuntur.",
        href:"#"
      },
      {
        icon:<IoGameController />,
        title: "Video Gaming",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, molestiae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati esse pariatur neque cum sint omnis et eveniet iusto ad consequuntur.",
        href:"#"
      },
      {
        icon:<BsFillShieldLockFill />,
        title: "NetWork Security",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, molestiae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati esse pariatur neque cum sint omnis et eveniet iusto ad consequuntur.",
        href:"#"
      },
    ]
  return (
    <div>
      <Header/>
      <PagesHero/>
      <div className="p-8 md:p-16 text-[#161c3b] bg-gray-100 flex flex-col gap-4 items-center justify-center">
            <p className="flex items-center gap-2 pt-4 font-semibold"><TbSlashes className="text-[#3b73fb] text-2xl"/>Our Services</p>
            <div className="md:flex items-center justify-between ">
              <h2 className="text-5xl font-bold w-full ">Services we provide <span className="text-[#3b73fb] ">to elevate your business</span></h2>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4 py-4">
             {
              cards.map((card)=>{
               return(
                <div className="flex p-6 rounded-2xl flex-col gap-2 bg-white">
                <div className="p-4 bg-[#3b73fb] text-white w-16 rounded-2xl">
                {card.icon}
                </div>
                
                <h2 className="font-semibold text-2xl">{card.title}</h2>
                <p>{card.description}</p>
                <a href={card.href} className="flex items-center gap-2">Learn More <ArrowRight className=""/></a>
              </div>
               ) 
              })
             } 
            </div>
          </div>
          <ChooseUs/>
          <Contact/>
          <Faqs/>
          <Footer/>
    </div>
  )
}
