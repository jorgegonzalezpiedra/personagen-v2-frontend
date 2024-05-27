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
