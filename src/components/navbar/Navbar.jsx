import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navItems = [
    { id: 1, text: "Documentos", redirectto: "/idsdata", target: "_self" },
    { id: 2, text: "Perfiles", redirectto: "/userdata", target: "_self" },
    {
      id: 4,
      text: "API",
      redirectto: "https://personagen.fly.dev/swagger-ui/index.html#/",
      target: "_blank",
    },
  ];

  return (
    // <div classNameName="justify-center mt-10 border-2 border-black rounded-3xl bg-[#EAD8C0] flex items-center h-24 max-w-[1240px] mx-auto px-4">
    //   <ul classNameName="flex flex-grow-0">
    //     {navItems.map((item) => (
    //       <Link
    //         key={item.id}
    //         to={item.redirectto}
    //         classNameName="p-4 font-bold text-3xl hover:bg-[#D1BB9E] text-[#592407] rounded-xl m-2 cursor-pointer duration-300"
    //         target={item.target}
    //       >
    //         {item.text}
    //       </Link>
    //     ))}
    //   </ul>
    // </div>
    // <div classNameName="app">
    //   <nav>
    //     <div classNameName="max-w-7xl mx-auto px-4 bg-[#EAD8C0] ">
    //       <div classNameName="flex justify-between w-5/6 ">
    //         {/* Primary menu and logo */}
    //         <div classNameName="flex items-center gap-16 my-12">
    //           {/* logo */}
    //           <div>
    //             <a
    //               href="/"
    //               classNameName="flex gap-1 items-center"
    //             >
    //               <PaperAirplaneIcon classNameName="h-6 w-6 text-primary text-[#592407]" />
    //               <span classNameName="text-[#592407] font-bold text-3xl">PersonaGen</span>
    //             </a>
    //           </div>
    //           {/* primary */}
    //           <div classNameName="hidden lg:flex gap-8 mx-auto">
    //             {navItems.map((item) => (
    //               <Link
    //                 key={item.id}
    //                 to={item.redirectto}
    //                 classNameName="p-4 font-bold text-3xl hover:bg-[#D1BB9E] text-[#592407] rounded-xl m-2 cursor-pointer duration-300"
    //                 target={item.target}
    //               >
    //                 {item.text}
    //               </Link>
    //             ))}
    //           </div>
    //         </div>
    //         {/* secondary */}
    //         <div classNameName="flex gap-6">
    //           {/* Mobile navigation toggle */}
    //           <div classNameName="lg:hidden flex items-center">
    //             <button onClick={() => setToggleMenu(!toggleMenu)}>
    //               <Bars3Icon classNameName="h-6" />
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     {/* mobile navigation */}
    //     <div
    //       classNameName={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
    //         !toggleMenu ? "h-0" : "h-full"
    //       }`}
    //     >
    //       <div classNameName="px-8">
    //         <div classNameName="flex flex-col gap-8 font-bold tracking-wider">
    //           {navItems.map((item) => (
    //             <Link
    //               key={item.id}
    //               to={item.redirectto}
    //               classNameName="p-4 font-bold text-3xl hover:bg-[#D1BB9E] text-[#592407] rounded-xl m-2 cursor-pointer duration-300"
    //               target={item.target}
    //             >
    //               {item.text}
    //             </Link>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
    // </div>

    <div className="bg-[#EAD8C0] md:flex md:justify-between md:items-center md:px-4 md:py-3">
      <div className="flex items-center justify-between px-4 py-3 md:p-0">
        <div>
          <span className="text-3xl font-bold text-[#592407]">PersonaGen</span>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setToggleMenu(!toggleMenu)}
            type="button"
            className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
          >
            {!toggleMenu ? <TiThMenu color="#592407" size={28} /> : <ImCross color="#592407" size={24} className="text-bold" />}
          </button>
        </div>
      </div>
      <nav className={`${toggleMenu ? "block" : "hidden"} px-2 pt-2 pb-4 md:flex md:p-0`}>
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.redirectto}
            className="block p-4 font-bold text-3xl hover:bg-[#D1BB9E] text-[#592407] rounded-xl m-2 cursor-pointer duration-300"
            target={item.target}
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            {item.text}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
