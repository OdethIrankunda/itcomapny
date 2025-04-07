import { Boxes } from "lucide-react";
import { Frown } from "lucide-react";
import { Lightbulb } from "lucide-react";
import { FaFileAlt } from "react-icons/fa";
import {TbSlashes } from "react-icons/tb";
export default function WorkProcess() {
  return(
    <div className="p-8 md:p-16 text-[#161c3b] flex items-center gap-4 flex-col">
      <p className="flex items-center gap-2 pt-4 font-semibold"><TbSlashes className="text-[#3b73fb] text-2xl"/>Our Work Process</p>
      <h2 className="text-5xl font-bold w-full md:w-[50%]">Our Proven <span className="text-[#3b73fb] ">Work Process</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-7">
      <div className="flex p-6 rounded-2xl flex-col gap-2 items-center bg-white">
          <div className="flex">
          <div className=" relative p-4 bg-[#3b73fb] text-white w-16 h-16 rounded-full text-3xl">
          <FaFileAlt />
          <p className="w-8 h-8 p-2 bg-[#161c3b] text-white border-2 border-white rounded-full flex items-center absolute right-[-14] top-4 text-sm">01</p>
          </div>
          </div>
          
          <h2 className="font-semibold text-2xl">Consultation</h2>
          <p className="text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, accusantium. Ut provident ad deserunt excepturi.</p>
          
        </div>
        <div className="md:w-40 md:h-0.5 h-14 w-0.5 ml-[50%] md:ml-0 bg-[#161c3b] md:mt-10"></div>
      <div className="flex p-6 rounded-2xl flex-col items-center gap-2 bg-white">
          <div className="flex items-center">
          <div className=" relative p-4 bg-[#3b73fb] text-white w-16 h-16 rounded-full text-3xl">
          <Lightbulb/>
          <p className="w-8 h-8 p-2 bg-[#161c3b] text-white border-2 border-white rounded-full flex items-center absolute right-[-14] top-4 text-sm">02</p>
          </div>
          </div>
          
          <h2 className="font-semibold text-2xl">Strategies</h2>
          <p className="text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, accusantium. Ut provident ad deserunt excepturi.</p>
          
        </div>
        <div className="md:w-40 md:h-0.5 h-14 w-0.5 ml-[50%] md:ml-0 bg-[#161c3b] md:mt-10"></div>
      <div className="flex p-6 rounded-2xl flex-col gap-2 items-center bg-white">
          <div className="flex">
          <div className=" relative p-4 bg-[#3b73fb] text-white w-16 h-16 rounded-full text-3xl">
          <Boxes/>
          <p className="w-8 h-8 p-2 bg-[#161c3b] text-white border-2 border-white rounded-full flex items-center absolute right-[-14] top-4 text-sm">03</p>
          </div>
          </div>
          
          <h2 className="font-semibold text-2xl">Implementation</h2>
          <p className="text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, accusantium. Ut provident ad deserunt excepturi.</p>
          
        </div>
        <div className="md:w-40 md:h-0.5 h-14 w-0.5 ml-[50%] md:ml-0 bg-[#161c3b] md:mt-10"></div>
      <div className="flex p-6 rounded-2xl flex-col gap-2 bg-white items-center">
          <div className="flex">
          <div className=" relative p-4 bg-[#3b73fb] text-white w-16 h-16 rounded-full text-3xl">
          <Frown/>
          <p className="w-8 h-8 p-2 bg-[#161c3b] text-white border-2 border-white rounded-full flex items-center absolute right-[-14] top-4 text-sm">04</p>
          </div>
          </div>
          
          <h2 className="font-semibold text-2xl">Final Results</h2>
          <p className="text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, accusantium. Ut provident ad deserunt excepturi.</p>
          
        </div>
      </div>
    </div>
  );
}