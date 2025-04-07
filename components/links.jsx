import Link from "next/link";
export default function Links(){
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
<div className="flex z-100 flex-col items-center gap-2 absolute top-0 right-0 md:hidden bg-white text-[#161c3b] p-4">
  <div className="flex items-center flex-col gap-4">
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
          <button className="text-white bg-[#3b73fb] py-2 px-4 rounded-full text-base w-40">Get a Quote</button>
</div>
  );
}