import { ArrowRight } from "lucide-react";
import { Laptop } from "lucide-react";
import { Smartphone } from "lucide-react";
import { Mail } from "lucide-react";
import {TbSlashes } from "react-icons/tb";
export default function services(){
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
  ]
  return(
    <div className="p-8 md:p-16 text-[#161c3b] bg-gray-100">
      <p className="flex items-center gap-2 pt-4 font-semibold"><TbSlashes className="text-[#3b73fb] text-2xl"/>Our Services</p>
      <div className="md:flex items-center justify-between ">
        <h2 className="text-5xl font-bold w-full md:w-[50%]">Services we provide <span className="text-[#3b73fb] ">to elevate your business</span></h2>
      <a href="/services" className="text-white bg-[#3b73fb] py-2 px-4 rounded-full text-base flex items-center gap-2">View All Services</a>
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
  );
}