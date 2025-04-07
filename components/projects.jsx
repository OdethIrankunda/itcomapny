import { MoveUpRight } from "lucide-react";
import {TbSlashes } from "react-icons/tb";
export default function Projects(){
  return(
    <div className="md:p-16 p-8 text-[#161c3b] flex flex-col items-center justify-center gap-4">
      <p className="flex items-center gap-2 pt-4 font-semibold"><TbSlashes className="text-[#3b73fb] "/>Our Latest Projects</p>
      <h2 className="text-5xl font-bold">Explore Our Showcase of</h2>
      <h2 className="text-5xl font-bold text-[#3b73fb]">Featured Works</h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 min-h-screen">
        <div className="p-4 flex relative bg-cover bg-no-repeat items-baseline flex-col text-white gap-4 rounded-2xl bg-[url(/images/project3.avif)] justify-end">
        <div className="absolute rounded-2xl inset-0 bg-[#161c3b] opacity-50"></div>
        <p className="z-10 text-2xl">Care Connect Doctor Appointment</p>
        <div className="flex z-10 gap-4">
          <div className="flex items-center">
            <p className="py-2 px-4 text-sm rounded-full border border-white">UI/UX Design</p>
            <p className="py-2 px-4 text-sm rounded-full border border-white">App Design</p>
            <p className="py-2 px-4 text-sm rounded-full border border-white">WireFrame</p>
          </div>
          <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full text-white bg-[#161c3b] text-2xl relative z-10">
            <MoveUpRight/>
          </a>
        </div>
        </div>
        <div className=" p-4 flex relative bg-cover bg-no-repeat justify-end flex-col text-white gap-4 rounded-2xl bg-[url(/images/project2.avif)]">
        <div className="absolute rounded-2xl inset-0 bg-[#161c3b] opacity-50"></div>
        <p className="z-10 text-2xl">Care Connet Doctor Appointment</p>
        <div className="flex z-10 gap-4">
          <div className="flex items-center">
            <p className="py-2 px-4 text-sm rounded-full border border-white">UI/UX Design</p>
            <p className="py-2 px-4 text-sm rounded-full border border-white">App Design</p>
            <p className="py-2 px-4 text-sm rounded-full border border-white">WireFrame</p>
          </div>
          <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full text-white bg-[#161c3b] text-2xl relative z-10">
            <MoveUpRight/>
          </a>
        </div>
        </div>
        <div className="rounded-2xl p-4 flex relative bg-cover bg-no-repeat items-baseline flex-col text-white gap-4 bg-[url(/images/project1.jpg)] justify-end">
        <div className="absolute rounded-2xl inset-0 bg-[#161c3b] opacity-50"></div>
        <p className="z-10 text-2xl">Care Connet Doctor Appointment</p>
        <div className="flex z-10 gap-4">
          <div className="flex items-center">
            <p className="py-2 px-4 text-sm rounded-full border border-white">UI/UX Design</p>
            <p className="py-2 px-4 text-sm rounded-full border border-white">App Design</p>
            <p className="py-2 px-4 text-sm rounded-full border border-white">WireFrame</p>
          </div>
          <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full text-white bg-[#161c3b] text-2xl relative z-10">
            <MoveUpRight/>
          </a>
        </div>
        </div>
        <div className="rounded-2xl p-4 flex relative bg-cover bg-no-repeat items-baseline flex-col text-white gap-4 bg-[url(/images/project4.avif)] justify-end">
        <div className="absolute rounded-2xl inset-0 bg-[#161c3b] opacity-50"></div>
        <p className="z-10 text-2xl">Care Connet Doctor Appointment</p>
        <div className="flex z-10 gap-4">
          <div className="flex items-center">
            <p className="py-2 px-4 text-sm rounded-full border border-white">UI/UX Design</p>
            <p className="py-2 px-4 text-sm rounded-full border border-white">App Design</p>
            <p className="py-2 px-4 text-sm rounded-full border border-white">WireFrame</p>
          </div>
          <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full text-white bg-[#161c3b] text-2xl relative z-10">
            <MoveUpRight/>
          </a>
        </div>
        </div>
      </div>
      <a href="#" className="text-white bg-[#3b73fb] py-2 px-4 rounded-full text-base flex items-center gap-2">Visist All Works</a>
    </div>
  );
}