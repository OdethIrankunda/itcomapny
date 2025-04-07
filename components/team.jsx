import {TbSlashes } from "react-icons/tb";
export default function Team (){
  return(
    <div className="p-8 md:p-16 text-[#161c3b] min-h-screen ">
      <p className="flex items-center gap-2 pt-4 font-semibold"><TbSlashes className="text-[#3b73fb] text-2xl"/>Our Team</p>
      <div className="md:flex items-center justify-between ">
        <h2 className="md:text-5xl text-3xl font-bold w-full md:w-[50%]">Meet Our<span className="text-[#3b73fb] ">Expert Team</span></h2>
        <a href="#" className="text-white bg-[#3b73fb] py-2 px-4 rounded-full text-base flex items-center gap-2">View All</a>
      </div>
   <div className="grid md:grid-cols-3 grid-cols-1 gap-4 py-4 pb-8 md:pb-16">
    <div className="flex rounded-2xl flex-col gap-2 border border-gray-300">
      <img src="/images/profile1.avif" className="rounded-t-2xl h-[70%] object-cover" alt="" />
    <div className="p-4 rounded-b-2xl">
    <p className="font-semibold">Jenny Alexander</p>
    <p className="text-sm">Chief Executive Officer</p>
    </div>
    </div>
    <div className="flex rounded-2xl flex-col gap-2 border border-gray-300">
      <img src="/images/profile2.avif" className="rounded-t-2xl h-[70%] object-cover" alt="" />
    <div className="p-4 rounded-b-2xl">
    <p className="font-semibold">Olivia Hughes</p>
    <p className="text-sm">Chief Technology Officer</p>
    </div>
    </div>
    <div className="flex rounded-2xl flex-col gap-2 border border-gray-300">
      <img src="/images/profile3.avif" className="rounded-t-2xl h-[70%] object-cover" alt="" />
    <div className="p-4 rounded-b-2xl">
    <p className="font-semibold">John Doe</p>
    <p className="text-sm">IT Manager</p>
    </div>
    </div>
   </div>
   <div className="bg-[url(/images/herobg1.jpg)] max-w-screen min-h-[30%] bg-cover bg-no-repeat relative text-white p-8 md:p-16 md:px-24">
   <div className="absolute inset-0 bg-[#161c3b] opacity-80"></div>
   <div className="grid md:grid-cols-7 grid-cols-2 gap-4">
    <div className="z-10">
    <p className="font-semibold text-2xl">150+</p>
    <p className="text-sm">Team Members</p>
    </div>
    <div className="w-0.5 h-full bg-white z-10 md:block hidden "></div>
    <div className="z-10">
    <p className="font-semibold text-2xl">2000+</p>
    <p className="text-sm">Happy Clients</p>
    </div>
    <div className="w-0.5 h-full bg-white z-10 md:block hidden "></div>
    <div className="z-10">
    <p className="font-semibold text-2xl">99%</p>
    <p className="text-sm">Customer Satisfaction</p>
    </div>
    <div className="w-0.5 h-full bg-white z-10 md:block hidden"></div>
    <div className="z-10">
    <p className="font-semibold text-2xl">18+</p>
    <p className="text-sm">Years Experience</p>
    </div>
    
   </div>
   </div>
    </div>
  );
}