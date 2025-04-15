
import { FaArrowRight } from "react-icons/fa";
import { TbSlashes } from "react-icons/tb";
import Links from "./links";


export default function Hero(){
  
return(
<div className="p-16 bg-[url(/images/herobg1.jpg)] max-w-screen min-h-screen bg-cover bg-no-repeat relative text-white flex flex-col gap-4 md:pr-64">
<div className="absolute inset-0 bg-[#161c3b] opacity-80"></div>
<p className="z-100 relative flex items-center gap-2"><TbSlashes className="text-[#3b73fb]" />
Experience The Best IT Solutions</p>
<p className="z-100 relative text-3xl md:text-5xl font-bold">Where creativity meets cutting-edge Technology</p>
<p className="z-100 relative">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed neque provident impedit aliquid sunt et quasi, doloremque corrupti necessitatibus hic ad magni laudantium est quidem veritatis soluta. Adipisci, eum recusandae.</p>
<div className="flex flex-col md:flex-row items-center gap-4 z-100 relative">
<a href="/services" className="text-white bg-[#3b73fb] py-2 px-4 rounded-full text-base flex items-center gap-2">Explore More  <FaArrowRight />
</a>
<a href="/services" className="underline text-base">View all services </a>
</div>
<Links/>
</div>

);
}