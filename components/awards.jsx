import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import {TbSlashes } from "react-icons/tb";

export default function Awards(){
  const cards=[
      
      {
        image:'/images/award.png',
        year:"2025",
        title: "Tech Innovator Award",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, molestiae?Lorem ipsum dolor sit ",
      },
      {
        image:'/images/award.png',
        year:"2024",
        title: "Smart Solutions Award",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, molestiae?Lorem ipsum dolor sit ",
      },
      {
        image:'/images/award.png',
        year:"2023",
        title: "Cloud Leadership award",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, molestiae?Lorem ipsum dolor sit ",
      },
      // {
      //   // image:'/images/award.png',
      //   year:"2022",
      //   title: "Web Development",
      //   description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, molestiae?Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      // },
      // {
      //   title: "UI/UX Design",
      //   description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, molestiae?Lorem ipsum dolor sit amet ",
        
      // },
    ]
  return(
    <div className="p-8 md:p-16 min-h-screen bg-gray-100 text-[#161c3b]">
      <p className="flex items-center gap-2 pt-4 font-semibold"><TbSlashes className="text-[#3b73fb] text-2xl"/>Our Awards</p>
            <div className="md:flex-row flex-col flex items-center justify-between">
            <h2 className="text-5xl font-bold w-full md:w-[50%]">Our Journeey to <span className="text-[#3b73fb]">Award Winning Success</span></h2>
            <div className="flex gap-2">
            <a href="#" className=" border p-2 rounded-full flex items-center justify-center w-10 h-10"><FaArrowLeft />
            </a>
            <a href="#" className="text-white bg-[#3b73fb] p-2  flex items-center justify-center w-10 h-10 rounded-full"><FaArrowRight />
            </a>
            </div>
            </div>
    <div className="grid gap-2 grid-cols-3 min-w-full py-8">
    {
      cards.map((card)=>{
        return(
        <div className="flex p-6 rounded-2xl flex-col gap-2 bg-white h-60">
        <div className=" justify-center flex flex-col pb-4">
        <img src="/images/award.png"  className="w-16" alt="" />
        <p className="text-sm">{card.year}</p>
        </div>
                        
        <h2 className="font-semibold text-base">{card.title}</h2>
        <p className="text-base">{card.description}</p>
        </div>
          ) 
           })
            } 
    </div>
    </div>
  );
}