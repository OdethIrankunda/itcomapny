import {TbSlashes } from "react-icons/tb";
import { MdOutlinePriceChange } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { FaBriefcase } from "react-icons/fa";
import { RiAwardFill } from "react-icons/ri";
import HeroFooter from "./hero-footer";
export default function ChooseUs(){
  const cards = [
    {
      icon:<MdOutlinePriceChange />,
      title: "Affordable Price",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, labore."
    },
    {
      icon:<RiTeamFill />,
      title: "Professional Team",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis labore quo ad pariatur! Fugit, nesciunt labore?"
    },
    {
      icon:<FaBriefcase />,
      title: "18+ Years of Experience",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga libero aliquam commodi? Veniam, quas repellendus."
    },
    {
      icon:<RiAwardFill />,
      title: "Award Winning",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus est debitis eaque quisquam optio, nulla laboriosam! Cupiditate!"
    },
  ]
  return(
    <div className="">
      <HeroFooter/>
      <div className="bg-white
       text-[#161c3b] p-8 md:p-16 min-h-screen">
      <p className="flex items-center gap-2 pt-4 font-semibold"><TbSlashes className="text-[#3b73fb] text-2xl"/>Why Choose Us</p>
      <div className="md:flex-row flex-col flex items-center justify-between ">
      <h2 className="text-5xl font-bold w-full md:w-[50%]">Why Trust Us for Your IT needs</h2>
      <a href="#" className="text-white bg-[#3b73fb] py-2 px-4 rounded-full">Get a Quote</a>
      </div>
      <div className="md:flex pt-4 gap-8 justify-center items-center">
        <div className="md:w-[50%] w-full h-full object-cover">
          <img src="/images/image6.avif" className="w-full"  alt="" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full md:w-[50%]">
        {
          cards.map((card)=> {
            return(
              <div className="flex p-4 rounded-2xl flex-col gap-2 ">
            <div className=" text-5xl text-[#3b73fb]">
            {card.icon}
            </div>
            
            <h2 className="font-semibold text-xl">{card.title}</h2>
            <p className="text-base">{card.description}</p>
          </div>
            )
          })
        }
        </div>
      </div>
    </div>
    <HeroFooter/>
    </div>
  );
}