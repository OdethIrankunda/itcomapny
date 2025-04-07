import { Facebook } from "lucide-react";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaPinterestP } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { PiFoldersFill } from "react-icons/pi";
import Link from "next/link";
import { HiBars3 } from "react-icons/hi2";



export default function Header(){
  const navlinks = [
    {
      title:"Home",
      href: "/",
    },
    {
      title:"Services",
      href: "/services",
    },
    {
      title:"Projects",
      href: "/projects",
    },
    {
      title:"Blogs",
      href: "/blogs",
    },
    {
      title:"About Us",
      href: "/about",
    },
    {
      title:"Pricing",
      href: "/pricing",
    }
  ]
  return(
    <div className="">
      <div className="flex flex-col md:flex-row items-center bg-[#161c3b] text-white pl-8 md:pl-16 justify-between">
        <div className="md:flex items-center gap-4 py-2">
        <a href="#" className="flex items-center gap-2 pb-2 md:pb-0">
        <FaPhone fill="#3b73fb" />
        <p className="text-sm">0000-000-000</p>
        </a>
        <a href="#" className="flex items-center gap-2">
        <IoMdMail fill="#3b73fb" />
        <p className="text-sm">example@gmail.com</p>
        </a>
        <a href="#" className="md:flex items-center gap-2 hidden">
        <MdLocationOn fill="#3b73fb"/>
        <p className="text-sm">2464 Royal Ln.Mesa. New Jersey 454633</p>
        </a>
        </div>
        <div className="md:flex hidden bg-[#3b73fb] clip-trapezium px-16 py-2 gap-2">
          <a href="#"><FaFacebookF className="w-4 bg-white h-4 p-0.5 rounded-full text-[#3b73fb]"/></a>
          <a href="#"><RiTwitterXFill className="w-4 bg-white h-4 p-0.5 rounded-full text-[#3b73fb]"/></a>
          <a href="#"><FaPinterestP className="w-4 bg-white h-4 p-0.5 rounded-full text-[#3b73fb]"/></a>
          <a href="#"><IoLogoInstagram className="w-4 bg-white h-4 p-0.5 rounded-full text-[#3b73fb]"/></a>
          <a href="#"><FaYoutube className="w-4 bg-white h-4 p-0.5 rounded-full text-[#3b73fb]"/></a>
          
        </div>
      </div>
      <div className="flex justify-between items-center px-8 md:px-16 py-2 text-[#161c3b]">
        <a href="#" className="flex items-center gap-2">
        <PiFoldersFill fill="white" className="w-8 h-8 rounded-full bg-[#3b73fb] p-1"/>
        <p className="text-xl font-bold">IT Company<span className="text-[#3b73fb]">.</span></p>
        </a>
        <a href="#"><HiBars3 className="text-[#3b73fb] text-2xl md:hidden"/></a>
        <div className="md:flex hidden items-center gap-4">
        {
          navlinks.map((navlink) =>{
            return(
              <nav>
          <Link href={navlink.href} className="hover:text-blue-600">{navlink.title}</Link>
        </nav>
            )
          })
        }
        </div>
        <button className="text-white bg-[#3b73fb] py-2 px-4 rounded-full text-base hidden md:block">Get a Quote</button>
      </div>
    </div>
  );
}