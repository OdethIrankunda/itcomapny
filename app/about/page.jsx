
import Links from "@/components/links";
import {TbSlashes } from "react-icons/tb";
export default function About() {
  return(
    <div className="">
      <div className="md:flex md:p-16 p-8 gap-8 relative">
        <div className="grid w-full md:w-[50%] grid-cols-7 gap-2 rounded-4xl h-[50%] grid-rows-2">
        <img className="h-full overflow-hidden rounded-tl-4xl col-span-4 row-span-1 object-cover border-l-4 border-l-[#3b73fb] border-t-4 border-t-[#3b73fb]" src="/images/image2.avif" alt=""/>
          <img className="h-full overflow-hidden rounded-tr-4xl col-span-3 row-span-1 object-cover " src="/images/image1.avif" alt="" />
          <img className="h-full overflow-hidden rounded-bl-4xl col-span-3 row-span-1 object-cover" src="/images/image6.avif" alt="" />
          <img className="h-full overflow-hidden rounded-br-4xl col-span-4 object-cover border-r-4 border-r-[#161c3b] border-b-4 border-b-[#161c3b]" src="/images/image4.jpg" alt=""/>
        </div>
        <div className="md:w-[50%] w-full text-[#161c3b] flex flex-col gap-4">
          <p className="flex items-center gap-2 pt-4"><TbSlashes className="text-[#3b73fb] font-semibold" />About Us</p>
          <h2 className="text-5xl font-bold">Transforming <span className="text-[#3b73fb]">ideas into digital reality</span></h2>
          <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam itaque esse facilis exercitationem voluptas vitae velit aperiam explicabo ipsum ullam? Ex ab officia, numquam veritatis dolores veniam neque minus sit.</p>
          <div className="flex items-center justify-between flex-wrap pt-4">
            <div className="p-4 px-8 md:border-r border-r-gray-300">
              <h3 className="text-[#3b73fb] text-2xl">150+</h3>
              <p className="text-sm">Team Members</p>
            </div>
            <div className="p-4 px-8 md:border-r border-r-gray-300">
              <h3 className="text-[#3b73fb] text-2xl">2000+</h3>
              <p className="text-sm">Happy clients</p>
            </div>
            <div className="p-4 px-8">
              <h3 className="text-[#3b73fb] text-2xl">90%</h3>
              <p className="text-sm">Client Satisfaction</p>
            </div>
          </div>
          <div className="">
          <p className="italic font-mono">Jenny Alexander</p>
          <p>Jenny Alexander <span className="text-[#3b73fb] text-3xl">.</span> <span className="text-2xl">CEO</span></p>
          </div>
        </div>
        <Links/>
      </div>
    </div>
  );
}