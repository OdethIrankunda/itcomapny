import {TbSlashes } from "react-icons/tb";
import HeroFooter from "./hero-footer";
import { RiStarSFill } from "react-icons/ri";

export default function Testimonials (){
  return(
    <div className="">
      <HeroFooter/>
      <div className="md:p-16  p-8 bg-[url(/images/bg4.png)] max-w-screen min-h-screen bg-cover bg-no-repeat text-white flex flex-col items-center justify-center">
      <p className="flex items-center gap-2 pt-4 font-semibold"><TbSlashes className="text-[#3b73fb]"/>Testimonials</p>
      <h2 className="md:text-5xl text-3xl pt-2 font-bold">Testimonials:</h2>
      <h2 className="md:text-5xl text-3xl font-bold text-[#3b73fb] pb-4">Trusted By Our Clients</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col gap-2 p-4 px-8 rounded-2xl relative">
      <div className="absolute inset-0 bg-gray-600 opacity-35 rounded-2xl"></div>
      <div className="flex items-center gap-2 z-10">
      <RiStarSFill className="text-yellow-600 text-3xl"/>
      <RiStarSFill className="text-yellow-600 text-3xl"/>
      <RiStarSFill className="text-yellow-600 text-3xl"/>
      <RiStarSFill className="text-yellow-600 text-3xl"/>
      <RiStarSFill className="text-yellow-600 text-3xl"/>
      <p>5.0</p>
      </div>
      <h3 className="font-semibold z-10">A wonderful Experience</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora nobis alias similique pariatur, a labore provident. Commodi delectus in laborum tempore. Pariatur, nobis ratione.</p>
      <div className="flex items-center gap-4 z-100">
        <img className="w-10 h-10 rounded-full object-cover" src="/images/profile1.avif" alt="" />
        <div className="">
          <p >Jenny Wilson</p>
          <p className="text-sm">Owner, Wilson Furniture</p>
        </div>
      </div>
      </div>
      <div className="flex flex-col gap-2 p-4 px-8 rounded-2xl relative">
      <div className="absolute inset-0 bg-gray-600 opacity-35 rounded-2xl"></div>
      <div className="flex items-center gap-2 z-10">
      <RiStarSFill className="text-yellow-600 text-3xl"/>
      <RiStarSFill className="text-yellow-600 text-3xl"/>
      <RiStarSFill className="text-yellow-600 text-3xl"/>
      <RiStarSFill className="text-yellow-600 text-3xl"/>
      <RiStarSFill className="text-yellow-600 text-3xl"/>
      <p>5.0</p>
      </div>
      <h3 className="font-semibold z-10">Awesome Customer care</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora nobis alias similique pariatur, a labore provident. Commodi delectus in laborum tempore. Pariatur, nobis ratione.</p>
      <div className="flex items-center gap-4 z-100">
        <img className="w-10 h-10 rounded-full object-cover" src="/images/profile2.avif" alt="" />
        <div className="">
          <p >Jolly Alexander</p>
          <p className="text-sm">Owner, Wilson Furniture</p>
        </div>
      </div>
      </div>
    </div>
    </div>
    </div>
  );
}